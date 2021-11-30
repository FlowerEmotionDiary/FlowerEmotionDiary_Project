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
    return jsonify(result), 200

def diary_respose_dto(result):
    if result is None:
        return 'failed', 400
    return jsonify({
        "title":result.title,
        "content":result.content
        }), 200

def diaries_response_dto(result):
    if result:
        return jsonify(result), 200
    else:
        return 'failed', 400