// components
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";

// context
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <>
        <Header />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
