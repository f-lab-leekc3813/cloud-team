from flask import Blueprint, jsonify
from flask_cors import CORS

app2 = Blueprint('app2', __name__)
CORS(app2)

import pandas as pd
from sqlalchemy import create_engine


@app2.route('/search')
def hello():
    return 'Hello, World!'

@app2.route('/search/<search>', methods=['GET'])
def show_category(search):
    # MySQL 연결 문자열 생성
    connection_string = 'mysql+mysqlconnector://root:mysql@localhost/project'

    # MySQL 엔진 생성
    engine = create_engine(connection_string)

    query = f"SELECT * FROM machine.contents"
    df = pd.read_sql(query, engine)
    df_json = df.to_dict(orient='records')
    return jsonify(df_json)

if __name__ == '__main__':
    app2.run(debug=True)