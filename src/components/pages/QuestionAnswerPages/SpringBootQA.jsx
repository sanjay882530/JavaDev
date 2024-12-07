import React, { useState } from "react";
import InterviewQuestionNav from "../../InterviewQuestionNav";
const QuestionAnswer = () => {
  // Sample data
  const questions = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript used in React.",
    },
    {
      id: 3,
      question: "What are React hooks?",
      answer:
        "React hooks are functions that let you use state and lifecycle features in function components.",
    },
  ];

  // State to track selected question
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className=" mt-20">
      <InterviewQuestionNav />
      <div className="flex h-screen ">
        {/* Left Panel: Questions List */}
        <div className="w-1/4 bg-gray-200 p-4 overflow-auto">
          <h2 className="text-lg font-bold mb-4">Questions</h2>
          <ul className="space-y-2">
            {questions.map((q) => (
              <li
                key={q.id}
                className={`p-2 rounded cursor-pointer ${
                  selectedQuestion?.id === q.id
                    ? "bg-blue-400 text-white"
                    : "bg-white"
                }`}
                onClick={() => setSelectedQuestion(q)}
              >
                {q.question}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Panel: Answer Display */}
        <div className="w-3/4 bg-white p-6 flex items-center justify-center">
          {selectedQuestion ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {selectedQuestion.question}
              </h2>
              <p className="text-lg">{selectedQuestion.answer}</p>
            </div>
          ) : (
            <p className="text-gray-500">Select a question to see the answer</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
