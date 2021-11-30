from domain.dao.userDao import one_user
from bcrypt import hashpw, checkpw, gensalt
from flask.json import jsonify
from flask_jwt_extended import (
    create_access_token, create_refresh_token, get_jwt_identity, set_access_cookies, set_refresh_cookies
)

def login_user(user):
    email = user['email']
    password = user['password']
    user = one_user(email)

    if not user:
        return 'login fail'
    elif not checkpw(password.encode("utf-8"), user.password.encode("utf-8")):
        return 'login fail'
    else:
        # 토큰 생성
        access_token = create_access_token(identity=user.id, fresh=True)
        refresh_token = create_refresh_token(identity=user.id)

        response = jsonify({'login': True})
        set_refresh_cookies(response, refresh_token)

        result = {"access_token":access_token}
        return result


# 토큰 재발급
def token_reissuance():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user, fresh=False)
    return access_token

# 토큰으로 유저 정보 체크
def check_user():
    identity = get_jwt_identity()
    user = one_user(identity)

    return user