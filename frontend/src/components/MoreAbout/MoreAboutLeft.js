import React from 'react';
import './MoreAbout.scss';
//scrolling page


const MoreAboutLeft = () => {
    return (
        <>
        <div className="fullpage">

            <div className = "intro">
            <h2 >감정으로 식물을 성장 시키는 일기</h2>
           </div>
          
            <div className = "Question">

          <h1>Question</h1>

          <div className = "FAQ1">
            <div className = "QuestionText">
              <text>Q : 어떤 서비스 인가요? </text>
              </div>
            </div>
           
           
            <div className = "FAQ2">
            <div className = "QuestionText">
            <text>Q : 꽃무리 페이지는 어떤 페이지 인가요?</text>
              </div>
            </div>

            <div className = "FAQ3">
            <div className = "QuestionText">
              <text>Q : 감정의 구성은 어떻게 되어 있나요?</text>
              </div>
            </div>
          

            </div>

          </div>
        </>
    );
}

export default MoreAboutLeft;