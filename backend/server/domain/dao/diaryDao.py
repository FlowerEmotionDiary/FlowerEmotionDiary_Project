from domain.models.diary import Diary, db
from datetime import datetime

# 새로운 일기 생성
def new_diary(date, title, content, user_id, emotion):
    diary = Diary(
        date=date, 
        title=title, 
        content=content, 
        user_id=user_id,
        happy = emotion['행복'],
        sad = emotion['슬픔'],
        fear = emotion['공포'],
        surprised = emotion['놀람'],
        anger = emotion['분노'],
        aversion = emotion['혐오'],
        neutral =emotion['중립'])

    db.session.add(diary)
    db.session.commit()
    return diary

# 해당 날짜에 유저가 작성한 일기 
def check_diary_date(user_id, date):
    result = Diary.query.filter_by(user_id=user_id, date=date).first()
    return result

# 해당 날짜에 유저가 작성한 일기 삭제
def delete_diary_date(user_id, date):
    result = Diary.query.filter_by(user_id=user_id, date=date).first()
    if result:
        db.session.delete(result)
        db.session.commit()
        return True
    else:
        return False

def update_diary(user_id, diary, emotion):
    result = Diary.query.filter_by(user_id=user_id, date=diary['date']).first()
    if result:
        result.content = diary['content']
        result.happy = emotion['행복'],
        result.sad = emotion['슬픔'],
        result.fear = emotion['공포'],
        result.surprised = emotion['놀람'],
        result.anger = emotion['분노'],
        result.aversion = emotion['혐오'],
        result.neutral =emotion['중립']
        db.session.commit()
        return True
    else:
        return False

def diaries_month(user_id):
    today = datetime.today()
    diaries = Diary.query.filter_by(user_id=user_id).all()
    result = []
    for diary in diaries:
        if diary.date.month == today.month and diary.date.year == today.year:
            result.append(diary)
    return result

def all_diaries(user_id):
    result = Diary.query.filter_by(user_id=user_id).all()
    return result