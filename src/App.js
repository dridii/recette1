import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from "./Components/Landing";
import Formulaire from "./Components/Formulaire";
function App() {
  return <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/formulaire" element={<Formulaire />} />
        </Routes>
      </Router>
    </div>;
}

export default App;
