import requests
from bs4 import BeautifulSoup
import pandas as pd

# !pip install pymongo
from pymongo import MongoClient

# !pip install sqlalchemy
from sqlalchemy import create_engine

from PIL import Image
from io import BytesIO
import os

# 크롤링
def func(a):
    title = a.find('h2').text.strip()
    price = a.find(attrs={'class':'card-price'}).text.strip()
    place = a.find(attrs={'class':'card-region-name'}).text.strip()
    counts = a.find(attrs={'class':'card-counts'}).text.strip().split('\n')
    like,chat = counts[0].split()[1],counts[-1].strip().split()[1]
    di = {'title':title,'price':price,'place':place,'like':like,'chat':chat}
    return di


url = "https://www.daangn.com/hot_articles"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
a = soup.find_all('article')


li = []
for i in range(len(a)):
    li.append(func(a[i]))

df = pd.DataFrame(li)


# 이미지
# 이미지를 저장할 폴더 생성
if not os.path.exists('images/pop'):
    os.makedirs('images/pop')

img_list = []

for i in soup.find_all('img')[1:]:
    img_list.append(i['src'])

def image(n):
    # 이미지 URL 설정
    url = img_list[n]

    # 이미지 요청
    response = requests.get(url)

    # 이미지 데이터 열기
    image = Image.open(BytesIO(response.content))

    # 저장할 폴더 경로 설정
    folder_path = 'images/pop/'  

    # 폴더 생성
    os.makedirs(folder_path, exist_ok=True)

    image_name = 'images/pop/pop_' + str(n) + '.jpeg'

    # 이미지 저장
    image_path = os.path.join(folder_path, image_name)  # 저장할 이미지 파일의 경로를 설정합니다.
    image.save(image_path)

for i in range(len(img_list)):
    image(i)

df['image'] = ['images/pop/pop_'+str(i)+'.jpeg' for i in range(len(img_list))]

# 몽고디비
client = MongoClient()

db = client['crolling']

collection = db['pop']
collection.insert_many(df.to_dict('records'))

# mysql
# MySQL 연결 문자열 생성
connection_string = 'mysql+mysqlconnector://root:mysql@localhost/crolling'

# MySQL 엔진 생성
engine = create_engine(connection_string)

df.to_sql(name='pop', con=engine, if_exists='replace', index=False)

# csv로 저장
# df.to_csv('pop.csv',index=False,encoding='UTF-8')
