from flask import Blueprint, jsonify
from flask_cors import CORS
from machine_review import func, data_update, testModel

app2 = Blueprint('app2', __name__)
CORS(app2)


@app2.route('/machine')
def data():
    data_update()
    return 'dataUpdate'

@app2.route('/machine/<userId>', methods=['GET'])
def machine(userId):
    df = func(userId)
    df_json = df.to_dict(orient='records')
    return jsonify(df_json)

@app2.route('/machine/test/<userId>', methods=['GET'])
def test(userId):
    test = testModel(userId)
    if test == None:
        return f'{userId} 에 대한 정보가 없습니다.'
    return f'userId: {userId}<br>score: {test[0]}<br>mae: {test[1]}<br>rmse: {test[2]}'

if __name__ == '__main__':
    app2.run(debug=True)