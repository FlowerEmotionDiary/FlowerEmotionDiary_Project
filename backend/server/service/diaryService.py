from domain.dao.diaryDao import check_diary_date, new_diary, all_diaries, delete_diary_date, update_diary
# from AI_model.analysisService import function

# 일기 작성 서비스
def diary_post_service(user_id, diary):
    check_diary = check_diary_date(user_id, diary['date'])

    # 작성한 다이어리가 없다면 새로 생성
    # emotion = function.split_send_data(diary['content'])
    emotion = {'공포' : 0, '놀람': 1, '분노': 2, '슬픔': 3, '중립': 4, '행복': 5, '혐오': 6}
    if not check_diary:
        diary = new_diary(
            user_id=user_id,
            date=diary['date'],
            title=diary['title'],
            content=diary['content'],
            emotion=emotion
        )
        return diary
    
    else:
        return ''    

# 일기 삭제 서비스
def diary_delete_service(user_id, date):
    if delete_diary_date(user_id, date):
        return 200
    else:
        return 400

# 일기 수정 서비스
def diary_update_service(user_id, diary):
    # emotion = function.split_send_data(diary['content'])
    emotion = {'공포' : 6, '놀람': 5, '분노': 4, '슬픔': 3, '중립': 2, '행복': 1, '혐오': 0}

    
    if update_diary(
        user_id=user_id,
        diary=diary, 
        emotion=emotion
    ):
        return 200
    else:
        return 400

def diary_read_service(user_id, date):
    check_diary = check_diary_date(user_id, date)
    if check_diary:
        return check_diary
    else:
        ''

def diary_list_service(user_id):
    diaries = all_diaries(user_id)
    result = []
    for diary in diaries:
        result.append(
            {
                "title":diary.title,
                "content":diary.content,
                "date":diary.date.strftime("%Y-%m-%d")
            }
        )

    return result
