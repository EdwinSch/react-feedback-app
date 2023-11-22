// components
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data";
// hooks
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// context
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("This action will delete this post!")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
      <>
        <Header />
        <div className="container">
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats />
          <FeedbackList handleDelete={deleteFeedback} />
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
