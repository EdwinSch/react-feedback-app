import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import feedbackData from "../data";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // delete feedback post
  const deleteFeedback = (id) => {
    if (window.confirm("This action will delete this post!")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add feedback post
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to edit mode
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update edit item
  const updateFeedback = (id, upItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
