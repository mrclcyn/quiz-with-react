import "./App.css";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import { ApiController } from "./components/context/ApiContext";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <ApiController>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </ApiController>
    </div>
  );
};

export default App;
