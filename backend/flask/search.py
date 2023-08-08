from flask import Blueprint, jsonify
from flask_cors import CORS
from machine_learning import get_recommendations

app1 = Blueprint('app1', __name__)
CORS(app1)

@app1.route('/')
def hello():
    return 'Hello, World!'

@app1.route('/search')
def search():
    return 'Search!'

@app1.route('/search/<search>', methods=['GET'])
def show_category(search):
    df = get_recommendations(search)
    df_json = df.to_dict(orient='records')
    return jsonify(df_json)




if __name__ == '__main__':
    app1.run(debug=True)