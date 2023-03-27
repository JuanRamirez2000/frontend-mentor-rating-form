import { useState } from "react";
import "./App.css";
import star from "./assets/images/icon-star.svg";
import phone from "./assets/images/illustration-thank-you.svg";

function App() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  return (
    <div>
      {!formSubmitted ? (
        <div className="rating-card">
          <img src={star} alt="star-icon" className="card-star" />
          <h1 className="card-title">How did we do?</h1>
          <p className="card-paragraph">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="card-buttons">
            <button onClick={() => setRating(1)}>1</button>
            <button onClick={() => setRating(2)}>2</button>
            <button onClick={() => setRating(3)}>3</button>
            <button onClick={() => setRating(4)}>4</button>
            <button onClick={() => setRating(5)}>5</button>
          </div>
          <button
            className="card-submit"
            onClick={() => setFormSubmitted(true)}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="thank-you-card">
          <img src={phone} alt="thank you" className="thank-you-image" />
          <p className="thank-you-rating"> You selected {rating} out of 5</p>
          <h1 className="thank-you-title"> Thank you! </h1>
          <p className="thank-you-paragraph">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
