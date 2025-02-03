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


function App() {
  return (
    <Router>
    
      <Header />
      
  
      <Routes>
       
        <Route path="/" element={
          <>
            <Home />
            <Marque />
            <Category />
           
            <DaySchoolCarousel />
            <Contact />
            <Statistics />
            <Footer />
          </>
        } />
        
        
        <Route path="/board-school" element={<BoardingSchool />} />
        <Route path="/day-school" element={<DaySchool />} />
        <Route path="/pre-schools" element={<PreSchool />} />
        <Route path="/register-school" element={<><Register />
        <RegisterD/>
        </>
      } />
      </Routes>
    </Router>
  );
}

export default App;
