import { useState, useEffect, useContext } from "react";
import { ApiContext } from "./context/ApiContext";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
// import { Send as SendIcon } from "@mui/icons-material";

const Quiz = () => {
  const [quiz, setQuiz] = useContext(ApiContext);
  const [count, setCount] = useState(0);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    const clickedItem = document.getElementById("clickedItem");
    clickedItem.innerText = "";
  };

  const itemClicked = (option) => {
    console.log(quiz[count].correctAnswer);
    const clickedItem = document.getElementById("clickedItem");
    //const gridItem = document.getElementsByClassName("gridItem");
    //const mainGrid = document.getElementsByClassName("mainGrid");
    //const pointer = document.getElementsByClassName("poin");
    const divCorrectAnswer = document.getElementById("divCorrectAnswer");
    //divCorrectAnswer.innerText = "clicked";
    //const nextButton = document.getElementsByClassName("nextButton");
    console.log(divCorrectAnswer);
    if (quiz[count].correctAnswer === option) {
      clickedItem.innerText = "Correct Answer";
      clickedItem.style.color = "green";

      setCountCorrectAnswers(countCorrectAnswers + 1);
      divCorrectAnswer.innerText = `No of correct answer is: ${countCorrectAnswers}`;
      //mainGrid.disabled = true;
      // gridItem.disabled = true;
      // gridItem.style.display = "none";
      // for (let i = 0; i < gridItem.length; i++) {
      //   // I just try something quick
      //   pointer[i].style.pointer.events = "none";
      // }
    } else {
      clickedItem.innerText = "Wrong Answer";
      clickedItem.style.color = "red";

      if (countCorrectAnswers > 0) {
        setCountCorrectAnswers(countCorrectAnswers - 1);
        divCorrectAnswer.innerText = `No of correct answers : ${countCorrectAnswers}`;
      }

      // gridItem.disabled = true;
      // gridItem.style.display = "none";
      // for (let i = 0; i < gridItem.length; i++) {
      //   pointer[i].style.pointer.events = "none";
      // }

      //mainGrid.disabled = true;
    }

    //nextButton.disabled = "false";
  };

  useEffect(() => {}, [count, countCorrectAnswers]);

  return (
    <>
      <div className="header">
        <Link className="goHome" to="/">
          Restart Quiz
        </Link>
      </div>
      <div className="quiz">
        <div>
          <h2>
            {count + 1}. {quiz[count].question}
          </h2>
        </div>
        <Grid
          id="mainGrid"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ paddingBottom: "20px" }}
        >
          {quiz[count].incorrectAnswers.map((option) => {
            return (
              <Grid
                className="pointer"
                item
                onClick={() => itemClicked(option)}
                class="gridItem"
              >
                {option}
              </Grid>
            );
          })}
        </Grid>
        <div id="clickedItem" style={{ paddingBottom: "20px" }}></div>
        <Button
          variant="contained"
          onClick={() => handleClick()}
          id="nextButton"
        >
          Next
        </Button>
        <div
          id="divCorrectAnswer"
          style={{ paddingTop: "20px", fontSize: "30px", color: "orange" }}
        ></div>
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item>1</Grid>
      </Grid> */}
      </div>
    </>
  );
};

export default Quiz;
