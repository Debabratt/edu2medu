import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Contact from "./components/Contact";
import DaySchoolCarousel from "./components/DaySchoolCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Marque from "./components/Marque";
import Statistics from "./components/Statistics";
import BoardingSchool from "./components/BoardingSchool";
import DaySchool from "./components/DaySchool";
import PreSchool from "./components/PreSchool";
import Register from "./components/Register";
import RegisterD from "./components/RegisterD";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister";
import HMarque from "./components/HMarque";
import HCategory from "./components/HCategory";
import HStatistics from "./components/HStatistics";
import HContact from "./components/HContact";
import MedicalC from "./components/MedicalC";
import MedicalCl from "./components/MedicalCl";
import DaySchoolM from "./components/DaySchoolM";
import News from "./components/News";
import UserRegisterM from "./components/UserRegisterM";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Marque />
              <Category />
              <DaySchoolCarousel />
              <Contact />
              <Statistics />
              <Footer />
            </>
          }
        />

        <Route
          path="/healthcare"
          element={
            <>
              <Home />
              <HMarque />
              <HCategory />
              <MedicalC />
              <HContact />
              <HStatistics />
              <Footer />
            </>
          }
        />

        <Route path="/register" element={<UserRegister />} />
        <Route path="/registermedical" element={<UserRegisterM />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board-school" element={<BoardingSchool />} />
        <Route path="/day-school" element={<DaySchool />} />
        <Route path="/pre-schools" element={<PreSchool />} />

        {/* Corrected Register School Route */}
        <Route
          path="/register-school"
          element={
            <>
              <Register />
              <RegisterD />
            </>
          }
        />

        {/* Moved /hospitals Route Outside */}
        <Route path="/hospitals" element={<><MedicalCl />  <Footer /></>} />
        <Route path="/contact" element={<><HContact />  <Footer /></>} />
        <Route path="/school" element={<><DaySchoolM /> <Footer /></>} />
        <Route path="/news" element={<><News /> <Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
