// 참고 : https://yeolceo.tistory.com/69
import {useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DiaryWritePage from './DiaryWritePage';

const CalendarPage =()=>{
  const navigate = useNavigate();
  const [calendar, setCalendar] = useState(false); 
  const [getMoment, setMoment]=useState(moment("2021-12-03")); // moment() : 현재 날짜 값을 가져옵니다.
  const today = getMoment; // 현재 날짜
  // console.log("today: ", today)
  const firstWeek = today.clone().startOf('month').week(); // startOf() : 현재 시간 기준 해당 달이 시작한지 어느 정도 시간(며칠)이 지났는지(2021-01-01 은 1, 6주 뒤면 2월5일이 되므로 endof('month)는 6)
  console.log("today week: ", firstWeek)
  // endOf() : 현재 시간 기준 해당 달이 끝날때까지 어느 정도 시간(며칠)이 남았는지
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  console.log("lastweek: ", today.clone().endOf('month').week())
  // lastWeek에서 쓰인 조건문을 보면 1년은 52주가 존재하고 며칠이 더 있는데 이 부분을 달력은 53주로써 표현해야 합니다!! 
  // 하지만 moment()는 내년의 첫 주인 1로 표시하기 때문에 마지막 주가 1이라면 53으로 표시합니다.(2월이 29일이 아닌 년도의 12월 마지막 주의 경우 1을 리턴)
  const calendarArr=()=>{

    let result = [];
    // let week = firstWeek;

    // const selectDate = (days) => {
    //   // setMoment(moment(days));
    // }

    const getDiary = async (date) => {
      // console.log("dtae: ", date)
      const sendyear = date[0]+date[1]+date[2]+date[3]
      const sendmonth = date[5]+date[6]
      const sendday = date[8] + date[9]
      try {
        await axios.get(`http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diary/${date}`);
        navigate(`/diary/${date}`);
      } catch (error) {
        return <DiaryWritePage year={sendyear} month={sendmonth} day={sendday} />
        // navigate(`/diary-write`);
      }
    }

    for ( let week = firstWeek; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data,index) => {
              console.log("data: ", data)
              console.log("index: ", index)
              // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?
              // console.log("what is this: ", today.clone().startOf('year').week(week))
              let days = today.clone().startOf('year').week(week).startOf('week').add(index,'day');
              // console.log("format day: ", days.format('YYYY-MM-DD'))

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                // if(getMoment.format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                    // <td key={index} style={{backgroundColor:'red'}} >
                    <td key={index} >
                      <button onClick={()=>getDiary(days.format('YYYY-MM-DD'))} style={{backgroundColor:'red'}}><span>{days.format('D')}</span></button>
                    </td>
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                    <td key={index} >
                      <button onClick={()=>getDiary(days.format('YYYY-MM-DD'))} style={{backgroundColor:'gray'}}><span>{days.format('D')}</span></button>
                    </td>
                );
              }else{
                return(
                    <td key={index}  >
                      <button onClick={()=>getDiary(days.format('YYYY-MM-DD'))}><span>{days.format('D')}</span></button>
                    </td>
                );
              }
            })
          }
        </tr>);
    }
    return result;
  }

  function Diary({diary}) {
    return (
      <div>
        <p>date: {diary.date}</p>
        <p>title: {diary.title}</p> 
        <p>content: {diary.content}</p>
      </div>
    )
  }

  const getCalendar = async() => {
    const response = await axios.get(`http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api/diaries`);
    setCalendar(response.data);
    console.log("calendar: ", calendar)
  }

  return(
    <div className="App">
        <div className="control">
          <button onClick={()=>setMoment(getMoment.clone().subtract(1,'month'))}>이전달</button>
          <span>{today.format('YYYY 년 MM 월')}</span>
          <button onClick={()=>{setMoment(getMoment.clone().add(1,'month'))}}>다음달</button>
        </div>
        <table>
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
        <button onClick={getCalendar}>diary print</button>
        <div>
        { 
          calendar?
            calendar.map(diary => <Diary diary={diary} />) 
          : null
        }
        </div>
    </div>
  );
}
export default CalendarPage;

// // import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import DiaryWritePage from "./DiaryWritePage";
// // import "react-modern-calendar-datepicker/lib/DatePicker.css";
// // import { Calendar } from "react-modern-calendar-datepicker";



// function CalendarPage() {
//   const [calendar, setCalendar] = useState(false); 
//   const navigate = useNavigate();
//   const [date, setDate] = useState(new Date())

//   const year = date.getFullYear()
//   const month = date.getMonth()+1
//   const day = date.getDate()

//   const getDiary = async (date) => {
//     try {
//       await axios.get(`http://localhost:5000/api/diary/${date}`);
//       navigate(`/diary/${date}`);
//     } catch (error) {
//       return <DiaryWritePage year={year} month={month} day={day} />
//       // navigate(`/diary-write`);
//     }
//   }

//   const handleDateChange = (e) => {
//     setDate(e.target.value)
//     getDiary(date)
//   }

//   // useEffect(()=>{

//   //   getCalendar();
//   // })

//   const getCalendar = async() => {
//     const response = await axios.get(`http://localhost:5000/api/diaries`);
//     setCalendar(response.data);
//     console.log("calendar: ", calendar)
//   }

//   function Diary({diary}) {
//     return (
//       <div>
//         <p>date: {diary.date}</p>
//         <p>title: {diary.title}</p> 
//         <p>content: {diary.content}</p>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <input type="date" name="date" onChange={handleDateChange} />
//       <button onClick={getCalendar}>diary print</button>
//       <div>
//         { 
//           calendar?
//             calendar.map(diary => <Diary diary={diary} />) 
//           : null
//         }
//       </div>
//     </div>
//   );
// };

// export default CalendarPage;
