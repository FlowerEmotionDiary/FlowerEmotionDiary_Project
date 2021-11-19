from domain.dao.diaryDao import check_diary_date, new_diary

def diary_post_service(user_id, diary):
    check_diary = check_diary_date(user_id, diary['date'])
    # 작성한 다이어리가 없다면 새로 생성
    if not check_diary:
        diary = new_diary(
            user_id=user_id,
            date=diary['date'],
            title=diary['title'],
            content=diary['content']
        )
        return diary
    
    else:
        'diary is already exist'    