from domain.models.diary import Diary, db

def new_diary(date, title, content, user_id):
    diary = Diary(
        date=date, 
        title=title, 
        content=content, 
        user_id=user_id)
    db.session.add(diary)
    db.session.commit()

    return diary


def check_diary_date(user_id, date):
    result = Diary.query.filter_by(user_id=user_id, date=date).first()
    return result


def all_diaries(user_id):
    result = Diary.query.filter_by(user_id=user_id).all()
    return result