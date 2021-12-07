import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './MoreAbout.scss';

const MoreAbout = () => (
  
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className=" section fp-auto-height-active">
            <div className = "intro">
            <p>감정으로 식물을 성장 시키는 일기, 꽃무리 입니다.</p>
           </div>
          </div>

          <div className="section fp-auto-height-active">
            <div className = "FAQ">
          <h1>FAQ</h1>
          <div className = "FAQ_1">
            <div className = "QuestionText">
              <ol>F : 감정이 표현되기 까지 얼마나 걸리나요?</ol>
              </div>
              <p></p>
              <div className = "AnswerText">
              <ol>일기 하나만 작성한다면 감정을 식물의 표정으로 볼 수 있습니다.</ol>
              </div>
           </div>
           <div className = "FAQ_2">
            <div className = "QuestionText">
              <ol>F : 감정이 표현되기 까지 얼마나 걸리나요?</ol>
              </div>
              <p></p>
              <div className = "AnswerText">
              <ol>일기 하나만 작성한다면 감정을 식물의 표정으로 볼 수 있습니다.</ol>
              </div>
           </div>
           </div>
          </div>

          <div className="section fp-auto-height-active">
          <div className = "Team">
          <img class="fit-picture" src={"./img/img1.jpg"}/>
          <img class="fit-picture" src={"./img/img2.jpg"}/>
          <img class="fit-picture" src={"./img/img3.jpg"}/>
          <img class="fit-picture" src={"./img/img4.jpg"}/>
           </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default MoreAbout;






