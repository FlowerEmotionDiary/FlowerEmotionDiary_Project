import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import DatePicker from "react-modern-calendar-datepicker";
import TopTitle from '../components/login-topSection/TopTitle';

function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
  );
};

export default CalendarPage;