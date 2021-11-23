from datetime import datetime

def login_request_dto(user):
    return {
        "email": user['email'],
        "password": user['password']
    }

def user_request_dto(user):
    return {
        "email": user['email'],
        "password": user['password'],
        "name": user["name"]
    }

def diary_request_dto(diary):
    date_tmp = datetime.strptime(diary['date'], '%Y-%m-%d')
    date = date_tmp.strftime("%Y-%m-%d")
    return {
        "title": diary['title'],
        "content": diary["content"],
        "date":date
    }

def date_request_dto(date):
    date_tmp = datetime.strptime(date, '%Y-%m-%d')
    new_date = date_tmp.strftime("%Y-%m-%d")
    return new_date