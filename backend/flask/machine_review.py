import pandas as pd
from surprise import Reader, Dataset
from surprise import SVD
from sqlalchemy import create_engine
from password import password

merge_df = pd.read_csv('./backend/flask/merge_df.csv')

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

data = Dataset.load_from_df(rating_df, reader=reader)

trainset = data.build_full_trainset()
svd.fit(trainset)

def data_update():
    global trainset
    # MySQL 연결 문자열 생성
    connection_string = f'mysql+mysqlconnector://root:{password}@localhost/project'

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
    if userId.isdigit():
        userId = int(userId)

    best = {i:svd.predict(userId,i).est for i in indices.values}
    best_number = sorted(best,key=lambda x:best[x],reverse=True)[:10]
    
    return unique_df.loc[best_number]

from surprise import accuracy

def testModel(userId):
    if userId.isdigit():
        userId = int(userId)
        test_df = rating_df[rating_df['userId']==userId]
    else :
        # MySQL 연결 문자열 생성
        connection_string = f'mysql+mysqlconnector://root:{password}@localhost/project'

        # MySQL 엔진 생성
        engine = create_engine(connection_string)

        query = f"SELECT * FROM project.like"
        df = pd.read_sql(query, engine)

        df['bookId'] = df['bookId'].apply(lambda x: indices[x])
        test_df = df[df['userId']==userId]

    testdata = Dataset.load_from_df(test_df, reader=reader)
    testset = testdata.build_full_trainset().build_testset()

    predictions = svd.test(testset)
    scores = [1-abs(prediction.est-prediction.r_ui)/4 for prediction in predictions]
        
    # RMSE 계산
    rmse = accuracy.rmse(predictions)

    # MAE 계산
    mae = accuracy.mae(predictions)

    sc = sum(scores)/len(scores)
    return sc, mae, rmse


# sco = []
# for i in range(1,1000):
#     sc,mae,rmse = testModel(str(i))
#     sco.append(sc)
# print(max(sco),sco.index(max(sco)))
# print(min(sco),sco.index(min(sco)))
# print(sum(sco)/len(sco))