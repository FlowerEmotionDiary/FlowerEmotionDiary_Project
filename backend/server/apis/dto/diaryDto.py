from datetime import datetime
from flask.json import jsonify

def diary_post_request_dto(diary):
    date_tmp = datetime.strptime(diary['date'], '%Y-%m-%d')
    date = date_tmp.strftime("%Y-%m-%d")
    return {
        "title": diary['title'],
        "content": diary["content"],
        "date":date
    }


def user_response_dto(user):
    if user == "email is aready done":
        return jsonify(user), 400
    return jsonify({"email":user.email,
                    "name":user.name}
                ), 200

def login_response_dto(result):
    if result == "login fail":
        return jsonify(result), 400
    return jsonify({"access_token":result[0],
                    "refresh_token":result[1]}
                ), 200

def diary_respose_dto(result):
    if result is None:
        return 'fai;ed', 400
    return jsonify({
        "title":result.title,
        "content":result.content
        })