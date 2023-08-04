# main.py
from flask import Flask
from test import app1
from search import app2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# 여러 개의 앱을 플라스크 앱으로 등록
app.register_blueprint(app1)
app.register_blueprint(app2)

if __name__ == "__main__":
    app.run()
