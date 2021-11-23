import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { Calendar } from "react-modern-calendar-datepicker";



function CalendarPage() {
  const [calendar, setCalendar] = useState(); 
  const navigate = useNavigate();
  const getDiary = async (date) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/diary/${date}`);
      const{data} = response;
      console.log(data);
      navigate(`/diary/${date}`);
    } catch (error) {
      console.error(error);
      navigate(`/diary-write/${date}`);
    }
  }

  const handleDateChange = (e) => {
    const date = e.target.value
    console.log(date, e.target.value);
    getDiary(date);
  }

  useEffect(()=>{
    const getCalendar = async() => {
      const response = await axios.get(`http://localhost:5000/api/diaries`);
      const {data} = response;
      console.log(data)
      setCalendar(data);
    }
    getCalendar();
  })

  return (
    <div>
      <input type="date" name="date" onChange={handleDateChange} />
      <div>
        {calendar}
      </div>
    </div>
  );
};

export default CalendarPage;