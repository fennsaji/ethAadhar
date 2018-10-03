# from flask import Flask
# app = Flask(__name__)

# @app.route('/')
# def hello():
#     return 'Hello world'

# if __name__ == '__main__':
#     app.run()

# pip install -r requirements.txt

from flask import Flask, request, jsonify
from PIL import Image
import os
import base64
import numpy
from io import BytesIO

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# endpoint to create new user
@app.route("/fetchFaceId", methods=["POST"])
def fetchfaceId():
    facePicB64 = request.json['facePic']
    facePicB64 = facePicB64.split(',')[1]
    facePicDec = base64.b64decode(facePicB64)
    img = Image.open(BytesIO(facePicDec)).convert('LA')
    # image is (28, 28)
    # img = img.resize(dimensions, Image.ANTIALIAS)
    # pixels.shape == (28, 28, 2)
    pixels = numpy.asarray(img, dtype='uint8')
    # pixel data is lost
    img = Image.fromarray(pixels)
    img.show()

    return

# endpoint to get user detail by id
@app.route("/user/<id>", methods=["GET"])
def user_detail(id):
    return 

# endpoint to update user
@app.route("/user/<id>", methods=["PUT"])
def user_update(id):
    return 

# endpoint to delete user
@app.route("/user/<id>", methods=["DELETE"])
def user_delete(id):
    return 

if __name__ == '__main__':
    app.run(debug=True)