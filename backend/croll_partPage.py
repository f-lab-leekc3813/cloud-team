import requests
from bs4 import BeautifulSoup
import pandas as pd

from sqlalchemy import create_engine


def func(a):
    title = a.find(attrs={'class':'w7pzr93'}).text.strip()
    region = a.find(attrs={'class':'w7pzr94'}).text.strip()
    pay = a.find(attrs={'class':'w7pzr95'}).text.strip()
    
    di = {'title':title,'region':region,'pay':pay}
    return di


url = "https://www.daangn.com/kr/jobs/?_fp=37ba405cb5536d9c7a43d92cb223e53a&_fpp=pSf9cqzC1QF7X6viazPf"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
a = soup.find_all(attrs={'class':'ro1t0q1'})


li = []
for i in range(len(a)):
    li.append(func(a[i]))

df = pd.DataFrame(li)


img_list = []
for i in a:
    img_list.append(i.find_all('img')[1]['src'])

df['image'] = img_list

df = df.reset_index()

# MySQL 연결 문자열 생성
connection_string = 'mysql+mysqlconnector://root:1023ldde@localhost/project'

# MySQL 엔진 생성
engine = create_engine(connection_string)

df.to_sql(name='part_page', con=engine, if_exists='replace', index=False)