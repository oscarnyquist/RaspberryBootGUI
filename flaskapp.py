import os
from flask import Flask
from flask import render_template
app = Flask(__name__)

plex_running = 0
retropie_running = 0

@app.route("/")
def start():
    return render_template('web.html')

@app.route('/run_plex')
def Plex():
    os.system("dir")
    return render_template('Plex.html')

@app.route('/run_retropie')
def Retropie():
    os.system("dir")
    return render_template('Retropie.html')
