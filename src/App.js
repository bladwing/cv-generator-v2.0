import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Personal from "./components/personal/Personal";
import Expirience from "./components/expirience/Expirience";

import "./components/components.scss"
import "./components/preview.scss"
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path="/personal" element={<Personal />} />
          <Route path="/expirience" element={<Expirience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Navigate = () => {
  return (
    <div className="navigate">
      <Link to="/personal">Personal</Link>
      <Link to="/expirience">Expirience</Link>
    </div>
  );
};
