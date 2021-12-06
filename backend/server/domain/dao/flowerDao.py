from domain.models.flower import Flower, db
from datetime import datetime, date
def new_flower(user_id, count, emotion):
    cur_date = date(datetime.today().year, datetime.today().month, 1)

    flower = Flower(
        user_id=user_id,
        count=count,
        emotion=emotion,
        date=cur_date
    )
    db.session.add(flower)
    db.session.commit()
    return flower

def update_flower(user_id, count, emotion):
    flower = check_flower(user_id)
    flower.count = count
    flower.emotion = emotion
    db.session.commit()
    return flower

def check_flower(user_id):
    flowers = Flower.query.filter_by(user_id=user_id).all()
    result = None
    for flower in flowers:
        if flower.date.year == datetime.today().year and flower.date.month == datetime.today().month:
            result = flower
    if result:
        return result
    else:
        return False
 
def statics_year(user_id, year):
    flowers = Flower.query.filter_by(user_id=user_id).all()
    result = []
    for flower in flowers:
        if flower.date.year == year:
            result.append(flower)

    return result