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

import HMarque from "./components/HMarque";
import HCategory from "./components/HCategory";
import HStatistics from "./components/HStatistics";
import HContact from "./components/HContact";
import MedicalC from "./components/MedicalC";
import MedicalCl from "./components/MedicalCl";
import DaySchoolM from "./components/DaySchoolM";
import News from "./components/News";


import Jobs from "./components/Jobs";
import About from "./components/About";
import Medulogin from "./components/Medulogin";
import Adminlogin from "./components/Adminlogin";
import EduRegister from "./components/EduRegister";
import MeduRegister from "./components/MeduRegister";
import Userdash from "./components/Userdash";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route */}
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

        {/* Healthcare Route */}
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

        {/* Register and Login Routes */}
        <Route path="/register" element={<> <EduRegister /><Footer/></>}/>
        <Route path="/registermedical" element={<><MeduRegister /><Footer/></>} />
        <Route path="/login" element={<><Login /> <Footer/></>} />
        <Route path="/dashboard" element={<Userdash /> } />
        <Route path="/healthcarelogin" element={<><Medulogin /> <Footer/></>} />
        <Route path="/admin-login" element={<><Adminlogin /> <Footer/></>} />




        {/* School and Boarding Routes */}
        <Route path="/board-school" element={<><Header/><BoardingSchool /><Footer/></>} />
        <Route path="/day-school" element={<><Header/><DaySchool /><Footer/></>} />
        <Route path="/pre-schools" element={<PreSchool />} />

        {/* Register School Route */}
        <Route
          path="/register"
          element={
            <>
              <Register />
              <RegisterD />
              <Footer />
            </>
          }
        />

        {/* Hospitals Route */}
        <Route path="/hospitals" element={<><MedicalCl /><Footer /></>} />

        {/* Other Routes */}
        <Route path="/jobs" element={<><Jobs /><Footer /></>} />
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/contact" element={<><HContact /><Footer /></>} />
        <Route path="/school" element={<><DaySchoolM /><Footer /></>} />
        <Route path="/news" element={<><News /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
