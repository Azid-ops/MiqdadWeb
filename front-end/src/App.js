import "./App.css";
import DataEntry from "./Components/DataEntry";
// import Home from './Components/Home';
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./Components/Update";
import HomePage from "./Components/HomePage";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Details" element={<DataEntry />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
