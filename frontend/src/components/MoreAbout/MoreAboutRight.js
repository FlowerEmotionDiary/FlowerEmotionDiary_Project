import React from 'react';
import './MoreAbout.scss';
//scrolling page


const MoreAbout = () => {
    return (
        <>
        <div className="fullpage">

            <div className = "intro">
            <h3>꽃무리</h3>
           </div>
          
            <div className = "FAQ">
          <h1>Answer</h1>
          <div className = "FAQ_1">
            <div className = "QuestionText">
              <ol>F : 질문1?</ol>
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
          

          
          <div className = "Team">
          <img class="fit-picture" src={"./img/img1.jpg"}/>
          <img class="fit-picture" src={"./img/img2.jpg"}/>
          <img class="fit-picture" src={"./img/img3.jpg"}/>
          <img class="fit-picture" src={"./img/img4.jpg"}/>
           </div>
          
          </div>
        </>
    );
}

export default MoreAbout;