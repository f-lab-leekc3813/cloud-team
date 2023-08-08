import pandas as pd
from surprise import Reader, Dataset
from surprise import SVD
from sqlalchemy import create_engine

merge_df = pd.read_csv('./backend/flask/merge_df.csv')

merge_df['Price'].fillna(0,inplace=True)

unique_df = merge_df.drop_duplicates('Title').sort_values('Title').reset_index(drop=True)

indices = pd.Series(unique_df.index, index=unique_df['Title'])

user = merge_df.groupby('profileName').size().sort_values(ascending=False)
top_user = user[user.values>=10]

idx = pd.Series(range(0,len(top_user)), index=top_user.index).drop_duplicates()

user_df = merge_df[merge_df['profileName'].isin(top_user.index)]

unique_user = user_df.drop_duplicates()

rating_df = pd.read_csv('./backend/flask/ratings.csv')

rating_df.columns = ['userId', 'bookId', 'rating']
reader = Reader(rating_scale=(1,5))

svd = SVD(random_state=0)

def data_update():
    # MySQL 연결 문자열 생성
    connection_string = 'mysql+mysqlconnector://root:mysql@localhost/machine'

    # MySQL 엔진 생성
    engine = create_engine(connection_string)

    query = f"SELECT * FROM project.like"
    df = pd.read_sql(query, engine)

    df['bookId'] = df['bookId'].apply(lambda x: indices[x])

    concat_df = pd.concat([rating_df,df])

    data = Dataset.load_from_df(concat_df, reader=reader)

    trainset = data.build_full_trainset()
    svd.fit(trainset)


def func(userId):
    best = {i:svd.predict(userId,i).est for i in indices.values}
    best_number = sorted(best,key=lambda x:best[x],reverse=True)[:10]
    
    return unique_df.loc[best_number]

