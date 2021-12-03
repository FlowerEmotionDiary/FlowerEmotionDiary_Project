from flask import Blueprint, request, jsonify
from apis.dto.requestDto import diary_request_dto, date_request_dto
from apis.dto.responseDto import diary_response_dto, diaries_response_dto
from service.diaryService import diary_post_service, diary_read_service, diary_list_service
from flask_jwt_extended import  jwt_required, get_jwt_identity
from service.loginService import check_user
diary_bp = Blueprint('diary', __name__, url_prefix='/api')

# 일기 작성
@diary_bp.route("/diary", methods=['POST'])
@jwt_required()
def diary_post():
    # 로그인 기능 추가하면 이 부분은 token받아와서 처리하기
    user_id = get_jwt_identity()

    diary = diary_request_dto(request.json)
    result = diary_post_service(user_id, diary)
    return diary_response_dto(result)


# 일기 보기
@diary_bp.route("/diary/<string:date>", methods=['GET']) 
@jwt_required()
def diary(date):
    user_id = get_jwt_identity()
    new_date = date_request_dto(date)
    diary = diary_read_service(user_id, new_date)
    return diary_response_dto(diary)


# 일기 리스트
@diary_bp.route("/diaries", methods=['GET'])
@jwt_required()
def diary_list():
    identity = get_jwt_identity()
    result = diary_list_service(identity)
    return diaries_response_dto(result)
