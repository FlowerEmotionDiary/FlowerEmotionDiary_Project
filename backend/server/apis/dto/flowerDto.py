from datetime import datetime
from flask.json import jsonify

def flower_response_dto(count, emotion):
    if count > 0:
        return jsonify({
            "count":count,
            "emotion":emotion
        }), 200
    else:
        return "No Diary", 400
