from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import psycopg2



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:admin@localhost/shoppingusers'
db = SQLAlchemy(app)


class User(db.Model):
       id = db.Column(db.Integer, primary_key=True)
       username = db.Column(db.String(80), unique=True, nullable=False)
       email = db.Column(db.String(120), unique=True, nullable=False)
       password = db.Column(db.String(120), nullable=False)


@app.route('/register')
def register():
    # users = User.query.all()
    return render_template('registerPage.html'
                        #  users=users
                         )


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
