import requests
from bs4 import BeautifulSoup
import pandas as pd

from sqlalchemy import create_engine


def func(a):
    text = ['+'.join([element.text for element in a[i](text=True)])for i in range(len(a))]
    text_li = [text[i].split('+')[:-1] for i in range(len(text))]
    
    img = soup.find_all(attrs={'class':'w7pzr96'})
    img_li = [i.find_all('img')[1]['src'] for i in img]
    
    return text_li,img_li

url = "https://www.daangn.com/kr/realty/?_fp=37ba405cb5536d9c7a43d92cb223e53a&_fpp=pSf9cqzC1QF7X6viazPf"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
a = soup.find_all(attrs={'class':'w7pzr97 w7pzr99'})

text_li,img_li = func(a)

df = pd.DataFrame(text_li,columns = ('name','region','info'))
df['image'] = img_li
df = df.reset_index()


# MySQL 연결 문자열 생성
connection_string = 'mysql+mysqlconnector://root:1234@localhost/project'

# MySQL 엔진 생성
engine = create_engine(connection_string)

df.to_sql(name='estate_page', con=engine, if_exists='replace', index=False)