from flask import Blueprint, jsonify
from flask_cors import CORS

app1 = Blueprint('app1', __name__)
CORS(app1)

@app1.route('/')
def hello():
    return 'Hello, World!'



import pandas as pd
from sqlalchemy import create_engine
import json

@app1.route('/user/<username>')
def show_user(username):
    return f'Hello, {username}!'


@app1.route('/category/<category>', methods=['GET'])
def show_category(category):
    # MySQL 연결 문자열 생성
    connection_string = 'mysql+mysqlconnector://root:1023ldde@localhost/project'

    # MySQL 엔진 생성
    engine = create_engine(connection_string)

    query = f"SELECT * FROM machine.books where categories = '{category}' limit 30"
    df = pd.read_sql(query, engine)
    df_json = df.to_dict(orient='records')
    return jsonify(df_json)

if __name__ == '__main__':
    app1.run(debug=True)