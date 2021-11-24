import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWritePage from "./pages/DiaryWritePage";
import DiaryPage from "./pages/DiaryPage";
// import date from "./pages/DiaryWritePage";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  // const diaryResultPath = `/diary/${date}`
  return (
    <div className="App">
        <Routes>
          <Route  path="/calendar" element={<CalendarPage />} />
          <Route  path="/diary-write" element={<DiaryWritePage />} /> {/* 일기 작성 페이지 */}
          <Route  path="/diary/:date" element={<DiaryPage />} /> {/* 일기 보여주는 페이지 */}
          <Route path="/" element={<Navigate to="/diary-write" />} />
        </Routes>
    </div>
  );
};

export default App;


// import "./App.css";
// import CalendarPage from "./pages/CalendarPage";
// import DiaryWrite from "./pages/DiaryWritePage";
// import DiaryPage from "./pages/DiaryPage";

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// const App = () => {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/diary-write" />} />
//           <Route  path="/calendar" element={<CalendarPage />} />
//           <Route  path="/diary-write" element={<DiaryWrite />} />
//           <Route  path="/diary/:date" element={<DiaryPage />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;

