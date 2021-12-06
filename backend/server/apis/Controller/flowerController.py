from flask import Blueprint, jsonify
from flask_jwt_extended import  jwt_required, get_jwt_identity
from service.statisticsService import year_statics_service, month_statics_service
from apis.dto.flowerDto import flower_response_dto

flower_bp = Blueprint('flower', __name__, url_prefix='/api')

# 현재 달에 작성한 일기 횟수
@flower_bp.route("/flower", methods=['GET'])
@jwt_required()
def get_flower():
    user_id = get_jwt_identity()

    count , current_emotion = month_statics_service(user_id)
    return flower_response_dto(count, current_emotion)

# 꽃무리 페이지 꽃 통계
@flower_bp.route("/flowers/<int:year>", methods=['GET'])
@jwt_required()
def get_flowers(year):
    user_id = get_jwt_identity()
    result = year_statics_service(user_id, year)
    return jsonify(result)