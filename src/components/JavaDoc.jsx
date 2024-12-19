import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const JavaDoc = () => {
  const javaCode = `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
  `;
  const objcetAndClass = `class Car {
    String brand;
    String model;
    int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method
    public void startEngine() {
        System.out.println(brand + " " + model + "'s engine started.");
    }
}
`;
  const javamailclass = `public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Innova", 2023);
        Car car2 = new Car("Honda", "City", 2022);

        car1.startEngine(); // Output: Toyota Innova's engine started.
        car2.startEngine(); // Output: Honda City's engine started.
    }
}
`;


  return (
    <div className="m-20 mt-40">
      {/* Header Section */}
      <div>
        <h1 className="text-5xl font-bold">Java Intermediate Course</h1>
        <br />
        <h2 className="text-2xl font-semibold">Java Syntax</h2>
        <p className="mb-4">
          Java is an object-oriented programming language known for its
          simplicity, portability, and robustness. The syntax of the Java
          programming language is closely aligned with C and C++, making it
          easier to understand. Let’s explore the syntax and structure of Java
          programs with a basic “Hello World” program.
        </p>
        <h2 className="text-2xl font-semibold">Structure of a Java Program</h2>
        <p>
          A basic Java program consists of several components that create a
          functional application:
        </p>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border border-gray-300 mt-6">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200 p-4 text-left">
              Java
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-4">
              <div>
                <SyntaxHighlighter language="java" style={dracula}>
                  {javaCode}
                </SyntaxHighlighter>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 className="text-2xl font-bold m-2">
        {" "}
        OOPs Concepts in Java With Examples
      </h1>
      <p>
        {" "}
        Object means a real-world entity such as a mobile, book, table,
        computer, watch, etc. Object-Oriented Programming is a methodology or
        paradigm to design a program using classes and objects. It simplifies
        software development and maintenance by providing some concepts.
      </p>
      <h1 className="text-2xl font-bold m-2">
        Java OOPs (Object-Oriented Programming) Concepts
      </h1>
      <ul className="list-disc px-11">
        <li>Object</li>
        <li>Class</li>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>Abstraction</li>
        <li>Encapsulation</li>
      </ul>
      <img src="oops.jpg" className="container" />

      <h1 className="text-2xl font-bold m-2">1. Object</h1>
      <p>
        {" "}
        Object is a real world entity or it is an instances of class that holds
        state, behavior and identity of that class.
        <br /> Every class has object as a superclass
      </p>
      <p>
        For example: A car is an object that has states such as color, model,
        price and behaviour such as speed, start, gear change, stop etc.
      </p>

      <h1 className="text-2xl font-bold m-2">2. Class</h1>
      <p>
        {" "}
        Class : It is a template or blueprint of an object that describe the
        behavior and state of an object type.
      </p>
      <p>
        In Java, everything is related to classes and objects. Each class has
        its methods and attributes that can be accessed and manipulated through
        the objects.
      </p>
      <p>
        For example, if you want to create a class for students. In that case,
        Student will be a class, and student records (like student1, student2,
        etc) will be objects.
      </p>
      <h1 className="text-2xl font-bold m-2">Below is the Simple program of Classes and Objects:</h1>
      

<table className="w-full border-collapse border border-gray-300 mt-6">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200 p-4 text-left">
            Class: Blueprint for a car.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-4">
              <div>
                <SyntaxHighlighter language="java" style={dracula}>
                  {objcetAndClass}
                </SyntaxHighlighter>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table className="w-full border-collapse border border-gray-300 mt-6">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200 p-4 text-left">
            Object: Specific instances of the Car class.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-4">
              <div>
                <SyntaxHighlighter language="java" style={dracula}>
                  {javamailclass}
                </SyntaxHighlighter>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="font-semibold text-xl"> Output</p>
      <div className="bg-slate-800 text-blue-100 p-6"> Toyota Innova's engine started.
        <br/>Honda City's engine started.
      </div>

    </div>

  );
};

export default JavaDoc;
