import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="header">
      <div className="navBar">
        <h1 className="title">Welcome to the Full Stack Web Developer Quiz</h1>
        <NavLink to="/quiz" className="quizButton">
          TAKE THE QUIZ
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
