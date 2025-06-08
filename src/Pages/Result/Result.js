import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push("/");
  };

  return (
    <div className="result-page">
      <div className="result-container">
        <h2 className="result-title">Congratulations, {name}! 🎉</h2>
        <p className="result-score">Your Final Score: <strong>{score}</strong></p>
        <p className="thank-you">Thank you for playing 😊</p>

        <Button
          variant="contained"
          color="primary"
          onClick={handleGoHome}
          className="home-btn"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Result;
