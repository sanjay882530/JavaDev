import React from "react";
const InterviewQuestionNav = () => {
  return (
    <nav className="bg-slate-400 mt-20 ">
      <div className="container mx-auto flex  items-center">
        <ul className="flex space-x-20 ">
          <li>
            <a href="/core-javaQA" className="text-black hover:text-gray-500">
              Core Java
            </a>
          </li>
          <li>
            <a href="#spring-bootQA" className="text-black hover:text-gray-500">
              Spring Boot
            </a>
          </li>
          <li>
            <a href="/reactQA" className="text-black hover:text-gray-500">
              React
            </a>
          </li>
          <li>
            <a href="#microservices" className="text-black hover:text-gray-500">
              Microservices
            </a>
          </li>
          <li>
            <a href="#tools" className="text-black hover:text-gray-500">
              Tools
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default InterviewQuestionNav;
