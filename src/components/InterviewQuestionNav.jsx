import React from "react";
import { Link } from "react-router-dom";
const InterviewQuestionNav = () => {
  return (
    <nav className="bg-slate-400 mt-20 ">
      <div className="container mx-auto flex  items-center">
        <ul className="flex space-x-20 ">
          <li>
            <Link to="/core-javaQA" className="text-black hover:text-gray-500">
              Core Java
            </Link>
          </li>
          <li>
            <Link
              to="#spring-bootQA"
              className="text-black hover:text-gray-500"
            >
              Spring Boot
            </Link>
          </li>
          <li>
            <Link to="/reactQA" className="text-black hover:text-gray-500">
              React
            </Link>
          </li>
          <li>
            <Link
              to="#microservices"
              className="text-black hover:text-gray-500"
            >
              Microservices
            </Link>
          </li>
          <li>
            <Link to="#tools" className="text-black hover:text-gray-500">
              Tools
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default InterviewQuestionNav;
