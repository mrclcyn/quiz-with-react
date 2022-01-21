import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiController = (props) => {
  const [quiz, setQuiz] = useState([]);
  const URL = `https://quizzquestions.herokuapp.com/api/questions`;
  //const URL = "https://jsonplaceholder.typicode.com/users";
  //const URL ="https://api.trivia.willfry.co.uk/questions?categories=science&limit=10";
  const [loading, setLoading] = useState(true);

  const fetchQuizAPI = async () => {
    await axios.get(URL).then((response) => {
      // console.log(response.data.data);
      setQuiz(response.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchQuizAPI();
  }, []);

  return (
    <ApiContext.Provider value={[quiz, setQuiz]}>
      {!loading && props.children}
    </ApiContext.Provider>
  );
};
