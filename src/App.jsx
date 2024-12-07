import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JavaDoc from "./components/JavaDoc";
import SpringBoot from "./components/pages/SpringBoot";
import SpringIOC from "./components/pages/SpringIOC";
import SpringBootForMicroservices from "./components/pages/SpringBootForMicroservices";
import DependencyInjection from "./components/pages/DependencyInjection";
import SpringBootAnnotations from "./components/pages/SpringBootAnnotations";
import InterviewQuestionNav from "./components/InterviewQuestionNav";
import JavaQA from "./components/pages/QuestionAnswerPages/JavaQA";
import ReactQA from "./components/pages/QuestionAnswerPages/ReactQA";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/java" element={<JavaDoc />} />
            <Route path="/spring-boot" element={<SpringBoot />} />
            <Route path="/spring-ICO-container" element={<SpringIOC />} />
            <Route path="/core-javaQA" element={<JavaQA />} />
            <Route path="/reactQA" element={<ReactQA />} />

            <Route
              path="/microservices"
              element={<SpringBootForMicroservices />}
            />
            <Route
              path="/Dependency-Injection"
              element={<DependencyInjection />}
            />

            <Route
              path="/Spring-Annotations"
              element={<SpringBootAnnotations />}
            />
            <Route
              path="/interview-questions"
              element={<InterviewQuestionNav />}
            />
          </Routes>
        </>
      </Router>
      <Footer />
    </>
  );
}

export default App;
