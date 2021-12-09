import React from 'react';
import './MoreAbout.scss';
//scrolling page


const MoreAboutRight = () => {
    return (
        <>
        <div className="fullpage">
          
            <div className = "intro">
            <h2>꽃무리</h2>
           </div>
          
            <div className = "Answer">
          <h1>Answer</h1>
          <div className = "FAQ1">
            <div className = "AnswerText">
              <ol>A : 씨앗에 물 대신 감정을 주어 하나의 꽃으로 피어나게 하는 감정일기장입니다.</ol>
              </div>
            </div>
           
            <div className = "FAQ2">
            <div className = "AnswerText">
              <ol>A : 꽃무리 페이지는 사용자의 꽃의 감정일기를 저장하는 페이지 입니다. 월별로 저장이 되어 예전에 사용자의 일기에 대한 감정 정도를 확인 할 수 있습니다. </ol>
              </div>

                </div>
            
          
            <div className = "FAQ3">
            <div className = "AnswerText">
              <ol>A : 감정은 '공포' , '놀람', '분노', '슬픔', '중립', '행복', '혐오'으로 구성되어 있습니다.</ol>
              </div>
            </div>


          </div>
          </div>
        </>
    );
}

export default MoreAboutRight;