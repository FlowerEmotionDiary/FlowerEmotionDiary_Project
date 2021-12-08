import React from 'react';
import './MoreAbout.scss';
//scrolling page


const MoreAbout = () => {
    return (
        <>
        <div className="fullpage">

            <div className = "intro">
            <h2 className="h2_">감정으로 식물을 성장 시키는 일기</h2>
           </div>
          
            <div className = "FAQ">
          <h1>Question</h1>
          <div className = "FAQ_1">
            <div className = "QuestionText">
              <ol>F : 어떤 서비스 인가요? </ol>
              </div>
            </div>

        <p></p>
           
            <div className = "FAQ_2">
            <div className = "QuestionText">
              <ol>F : 질문2?</ol>
              </div>
              <p></p>

                </div>
            </div>

          </div>
        </>
    );
}

export default MoreAbout;