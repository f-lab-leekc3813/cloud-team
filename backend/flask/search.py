from flask import Blueprint, jsonify
from flask_cors import CORS
from machine_learning import get_recommendations

app2 = Blueprint('app2', __name__)
CORS(app2)


@app2.route('/search')
def hello():
    return 'Hello, World!'

@app2.route('/search/<search>', methods=['GET'])
def show_category(search):
    df = get_recommendations(search)
    df_json = df.to_dict(orient='records')
    return jsonify(df_json)




if __name__ == '__main__':
    app2.run(debug=True)