from flask import Blueprint, jsonify
from flask_cors import CORS
from machine_review import func, data_update

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




if __name__ == '__main__':
    app2.run(debug=True)