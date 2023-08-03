import pandas as pd
from surprise import Reader, Dataset
from surprise import SVD
from surprise.model_selection import cross_validate
from sqlalchemy import create_engine

merge_df = pd.read_csv('./backend/python/merge_df.csv')

unique_df = merge_df.drop_duplicates('Title').sort_values('Title').reset_index(drop=True)

indices = pd.Series(unique_df.index, index=unique_df['Title'])

user = merge_df.groupby('profileName').size().sort_values(ascending=False)
top_user = user[user.values>=10]

idx = pd.Series(range(0,len(top_user)), index=top_user.index).drop_duplicates()

user_df = merge_df[merge_df['profileName'].isin(top_user.index)]

unique_user = user_df.drop_duplicates()

rating_df = unique_user[['profileName', 'Title', 'review/score']].sort_values('profileName').reset_index(drop=True)

rating_df['profileName'] = rating_df['profileName'].apply(lambda x:idx[x])
rating_df['Title'] = rating_df['Title'].apply(lambda x:indices[x])

rating_df.columns = ['userId', 'bookId', 'rating']
reader = Reader(rating_scale=(1,5))

data = Dataset.load_from_df(rating_df, reader=reader)

svd = SVD(random_state=0)

trainset = data.build_full_trainset()
svd.fit(trainset)

def func(userId):
    best = {i:svd.predict(userId,i).est for i in indices.values}
    best_number = sorted(best,key=lambda x:best[x],reverse=True)[:10]
    
    return unique_df.loc[best_number]

df = func(147)

# MySQL 연결 문자열 생성
connection_string = 'mysql+mysqlconnector://root:1023ldde@localhost/machine'

# MySQL 엔진 생성
engine = create_engine(connection_string)

df.to_sql(name='review', con=engine, if_exists='replace', index=False)

