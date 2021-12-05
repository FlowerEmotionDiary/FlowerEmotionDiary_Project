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
    return {
        "title": diary['title'],
        "content": diary["content"],
        "date":diary['date']
    }

def date_request_dto(date):
    date_tmp = datetime.strptime(date, '%Y-%m-%d')
    new_date = date_tmp.strftime("%Y-%m-%d")
    return new_date