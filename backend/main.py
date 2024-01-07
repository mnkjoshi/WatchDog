import firebase_admin
from flask import Flask, request, jsonify
from firebase_admin import auth, credentials, db

from werkzeug.utils import secure_filename
import os

import base64
import json
import re

import extension

app = Flask(__name__)
cred = credentials.Certificate("secret.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://manav-watchdog-default-rtdb.firebaseio.com/'
})


app.config['UPLOAD_FOLDER'] = "./uploads"


@app.route('/')
def home():
    # retrieve the data from firebase
    data = db.reference('our/stuff/here').get()
    return jsonify(data)


@app.route('/login', methods=['post'])
def login():
    username = request.form['username']
    password = request.form['password']

    # check if this info is in the firebase
    try:
        userdata = db.reference('our/stuff/'+username).get()
        if userdata:
            if password == userdata["password"]:
                return 'Login successful'
            return 'Incorrect password'
        else:
            return 'Invalid username'

    except auth.UserNotFoundError:
        return 'Invalid username'


@app.route('/signup', methods=['post'])
def signup():
    username = request.form['username']
    password = request.form['password']

    if not username.isalpha():
        return 'Username can only have alphabets'

    ref = db.reference('our/stuff/'+username)
    if ref.get():
        return 'User already exists'

    ref.set({'password': password})

    return 'Created user successfully'
