// 참고 : https://yeolceo.tistory.com/69
import {useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CalendarPage =()=>{
  const navigate = useNavigate();
  const [calendar, setCalendar] = useState(false); 
  const [getMoment, setMoment]=useState(moment()); // moment() : 현재 날짜 값을 가져옵니다.
  // console.log("moment: ", getMoment)
  const today = getMoment; // 현재 날짜
  const firstWeek = today.clone().startOf('month').week(); // startOf() : 현재 시간 기준 해당 달이 시작한지 어느 정도 시간(며칠)이 지났는지(2021-01-01 은 1, 6주 뒤면 2월5일이 되므로 endof('month)는 6)
  // endOf() : 현재 시간 기준 해당 달이 끝날때까지 어느 정도 시간(며칠)이 남았는지
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  // lastWeek에서 쓰인 조건문을 보면 1년은 52주가 존재하고 며칠이 더 있는데 이 부분을 달력은 53주로써 표현해야 합니다!! 
  // 하지만 moment()는 내년의 첫 주인 1로 표시하기 때문에 마지막 주가 1이라면 53으로 표시합니다.(2월이 29일이 아닌 년도의 12월 마지막 주의 경우 1을 리턴)

  const [todayColor, setTodayColor] = useState('')

  const calendarArr=()=>{

    let result = [];

    // date 를 받아서 페이지 이동하는 함수
    const getDiary = async (date) => {
      // 일기를 작성한 날이라면 다이어리 보여주는 페이지로 이동
      try {
        await axios.get(`/diary/${date}`);
        navigate(`/diary/${date}`);
      } 
      // 일기를 작성한 날이 아니라면 다이어리 작성하는 페이지로 이동
      catch (error) {
        navigate(`/diary-write?selectedDate=${date}`);
      }
    }

    for ( let week = firstWeek; week <= lastWeek; week++) {
      result = result.concat(
        <tr className="calendar" key={week}>
          {
            Array(7).fill(0).map((data,index) => {
              // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?

              let days = today.clone().startOf('year').week(week).startOf('week').add(index,'day');

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                    <td className="todayButton" key={index} >
                      <button className="todayButton" onClick={()=>getDiary(days.format('YYYY-MM-DD'))} 
                      style={{width:'30px', height: '30px', borderRadius: '50%', borderColor: 'red' }}>
                        <span>{days.format('D')}</span>
                      </button>
                    </td>
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                    <td className="nextMonthButton" key={index} >
                      <button className="nextMonthButton" onClick={()=>getDiary(days.format('YYYY-MM-DD'))} 
                      style={{backgroundColor:'gray', width:'30px', height: '30px', borderRadius: '50%', border: 'none'}}>
                        <span>{days.format('D')}</span>
                      </button>
                    </td>
                );
              }else{
                return(
                    <td className="restButton" key={index}  >
                      <button className="restButton" onClick={()=>getDiary(days.format('YYYY-MM-DD'))} 
                      style={{width:'30px', height: '30px', borderRadius: '50%', border: 'none'}}>
                        <span>{days.format('D')}</span>
                      </button>
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
    const response = await axios.get(`/diaries`);
    setCalendar(response.data);
    // console.log("calendar: ", calendar)
    console.log("res: ", response)
    console.log("response.data: ", response.data[0])
  }

  return(
    <div className="App">
        <div className="control">
          <button className="beforeMonth" 
          onClick={()=>setMoment(getMoment.clone().subtract(1,'month'))}
          style = {{backgroundColor:'gray', width:'20px', height: '20px', borderRadius: '50%', border: 'none'}}>
            {'<'}
          </button>

          <span className="nowMonth">    {today.format('YYYY 년 MM 월')}    </span>

          <button className="afterMonth" 
          onClick={()=>{setMoment(getMoment.clone().add(1,'month'))}}
          style = {{backgroundColor:'gray', width:'20px', height: '20px', borderRadius: '50%', border: 'none'}}>
            {'>'}
          </button>
        </div>
        <table>
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
        <button className="diary-print" onClick={getCalendar}>diary print</button>
        <div>
        { 
          calendar?
            calendar.map(diary => <Diary diary={diary} />) 
          : null
        }
        </div>
        
        <button onClick={() => {
            axios.get( "/check")
            .then(response => {
                console.log("check: ", response.data);
            })
            .catch(error=>{
                console.log(error);
            })
	    }}>유저체크</button>
    </div>
  );
}
export default CalendarPage;