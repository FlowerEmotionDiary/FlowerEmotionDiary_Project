import datetime
from domain.dao.flowerDao import testDao
from domain.dao.diaryDao import diaries_month
from datetime import datetime, date

def flower_test_service(user_id):
    return "test"

def diary_count(user_id):
    diaries = diaries_month(user_id=user_id)
    count = len(diaries)
    return count

def current_emotion(user_id):
    diaries = diaries_month(user_id=user_id)
    current_date = date(1900, 1, 1)
    current_diary = ""
    for diary in diaries:
        if diary.date > current_date:
            current_date = diary.date
            current_diary = diary

    cur_emotion = max_emotion(current_diary)

    return cur_emotion

# 일기장 감정 분석 결과 중 가장 수치가 큰 감정
def max_emotion(diary):
    emotion = {
        '공포' : diary.fear, 
        '놀람': diary.surprised, 
        '분노': diary.anger, 
        '슬픔': diary.sad, 
        '중립': diary.neutral, 
        '행복': diary.happy, 
        '혐오': diary.aversion
        }
    return max(emotion.keys(), key=(lambda k:emotion[k]))




def flower_service(user_id):


    return