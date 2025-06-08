import axios from "axios";
import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url("/book2.jpg")' }}>
        <Navbar />
        <Header />
        
        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
          </Route>

          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>

          <Route path="/result">
            <Result name={name} score={score} />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
