import requests
from bs4 import BeautifulSoup
import pandas as pd

from sqlalchemy import create_engine


def find_region(data):
    region_dict = {
        'best': "https://www.daangn.com/hot_articles",
        'seoul': "https://www.daangn.com/region/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C",
        'busan': "https://www.daangn.com/region/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C",
        'daegu': "https://www.daangn.com/region/%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C",
        'incheon': "https://www.daangn.com/region/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C",
        'gwangju': "https://www.daangn.com/region/%EA%B4%91%EC%A3%BC%EA%B4%91%EC%97%AD%EC%8B%9C",
        'daejeon': "https://www.daangn.com/region/%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C",
        'ulsan': "https://www.daangn.com/region/%EC%9A%B8%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C",
        'sejong': "https://www.daangn.com/region/%EC%84%B8%EC%A2%85%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EC%8B%9C",
        'gyeonggi': "https://www.daangn.com/region/%EA%B2%BD%EA%B8%B0%EB%8F%84",
        'gangwon': "https://www.daangn.com/region/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84",
        'chungbuk': "https://www.daangn.com/region/%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84",
        'chungnam': "https://www.daangn.com/region/%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84",
        'jeonbuk': "https://www.daangn.com/region/%EC%A0%84%EB%9D%BC%EB%B6%81%EB%8F%84",
        'jeonnam': "https://www.daangn.com/region/%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84",
        'gyeongbuk': "https://www.daangn.com/region/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84",
        'gyeongnam': "https://www.daangn.com/region/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84",
        'jeju': "https://www.daangn.com/region/%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84"}

    return region_dict[data]

def func_data(text,img,user_img,region):
    if text[0]=='숨겨져 있는 게시글은 볼 수 없습니당 :(':
        return {'title':'숨겨져 있는 게시글은 볼 수 없습니당 :('}
    title = text[0]
    user_name = text[3]
    user_region = text[4]
    temp = text[6]
    category = text[9]
    d_day = text[10]
    price = text[11]
    info = ' '.join(text[12:-4])
    like = int(text[-4].split()[1])
    chat = int(text[-3].split()[1])
    view = int(text[-1].split()[1])
    
    di = {'title':title,'user_name':user_name,'user_region':user_region,'temp':temp,'category':category,
          'd_day':d_day, 'price':price, 'info':info,'like':like,'chat':chat,'view':view,'region':region,
          'img':img,'user_img':user_img}
    return di

def croll_data(n):
    link = 'https://www.daangn.com'+element[n]['href']
    r = requests.get(link)
    soup = BeautifulSoup(r.text, 'html.parser')
    a = soup.find('article')

    li = [i.strip() for i in a.text.split('\n')]
    text = [i for i in li if i != '']

    try:
        img = element[n].find('img')['src']
    except:
        img = ''
        
    try:
        user_img = a.find_all('img')[-1]['src']
    except:
        user_img = data
        
    region = element[n].find(attrs={'class':'card-region-name'}).text.strip()
    
        
    return text,img, user_img, region

def croll_region(data):
    global element, idx
    r = requests.get(find_region(data))
    soup = BeautifulSoup(r.text, 'html.parser')
    element = soup.find_all(attrs={'class':'card-link'})
    
    li = []
    for n in range(len(element)):
        text,img,user_img,region = croll_data(n)
        li.append(func_data(text,img,user_img,region))
        
    df = pd.DataFrame(li, index=range(idx, idx+len(li)))
    idx += len(li)
    
    connection_string = 'mysql+mysqlconnector://root:mysql@localhost/crolling'

    # MySQL 엔진 생성
    engine = create_engine(connection_string)
    
    df.to_sql(name='product', con=engine, if_exists='append', index=True)
    
    
def drop_sql(name):
    connection_string = 'mysql+mysqlconnector://root:mysql@localhost/crolling'
    engine = create_engine(connection_string)
    try:
        with engine.connect() as conn:
            conn.execute(f'DROP TABLE {name};')
    except Exception as e:
        print(f'error: {e}')
        

drop_sql('product')

idx = 0

data = 'data:image/png;base64,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'

data_list = ['seoul', 'busan', 'daegu', 'incheon', 'gwangju', 'daejeon', 'ulsan', 'sejong', 'gyeonggi', 'gangwon',
             'chungbuk', 'chungnam', 'jeonbuk', 'jeonnam', 'gyeongbuk', 'gyeongnam', 'jeju']

for data in data_list:
    croll_region(data)
    print(data)