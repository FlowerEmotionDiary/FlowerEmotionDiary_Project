from domain.dao.flowerDao import statics_year, check_flower, new_flower, update_flower
from domain.dao.diaryDao import diaries_month
from datetime import date
from service.diaryService import max_emotion


def month_statics_service(user_id):
    diaries = diaries_month(user_id=user_id)
    count = len(diaries)

    current_date = date(1900, 1, 1)
    current_diary = ""
    count_emotion = {
        '공포' : 0, 
        '놀람': 0, 
        '분노': 0, 
        '슬픔': 0, 
        '중립': 0, 
        '행복': 0, 
        '혐오': 0
        }
    for diary in diaries:
        count_emotion[max_emotion(diary)] += 1

        # 가장 최근 작성한 일기 찾기
        if diary.date > current_date:
            current_date = diary.date
            current_diary = diary

    cur_emotion = max_emotion(current_diary)

    if check_flower(user_id):
        update_flower(user_id, count, max(count_emotion.keys(), key=(lambda k:count_emotion[k])))
    else:
        new_flower(user_id, count, max(count_emotion.keys(), key=(lambda k:count_emotion[k])))

    return count, cur_emotion


def year_statics_service(user_id, year):
    flowers = statics_year(user_id, year)
    result = []
    for flower in flowers:
        result.append({
            "count":flower.count,
            "emotion":flower.emotion,
            "month":flower.date.month
        })
    return result