import  { useState } from "react";
import InterviewQuestionNav from "../../InterviewQuestionNav";

const QuestionAnswer = () => {
  // Sample data
  const questions = [
    {
      id: 1,
      question: "What is Java?",
      answer: `Java is a high-level programming language that was developed by James Gosling in the year 1982. Java is a powerful general-purpose programming language. It is one of the most popular programming languages used to develop desktop and mobile applications, big data processing, embedded systems and so on.
<br/>
Go through all the important questions to enhance your chances of performing well in the Java Interviews. The questions will revolve around the basic, core & advanced fundamentals of Java.`,
    },
    {
      id: 2,
      question: "What are Features of Java Programming?",
      answer: `
        <h1 class="text-lg font-bold">Java is platform-independent</h1>
        <p>
          Java was built with the philosophy of "write once, run anywhere" (WORA).
          The Java code you write on one platform (operating system) will run on other platforms with no modification.
        </p>
        <br/>
        <h1 class="text-lg font-bold">An object-oriented Language</h1>
        <p>
          The object-oriented approach is one of the popular programming styles.
          In object-oriented programming, a complex problem is divided into smaller sets by creating objects.
          This makes Java code reusable, has design benefits, and makes code easier to maintain.
        </p>
        <br/>
        <h1 class="text-lg font-bold">Java is fast</h1>
        <p>
          The earlier version of Java was criticized for being slow. However,
          the new version of Java is one of the fastest programming languages.
        </p>
        <p>
          A well-optimized Java code is nearly as fast as lower-level languages like C/C++ and much faster than Python, PHP, etc.
        </p>
         <h1 class="text-lg font-bold">Java is secure</h1>
        <p>
          Some of the high-level features for security that Java handles are:
        </p>
        <ul class="mx-5 list-disc">
        <li>provides a secure platform for developing and running applications</li>
        <li>automatic memory management reduces memory corruption and vulnerabilities</li>
        </ul>
        <br/>
      `,
    },
    
    {
      id: 3,
      question: "Why is Java not a pure object oriented language?",
      answer:
        "Java supports primitive data types - byte, boolean, char, short, int, float, long, and double and hence it is not a pure object oriented language.",
    },
    {
      id: 4,
      question:
        "Difference between Heap and Stack Memory in java. And how java utilizes this.",
      answer: `Stack memory is the portion of memory that was assigned to every individual program. And it was fixed. On the other hand, Heap memory is the portion that was not allocated to the java program but it will be available for use by the java program when it is required, mostly during the runtime of the program.
Java Utilizes this memory as - <br/>
-> When we write a java program then all the variables, methods, etc are stored in the stack memory. <br/>
-> And when we create any object in the java program then that object was created in the heap memory. And it was referenced from the stack memory.`,
    },
    {
      id: 5,
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
      id: 6,
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
