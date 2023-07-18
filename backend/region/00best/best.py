# !pip install requests
# !pip install beautifulsoup4
import requests
from bs4 import BeautifulSoup
import pandas as pd

# best
wp = requests.get("https://www.daangn.com/hot_articles")
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

si = []
for item in getItemse:
    si.append(func(item))

df = pd.DataFrame(si)
df

#이미지 저장법
from PIL import Image
from io import BytesIO
import os
if not os.path.exists('images/best'): #이미지폴더
    os.makedirs('images/best') #이미지폴더
img_list = []
for i in soup.find_all('img')[1:]:
    img_list.append(i['src'])
def image(n):
    url = img_list[n]
    response = requests.get(url)
    image = Image.open(BytesIO(response.content))
    folder_path = 'images/best'  #이미지폴더
    os.makedirs(folder_path, exist_ok=True)
    image_name = 'image_' + str(n) + '.jpg'
    image_path = os.path.join(folder_path, image_name)  
    image.save(image_path)

for i in range(len(img_list)):
    image(i)
df['image'] = ['images/best/bestimg' + str(i) + '.jpg' for i in range(len(df))]

df

df.to_csv("best.csv", index = False)

#csv json 변환 사이트 https://products.groupdocs.app/ko/conversion/csv-to-json

df