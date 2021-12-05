from flask import Blueprint, request, jsonify
from flask_jwt_extended import  jwt_required, get_jwt_identity
from service.flowerService import diary_count, current_emotion
from apis.dto.flowerDto import flower_response_dto
flower_bp = Blueprint('flower', __name__, url_prefix='/api')

# 현재 달에 작성한 일기 횟수
@flower_bp.route("/flower", methods=['GET'])
@jwt_required()
def get_flower():
    user_id = get_jwt_identity()

    count = diary_count(user_id)
    cur_emotion = current_emotion(user_id)
    return flower_response_dto(count, cur_emotion)