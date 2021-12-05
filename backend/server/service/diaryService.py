from domain.dao.diaryDao import check_diary_date, new_diary, all_diaries

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
        return ''    

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
