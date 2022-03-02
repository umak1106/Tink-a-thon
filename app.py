import os
import joblib
classifier = joblib.load('smartirrigation.pkl')

# importing Flask and other modules
from flask import Flask, request, render_template 
import numpy as np
  
# Flask constructor
app = Flask(__name__)   
@app.route('/')
@app.route('/index.html')
def home():
    return render_template('index.html')
# A decorator used to tell the application
# which URL is associated function
@app.route('/i.html', methods = ["GET", "POST"])
def go():
    if request.method == "POST":
       m_c = request.form.get("m_c")
       temp = request.form.get("temp")
       p = classifier.predict(np.array([m_c, temp]).reshape(-2,2))
       if p == 0:
           output = "No need for the pump to be on."
           return render_template('i.html', output=output)
       elif p == 1:
           output = "Switch on your pump immediately."
           return render_template('i.html', output=output)
        
    return render_template('i.html')

@app.route('/blog.html')
def blog():
    return render_template('blog.html')

  
if __name__=='__main__':

   app.run(debug=True)
