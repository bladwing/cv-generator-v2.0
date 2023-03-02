import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Personal from "./components/personal/Personal";
import Expirience from "./components/expirience/Expirience";
import Educations from "./components/education/Educations";
import Main from "./components/main/Main"

import "./components/components.scss"
import "./components/preview.scss"
import "./App.scss";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigate />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/expirience" element={<Expirience />} />
          <Route path="/education" element={<Educations />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

const Navigate = () => {
  return (
    <div className="navigate">
      <Link to="/">Main</Link>
      <Link to="/personal">Personal</Link>
      <Link to="/expirience">Expirience</Link>
      <Link to="/education">Education</Link>
      <Link to="/resume">Resume</Link>
      <button onClick={() => localStorage.clear()}>Clear Storage</button>
    </div>
  );
};



