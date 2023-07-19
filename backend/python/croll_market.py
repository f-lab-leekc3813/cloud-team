import requests
from bs4 import BeautifulSoup
import pandas as pd


# !pip install sqlalchemy
from sqlalchemy import create_engine

from PIL import Image
from io import BytesIO
import os

def func(a):
    name = a.find(attrs={'class':'smb-list-item-name _1o1a6ke5'}).text
    region = a.find(attrs={'class':'smb-list-item-region _1o1a6ke6'}).text
    description = a.find(attrs={'class':'smb-list-item-description _1o1a6ke7'}).text.replace('\n',' ')
    infos = a.find(attrs={'class':'smb-list-item-infos _1o1a6ke8'}).text.replace('∙',',')
    di = {'name':name,'region':region,'description':description,'infos':infos}
    return di

url = 'https://www.daangn.com/kr/nearby-stores/'
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
a = soup.find_all('a',attrs={'class':'smb-list-item _1o1a6ke0 korcsc4'})

li = []
for i in range(len(a)):
    li.append(func(a[i]))

df = pd.DataFrame(li)

if not os.path.exists('images/market'):
    os.makedirs('images/market')

img_list = []

for img in a:
    img_list.append(img.find('img')['src'])

def image(n):
    # 이미지 URL 설정
    url = img_list[n]

    # 이미지 요청
    response = requests.get(url)

    # 이미지 데이터 열기
    image = Image.open(BytesIO(response.content))

    # 저장할 폴더 경로 설정
    folder_path = 'images/market/'  # 하위 폴더를 포함한 전체 경로를 설정합니다.

    # 폴더 생성
    os.makedirs(folder_path, exist_ok=True)

    image_name = 'market_' + str(n) + '.jpeg'

    # 이미지 저장
    image_path = os.path.join(folder_path, image_name)  # 저장할 이미지 파일의 경로를 설정합니다.
    image.save(image_path)

for i in range(len(img_list)):
    image(i)

df['image'] = ['images/market/market_'+str(i)+'.jpeg' for i in range(len(img_list))]

df = df.reset_index()


### mysql

from sqlalchemy import create_engine

# MySQL 연결 문자열 생성
connection_string = 'mysql+mysqlconnector://root:1234@localhost/crolling'

# MySQL 엔진 생성
engine = create_engine(connection_string)

df.to_sql(name='market', con=engine, if_exists='replace', index=False)
