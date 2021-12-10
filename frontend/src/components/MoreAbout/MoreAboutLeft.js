import React from 'react';
import './MoreAbout.scss';

const MoreAboutLeft = () => {
  return (
    <div className="fullpage">
      <div className = "text-container">
        <p className="title">감정으로 식물을 성장 시키는 일기</p>
        꽃무리
    
        <div className = "QuestionText">
          <p>Q : 어떤 서비스 인가요? </p>
          <p>A : 씨앗에 물 대신 감정을 주어 하나의 꽃으로 피어나게 하는 감정일기장입니다.</p>
        </div>
        
        
        <div className = "QuestionText">
        <p>Q : 꽃무리 페이지는 어떤 페이지 인가요?</p>
        <p>A : 꽃무리 페이지는 사용자의 꽃의 감정일기를 저장하는 페이지 입니다. 월별로 저장이 되어 예전에 사용자의 일기에 대한 감정 정도를 확인 할 수 있습니다. </p>
        </div>

        <div className = "QuestionText">
          <p>Q : 감정의 구성은 어떻게 되어 있나요?</p>
          <p>A : 감정은 '공포' , '놀람', '분노', '슬픔', '중립', '행복', '혐오'으로 구성되어 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutLeft;