import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

from sqlalchemy import create_engine


def add(region):
    with webdriver.Chrome() as driver:
        url = "https://address.dawul.co.kr/"
        driver.get(url=url)

        xpath = '//*[@id="input_juso"]'
        search_address = driver.find_element(By.XPATH, xpath)
        search_address.send_keys(region)
        search_address.send_keys(Keys.ENTER)

        wait = WebDriverWait(driver, 5)
        result_div = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="insert_data_5"]')))

        result_data = result_div.text
        data = result_data.split(',')
        address = data[1].split(':')[1] + ',' + data[0].split(':')[1]
        
        return address


def sql(name):
    # MySQL 연결 문자열 생성
    connection_string = 'mysql+mysqlconnector://root:1023ldde@localhost/project'

    # MySQL 엔진 생성
    engine = create_engine(connection_string)

        
    query = f"SELECT * FROM project.{name}"
    df = pd.read_sql(query, engine)
    address = df['address']

    address_list = []
    for data in address:
        if data[-1].isdigit():
            address_list.append(add(data))
        else :
            address_list.append(add(data+' 13'))

    df['location'] = address_list

    df.to_sql(name=name, con=engine, if_exists='replace', index=False)

sql("part_data")