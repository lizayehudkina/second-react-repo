import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home  from './components/pages/home/Home';
import Experience  from './components/pages/experience/Experience';
import Education  from './components/pages/education/Education';
// import HardSkills  from './components/pages/hardskills/HardSkills';
// import SoftSkills  from './components/pages/softskills/SoftSkills';



function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "experience" element={<Experience/>} />
        <Route path = "education" element={<Education/>} />
        {/* <Route path = "hardskills" element={<Hardskills/>} />
        <Route path = "softskills" element={<Softskills/>} /> */}
      </Routes>
    </>
  );
}

export default App;
