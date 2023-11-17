import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ id, rating, text, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDelete(id)} className="close" type="button">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
