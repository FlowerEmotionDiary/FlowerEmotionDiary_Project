from db_connect import db

class Flower(db.Model):
    __tablename__ = "Flower"
    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    count = db.Column(db.Integer)
    emotion = db.Column(db.String(10))
    date = db.Column(db.Date, nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    
    # def __init__(self, date, title, content, user_id):
    #     self.date = date
    #     self.title = title
    #     self.content = content
    #     self.user_id = user_id