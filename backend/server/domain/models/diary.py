from db_connect import db

class Diary(db.Model):
    __tablename__ = "Diary"
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    date = db.Column(db.Date, nullable=False)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    happy = db.Column(db.Float)
    sad = db.Column(db.Float)
    fear = db.Column(db.Float)
    surprised = db.Column(db.Float)
    anger = db.Column(db.Float)
    aversion = db.Column(db.Float)
    neutral = db.Column(db.Float)


    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    
    def __init__(self, date, title, content, user_id):
        self.date = date
        self.title = title
        self.content = content
        self.user_id = user_id