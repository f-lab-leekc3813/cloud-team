import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

from sqlalchemy import create_engine

import mysql.connector


def add(data):
    with webdriver.Chrome() as driver:
        url = "https://address.dawul.co.kr/"
        driver.get(url=url)

        xpath = '//*[@id="input_juso"]'
        search_address = driver.find_element(By.XPATH, xpath)
        search_address.send_keys(data)
        search_address.send_keys(Keys.ENTER)

        wait = WebDriverWait(driver, 5)
        result_div = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="insert_data_5"]')))

        result_data = result_div.text
        data = result_data.split(',')
        address = data[1].split(':')[1] + ' ' + data[0].split(':')[1]
        
        return address
    
def sql(data):
    # MySQL 연결 설정
    config = {
      'user': 'root',
      'password': 'mysql',
      'host': 'localhost',
      'database': 'project',
      'raise_on_warnings': True
    }

    # MySQL 연결
    connection = mysql.connector.connect(**config)

    # 쿼리 실행
    query = f"SELECT * FROM project.{data}"
    df = pd.read_sql(query, connection)
    
    df = df.reset_index()

    # 연결 닫기
    connection.close()

    return df


def to_sql(data):
    # MySQL 연결 문자열 생성
    connection_string = 'mysql+mysqlconnector://root:1023ldde@localhost/project'

    # MySQL 엔진 생성
    engine = create_engine(connection_string)

    df.to_sql(name=data, con=engine, if_exists='replace', index=False)


df = sql('part_data')

address = df['address']

address_list = []
for data in address:
    if data[-1].isdigit():
        address_list.append(add(data))
    else :
        address_list.append(add(data+' 13'))

df['location'] = address_list

to_sql('part_data')