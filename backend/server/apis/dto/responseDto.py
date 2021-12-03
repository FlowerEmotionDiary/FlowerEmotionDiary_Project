from flask.json import jsonify

def user_response_dto(user):
    if user == "email is aready done":
        return jsonify(user), 400
    return jsonify({"email":user.email,
                    "name":user.name}
                ), 200

def login_response_dto(result):
    if result == "login fail":
        return jsonify(result), 400
    return jsonify({"access_token":result}), 200

def diary_response_dto(result):
    if result == "":
        return 'failed', 400
    return jsonify({
        "title":result.title,
        "content":result.content,
        "date": result.date
        }), 200

def diaries_response_dto(result):
    if result:
        return jsonify(result), 200
    else:
        return 'failed', 400
