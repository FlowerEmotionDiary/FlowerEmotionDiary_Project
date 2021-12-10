from domain.models.user import User
from db_connect import session

def one_user(identity):
    if str(type(identity)) == "<class 'str'>":
        result = User.query.filter_by(email=identity).first()
    if str(type(identity)) == "<class 'int'>":
        result = User.query.filter_by(id=identity).first()

    return result

def new_user(email, password, name):
    user = User(email, password, name)
    session.add(user)
    session.commit()
    session.close()
    return user