import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentFood from "./Components/StudentProfile/StudentFood/StudentFood";
import StudentHall from "./Components/StudentProfile/StudentHall/StudentHall";
import StudentInstituteInfo from "./Components/StudentProfile/StudentInstituteInfo/StudentInstituteInfo";
import StudentNotes from "./Components/StudentProfile/StudentNotes.js/StudentNotes";
import StudentPersonalInfo from "./Components/StudentProfile/StudentPersonalInfo/StudentPersonalInfo";
import StudentResult from "./Components/StudentProfile/StudentResult/StudentResult";
import StudentTransaction from "./Components/StudentProfile/StudentTransaction/StudentTransaction";
import StudentProfileSection from "./Pages/StudentProfileSection/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/studentprofile" />} />
          <Route
            path="/studentprofile"
            element={<Navigate to="personalInfo" />}
          />
          <Route path="studentprofile/*" element={<StudentProfileSection />}>
            <Route path="personalInfo" element={<StudentPersonalInfo />} />
            <Route path="instituionInfo" element={<StudentInstituteInfo />} />
            <Route path="result" element={<StudentResult />} />
            <Route path="transaction" element={<StudentTransaction />} />
            <Route path="food" element={<StudentFood />} />
            <Route path="hall" element={<StudentHall />} />
            <Route path="notes" element={<StudentNotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
