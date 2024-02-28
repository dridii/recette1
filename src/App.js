import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from "./Components/Landing";
import Formulaire from "./Components/Formulaire";
import Formulaire1 from "./Components/Formulaire1";
import Formulaire2 from "./Components/Formulaire2";
import Formulaire3 from "./Components/Formulaire3";
import Formulaire4 from "./Components/Formulaire4";
import Formulaire5 from "./Components/Formulaire5";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Formulaire6 from "./Components/Formulaire6";
import Formulaire7 from "./Components/Formulaire7";
import Formulaire8 from "./Components/Formulaire8";
import Formulaire9 from "./Components/Formulaire9";
import Formulaire10 from "./Components/Formulaire10";
import Formulaire11 from "./Components/Formulaire11";
import Formulaire12 from "./Components/Formulaire12";
import Formulaire13 from "./Components/Formulaire13";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Formulaire14 from "./Components/Formulaire14"
function App() {

  return <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/bara" element={<Signup />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/formulaire1" element={<Formulaire1 />} />
          <Route path="/formulaire2" element={<Formulaire2 />} />
          <Route path="/formulaire3" element={<Formulaire3 />} />
          <Route path="/formulaire4" element={<Formulaire4 />} />
          <Route path="/formulaire5" element={<Formulaire5 />} />
          <Route path="/formulaire6" element={<Formulaire6 />} />
          <Route path="/formulaire7" element={<Formulaire7 />} />
          <Route path="/formulaire8" element={<Formulaire8 />} />
          <Route path="/formulaire9" element={<Formulaire9 />} />
          <Route path="/formulaire10" element={<Formulaire10 />} />
          <Route path="/formulaire11" element={<Formulaire11 />} />
          <Route path="/formulaire12" element={<Formulaire12 />} />
          <Route path="/formulaire13" element={<Formulaire13 />} />
        <Route path="/formulaire14" element={<Formulaire14 />} />
        <Route path="/Femme" element={<AboutUs />} />
        <Route path="/Homme" element={<Contact/> } />
        </Routes>
      </Router>
    </div>;
}

export default App;
