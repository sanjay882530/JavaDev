import React, { useState } from "react";
import InterviewQuestionNav from "../../InterviewQuestionNav";

const QuestionAnswer = () => {
  // Sample data
  const questions = [
    {
      id: 1,
      question: "What is Java?",
      answer: `Java is a high-level programming language that was developed by James Gosling in the year 1982. It is based on the principles of object-oriented programming and can be used to develop large-scale applications. 
The following article will cover all the popular Core Java interview questions, String Handling interview questions, Java 8 interview questions, Java multithreading interview questions, Java OOPs interview questions, Java exception handling interview questions, collections interview questions, and some frequently asked Java coding interview questions.
<br/>
Go through all the important questions to enhance your chances of performing well in the Java Interviews. The questions will revolve around the basic, core & advanced fundamentals of Java.`,
    },
    {
      id: 2,
      question: "Why is Java not a pure object oriented language?",
      answer:
        "Java supports primitive data types - byte, boolean, char, short, int, float, long, and double and hence it is not a pure object oriented language.",
    },
    {
      id: 3,
      question:
        "Difference between Heap and Stack Memory in java. And how java utilizes this.",
      answer: `Stack memory is the portion of memory that was assigned to every individual program. And it was fixed. On the other hand, Heap memory is the portion that was not allocated to the java program but it will be available for use by the java program when it is required, mostly during the runtime of the program.
Java Utilizes this memory as - <br/>
-> When we write a java program then all the variables, methods, etc are stored in the stack memory. <br/>
-> And when we create any object in the java program then that object was created in the heap memory. And it was referenced from the stack memory.`,
    },
    {
      id: 4,
      question: "How is an infinite loop declared in Java?",
      answer: `Infinite loops are those loops that run infinitely without any breaking conditions. Some examples of consciously declaring infinite loop is:<br/>
   <b> Using For Loop:</b>
    <br/>
        for (;;)
      {
        // Business logic
        // Any break logic
      }
<br/>
<b>Using while loop:</b>
<br/>
while(true){
   // Business logic
   // Any break logic
}`,
    },
    {
      id: 5,
      question: "Briefly explain the concept of constructor overloading?",
      answer: `Constructor overloading is the process of creating multiple 
      constructors in the class consisting of the same name with a difference in the constructor parameters.
       Depending upon the number of parameters and their corresponding types, distinguishing of the different 
       types of constructors is done by the compiler.`,
    },
  ];

  // State to track selected question
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div>
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
                {q.id}. {q.question}
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
              {/* Render the answer with HTML */}
              <p
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedQuestion.answer }}
              ></p>
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
