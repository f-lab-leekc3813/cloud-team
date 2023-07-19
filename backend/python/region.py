import requests
from bs4 import BeautifulSoup
import pandas as pd

from sqlalchemy import create_engine

def func(item):
    item_name = item.select('a > div.card-desc > h2')[0].text.strip()
    price = item.select('a > div.card-desc > div.card-price')[0].text.strip()
    region = item.select('a > div.card-desc > div.card-region-name')[0].text.strip()
    counts = item.select('a > div.card-desc > div.card-counts')[0].text.strip().split()
    like = counts[1]
    chat = counts[-1]
    di = {'item': item_name, 'price': price, 'region': region, 'like': like, 'chat': chat}
    return di

def region(data):
    region_dict = {'best' : "https://www.daangn.com/hot_articles",
                    'seoul' : "https://www.daangn.com/region/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C",
                    'busan' : "https://www.daangn.com/region/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C",
                    'daegu' : "https://www.daangn.com/region/%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C",
                    'incheon' : "https://www.daangn.com/region/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C",
                    'gwangju' : "https://www.daangn.com/region/%EA%B4%91%EC%A3%BC%EA%B4%91%EC%97%AD%EC%8B%9C",
                    'daejeon' : "https://www.daangn.com/region/%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C",
                    'ulsan' : "https://www.daangn.com/region/%EC%9A%B8%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C",
                    'sejong' : "https://www.daangn.com/region/%EC%84%B8%EC%A2%85%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EC%8B%9C",
                    'gyeonggi' : "https://www.daangn.com/region/%EA%B2%BD%EA%B8%B0%EB%8F%84",
                    'gangwon' : "https://www.daangn.com/region/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84",
                    'chungbuk' : "https://www.daangn.com/region/%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84",
                    'chungnam' : "https://www.daangn.com/region/%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84",
                    'jeonbuk' : "https://www.daangn.com/region/%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84",
                    'jeonnam' : "https://www.daangn.com/region/%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84",
                    'gyeongbuk' : "https://www.daangn.com/region/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84",
                    'gyeongnam' : "https://www.daangn.com/region/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84",
                    'jeju' : "https://www.daangn.com/region/%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84"}
    
    return region_dict[data]


def croll(data):
    wp = requests.get(region(data))
    soup = BeautifulSoup(wp.content, "html.parser")
    getItemse = soup.select("#content > section.cards-wrap > article")

    si = []
    for item in getItemse:
        si.append(func(item))

    df = pd.DataFrame(si)


    img_list = []
    for i in soup.find_all('img')[1:]:
        img_list.append(i['src'])

    df['image'] = img_list
    df = df.reset_index()
    
    # MySQL 연결 문자열 생성
    connection_string = 'mysql+mysqlconnector://root:mysql@localhost/crolling'

    # MySQL 엔진 생성
    engine = create_engine(connection_string)

    df.to_sql(name='cr_'+data, con=engine, if_exists='replace', index=False)


data_list = ['best','seoul','busan','daegu','incheon','gwangju','daejeon','ulsan','sejong','gyeonggi','gangwon',
             'chungbuk','chungnam', 'jeonbuk','jeonnam','gyeongbuk','gyeongnam','jeju']

for data in data_list:
    croll(data)
