import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  // deconstruct item object
  const { id, rating, text } = item;

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
      <button
        className="edit"
        onClick={() => {
          editFeedback(item);
        }}
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
