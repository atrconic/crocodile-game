import random
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("random.html")


@app.route("/c")
def homec():
    return render_template("scaryPicture.html")


@app.route("/random")
def generate_random():
    return str(random.randint(0, 13))

