from flask import Flask, request
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)
CORS(app)

@app.route('/') # default route
def new():
    result = ""
    return {"success": 200}

@app.route('/result', methods = ['POST']) # /result route, allowed request methods; POST, and GET
def predict():
    if request.method == 'POST': 
        result = request.get_json()['journal']
        blob = TextBlob(result)
        # for sentence in blob.sentences:
        # 	result = sentence.sentiment.polarity # result = polarity value
        # NOTE: need to get textblob working
        # result = 1.0
        for sentence in blob.sentences:
            result = sentence.sentiment.polarity
        return {"sentiment": result}
		
if __name__ == '__main__':
	app.debug = True
	app.run()