import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ id, rating, text }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        onClick={() => deleteFeedback(id)}
        className="close"
        type="button"
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
