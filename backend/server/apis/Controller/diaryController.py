from flask import Blueprint, request, jsonify
from apis.dto.requestDto import diary_request_dto, date_request_dto
from apis.dto.responseDto import diary_respose_dto, diaries_response_dto
from service.diaryService import diary_post_service, diary_read_service, diary_list_service

diary_bp = Blueprint('diary', __name__, url_prefix='/api')

# 일기 작성
@diary_bp.route("/diary", methods=['POST'])
def diary_post():
    # 로그인 기능 추가하면 이 부분은 token받아와서 처리하기
    user_id = 1

    diary = diary_request_dto(request.json)
    result = diary_post_service(user_id, diary)
    return diary_respose_dto(result)


# 일기 보기
@diary_bp.route("/diary/<string:date>", methods=['GET']) 
def diary(date):
    user_id = 1
    print(date)
    new_date = date_request_dto(date)
    diary = diary_read_service(user_id, new_date)
    return diary_respose_dto(diary)


# 일기 리스트
@diary_bp.route("/diaries", methods=['GET'])
def diary_list():
    user_id = 1
    result = diary_list_service(user_id)
    return diaries_response_dto(result)
