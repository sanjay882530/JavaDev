import React from "react";
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
    </div>
  );
};

export default JavaDoc;
