import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import feedbackData from "../data";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [feedback, setFeedback] = useState(feedbackData);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Fetch data on load
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch data function
  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:3000/feedback");
    const data = await response.json();
    // console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  // delete feedback post from LOCAL test data
  // const deleteFeedback = (id) => {
  //   if (window.confirm("This action will delete this post!")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  // delete feedback post from server/DB data
  const deleteFeedback = async (id) => {
    if (window.confirm("This action will delete this post!")) {
      await fetch(`http://localhost:3000/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //---- add feedback to LOCAL test data
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // };

  // Add to server/DB data
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:3000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // Set item to edit mode
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update edit item
  // const updateFeedback = (id, upItem) => {
  //   setFeedback(
  //     feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
  //   );
  // };

  // Update edit item
  const updateFeedback = async (id, upItem) => {
    const response = await fetch(`http://localhost:3000/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(upItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
