from flask import Blueprint, request, jsonify
from apis.dto.requestDto import diary_request_dto
from service.diaryService import diary_post_service

diary_bp = Blueprint('diary', __name__, url_prefix='/api')

@diary_bp.route("/diary/<string:date>", methods=['POST'])
def diary_post(date):
    user_id = 1
    diary = diary_request_dto(request.json, date)
    diary_post_service(user_id, diary)
    return jsonify(diary)