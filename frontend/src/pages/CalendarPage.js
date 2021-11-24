import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { Calendar } from "react-modern-calendar-datepicker";



function CalendarPage() {
  const [calendar, setCalendar] = useState(false); 
  const navigate = useNavigate();

  const getDiary = async (date) => {
    try {
      await axios.get(`http://localhost:5000/api/diary/${date}`);
      navigate(`/diary/${date}`);
    } catch (error) {
      navigate(`/diary-write`);
    }
  }

  const handleDateChange = (e) => {
    const date = e.target.value
    getDiary(date);
  }

  // useEffect(()=>{

  //   getCalendar();
  // })

  const getCalendar = async() => {
    const response = await axios.get(`http://localhost:5000/api/diaries`);
    setCalendar(response.data);
    console.log("calendar: ", calendar)
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
  return (
    <div>
      <input type="date" name="date" onChange={handleDateChange} />
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
};

export default CalendarPage;