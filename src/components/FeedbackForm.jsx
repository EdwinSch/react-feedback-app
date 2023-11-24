import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  //useEffect
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (event) => {
    if (text === "") {
      setIsBtnDisabled(true);
      setMessage(null);
    }
    if (text.trim().length < 10) {
      setIsBtnDisabled(true);
      setMessage("text to short");
    } else {
      setIsBtnDisabled(false);
      setMessage(null);
    }

    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFeedback = {
      text,
      rating,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={isBtnDisabled} version="secondary">
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
