import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  // Else
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} {...item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default FeedbackList;
