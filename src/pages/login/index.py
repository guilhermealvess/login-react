from flask import Flask, request
app = Flask(__name__)


@app.route('/api/login', methods=['POST'])
def hello_world():
    data = request.get_json(force=True)
    print(data)
    return 'Hello World!'


if __name__ == '__main__':
    app.run(port=5000)
