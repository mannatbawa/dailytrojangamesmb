import React, { useState, useEffect } from "react";
import axios from "axios";

// Log environment variables
console.log("Environment Variables:", import.meta.env);

const WeeklyQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";
        const response = await axios.get(`${apiUrl}/api/questions`, {
          params: { week: 1 },
        });
        setQuestions(response.data || []);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback("");
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <div>
      <h1>Weekly Quiz</h1>
      {questions.length > 0 && (
        <div>
          <h2>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <div key={questions[currentQuestionIndex].id}>
            <h2>{questions[currentQuestionIndex].question}</h2>
            <ul>
              {Object.entries(
                questions[currentQuestionIndex].options || {}
              ).map(([key, value]) => (
                <li key={key}>
                  <button
                    onClick={() => handleAnswerSelection(value)}
                    disabled={selectedAnswer !== null}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
            {selectedAnswer && <p>{feedback}</p>}
            {selectedAnswer && (
              <button onClick={handleNextQuestion}>Next Question</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyQuiz;
