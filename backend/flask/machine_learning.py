import pandas as pd
from sqlalchemy import create_engine
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from password import password


merge_df = pd.read_csv('./backend/flask/csv/merge_df.csv')
merge_df.fillna('',inplace=True)

# 도움되는 리뷰
def review_help(x):
    help_li = x['reviewHelpfulness'].split('/')
    if help_li[1]=='0':
        return 0
    return int(help_li[0])**1.3/int(help_li[1])

merge_df['reviewHelpfulness'] = merge_df.apply(review_help,axis=1)
sort_df = merge_df.sort_values(['Title','reviewHelpfulness'],ascending=[True,False]).head()

# merge_df를 Title 열로 그룹화하고 review/score 열의 평균을 계산하며 나머지 열들의 모든 행을 출력
grouped_df = merge_df.groupby('Title').agg({'reviewScore': 'mean','reviewSummary':'first','reviewText': 'first', 'image':'first',
                                            'authors': 'first', 'profileName':'first', 'categories': 'first', 'Title':'size'})

grouped_df.columns = ['reviewScore', 'reviewSummary', 'reviewText', 'image', 'authors', 'profileName', 'categories', 'count']

grouped_df.reset_index(inplace=True)

# 통계적 추천
C = grouped_df['reviewScore'].mean()
m = grouped_df['count'].quantile(0.9)

def weighted_rating(x, m=m, C=C):
    v = x['count']
    R = x['reviewScore']
    return (v / (v + m) * R) + (m / (m + v) * C)

grouped_df['score'] = grouped_df.apply(weighted_rating, axis=1)


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
    
    return grouped_df.iloc[books_indices]


# MySQL 연결 문자열 생성
connection_string = f'mysql+mysqlconnector://root:{password}@localhost/project'

# MySQL 엔진 생성
engine = create_engine(connection_string)

grouped_df.to_sql(name='books', con=engine, if_exists='replace', index=False)