import pandas as pd
from sqlalchemy import create_engine
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel


merge_df = pd.read_csv('./backend/python/merge_df.csv')
merge_df['categories'] = merge_df['categories'].apply(lambda x:x.replace("'",'').replace('"',''))
merge_df['authors'].fillna("['Unknown']", inplace=True)

merge_df['Price'].fillna(0,inplace=True)
merge_df.fillna('',inplace=True)


# 도움되는 리뷰
def review_help(x):
    help_li = x['reviewHelpfulness'].split('/')
    if help_li[1]=='0':
        return 0
    return int(help_li[0])**1.3/int(help_li[1])

merge_df1 = merge_df.copy()
merge_df1['reviewHelpfulness'] = merge_df1.apply(review_help,axis=1)
sort_df = merge_df1.sort_values(['Title','reviewHelpfulness'],ascending=[True,False]).head()

unique_df = merge_df1.drop_duplicates('Title').sort_values('Title').reset_index(drop=True)

# merge_df를 Title 열로 그룹화하고 review/score 열의 평균을 계산하며 나머지 열들의 모든 행을 출력
grouped_df = merge_df1.groupby('Title').agg({'reviewScore': 'mean','reviewText': 'first', 'image':'first',
                                            'authors': 'first', 'categories': 'first', 'Title':'size'})

grouped_df.columns = ['reviewScore', 'reviewText', 'image', 'authors', 'categories', 'count']

grouped_df.reset_index(inplace=True)

# 통계적 추천
C = grouped_df['reviewScore'].mean()
m = grouped_df['count'].quantile(0.9)
# count 상위 10%
q_books = grouped_df.copy().loc[grouped_df['count'] >= m]

def weighted_rating(x, m=m, C=C):
    v = x['count']
    R = x['reviewScore']
    return (v / (v + m) * R) + (m / (m + v) * C)

q_books['score'] = q_books.apply(weighted_rating, axis=1)

# 점수(score) 순
q_books = q_books.sort_values('score',ascending=False)

# 사람들이 많이 읽은 순 (리뷰수)
many_books = q_books.sort_values('count',ascending=False)



# 컨텐츠 기반 추천
tfidf = TfidfVectorizer(stop_words='english')

tfidf_matrix = tfidf.fit_transform(grouped_df['reviewText'])


cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

indices = pd.Series(grouped_df.index, index=grouped_df['Title']).drop_duplicates()


def get_recommendations(title, cosine_sim=cosine_sim):
    idx = indices[title]
    
    sim_scores = list(enumerate(cosine_sim[idx]))
    
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[:40]
    
    books_indices = [i[0] for i in sim_scores]
    
    return unique_df.iloc[books_indices]

df = get_recommendations('1001 Pearls of Wisdom')



# MySQL 연결 문자열 생성
connection_string = 'mysql+mysqlconnector://root:1023ldde@localhost/machine'

# MySQL 엔진 생성
engine = create_engine(connection_string)

df.to_sql(name='contents', con=engine, if_exists='replace', index=False)

q_books.to_sql(name='score_books', con=engine, if_exists='replace', index=False)
many_books.to_sql(name='many_books', con=engine, if_exists='replace', index=False)
unique_df.to_sql(name='books', con=engine, if_exists='replace', index=False)
