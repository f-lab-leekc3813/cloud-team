import requests
from bs4 import BeautifulSoup
import pandas as pd

from sqlalchemy import create_engine

#대전
wp = requests.get("https://www.daangn.com/region/%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C")
soup = BeautifulSoup(wp.content, "html.parser")
getItemse = soup.select("#content > section.cards-wrap > article")
def func(item):
    item_name = item.select('a > div.card-desc > h2')[0].text.strip()
    price = item.select('a > div.card-desc > div.card-price')[0].text.strip()
    region = item.select('a > div.card-desc > div.card-region-name')[0].text.strip()
    counts = item.select('a > div.card-desc > div.card-counts')[0].text.strip().split()
    like = counts[1]
    chat = counts[-1]
    di = {'item': item_name, 'price': price, 'region': region, 'like': like, 'chat': chat}
    return di
url = "https://www.daangn.com/region/%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
a = soup.find_all(attrs={'class':'card-photo'})


si = []
for i, item in enumerate(getItemse):
    if i >= 48:
        break
    si.append(func(item))

df = pd.DataFrame(si)

img_list = []
for i in a[:48]:
    img_list.append(i.find_all('img')[0]['src'])

df['image'] = img_list

df = df.reset_index()

df

# csv저장
# df.to_csv("daejeon.csv", index = False)
# csv json 변환 사이트 https://products.groupdocs.app/ko/conversion/csv-to-json 

# MySQL 엔진 생성                            ▽id,비번               /저장장소
connection_string = 'mysql+mysqlconnector://root:1023ldde@localhost/project'
engine = create_engine(connection_string)
df.to_sql(name='daejeon', con=engine, if_exists='replace', index=False)