import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    if (text === "") {
      setIsBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
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
    handleAdd(newFeedback);
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
