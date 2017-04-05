from flask import Flask, render_template
from flask_cors import CORS
import simplejson as json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def root():
    return render_template('index.html', ip='127.0.0.1')

@app.route('/data', methods=['GET'])
def data():
    with open("data.json") as f:
        data = json.load(f)
    return json.dumps(data)

@app.route('/css/<filename>', methods=['GET'])
def css(filename):
    return app.send_static_file('css/' + filename)

@app.route('/js/<filename>', methods=['GET'])
def js(filename):
    return app.send_static_file('js/' + filename)

@app.route("/generate", methods=['POST'])
def generate():
    variables = ['teachers', 'courses']
    
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080)
