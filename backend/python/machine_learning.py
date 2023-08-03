import pandas as pd

merge_df = pd.read_csv('./backend/python/merge_df.csv')

unique_df = merge_df.drop_duplicates('Title').sort_values('Title').reset_index(drop=True)

# 도움되는 리뷰
def review_help(x):
    help_li = x['review/helpfulness'].split('/')
    if help_li[1]=='0':
        return 0
    return int(help_li[0])**1.3/int(help_li[1])

merge_df1 = merge_df.copy()
merge_df1['review/helpfulness'] = merge_df1.apply(review_help,axis=1)
sort_df = merge_df1.sort_values(['Title','review/helpfulness'],ascending=[True,False]).head()

# merge_df를 Title 열로 그룹화하고 review/score 열의 평균을 계산하며 나머지 열들의 모든 행을 출력
grouped_df = merge_df1.groupby('Title').agg({'review/score': 'mean','review/text': 'first',
                                            'authors': 'first', 'categories': 'first', 'Title':'size'})

grouped_df.columns = ['review/score', 'review/text', 'authors', 'categories', 'count']

grouped_df.reset_index(inplace=True)

grouped_df['authors'].fillna('["Unknown"]', inplace=True)

# 통계적 추천
C = grouped_df['review/score'].mean()
m = grouped_df['count'].quantile(0.9)
# count 상위 10%
q_books = grouped_df.copy().loc[grouped_df['count'] >= m]

def weighted_rating(x, m=m, C=C):
    v = x['count']
    R = x['review/score']
    return (v / (v + m) * R) + (m / (m + v) * C)

q_books['score'] = q_books.apply(weighted_rating, axis=1)

# 점수(score) 순
q_books = q_books.sort_values('score',ascending=False)

# 사람들이 많이 읽은 순 (리뷰수)
many_books = q_books[['Title','count','review/score','score']].sort_values('count',ascending=False)



# 컨텐츠 기반 추천
from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer(stop_words='english')

tfidf_matrix = tfidf.fit_transform(grouped_df['review/text'])

from sklearn.metrics.pairwise import linear_kernel

cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

indices = pd.Series(grouped_df.index, index=grouped_df['Title']).drop_duplicates()


def get_recommendations(title, cosine_sim=cosine_sim):
    idx = indices[title]
    
    sim_scores = list(enumerate(cosine_sim[idx]))
    
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[:11]
    
    books_indices = [i[0] for i in sim_scores]
    
    return unique_df.iloc[books_indices]

df = get_recommendations('1001 Pearls of Wisdom')


from sqlalchemy import create_engine

# MySQL 연결 문자열 생성
connection_string = 'mysql+mysqlconnector://root:mysql@localhost/machine'

# MySQL 엔진 생성
engine = create_engine(connection_string)

df.to_sql(name='contents', con=engine, if_exists='replace', index=False)