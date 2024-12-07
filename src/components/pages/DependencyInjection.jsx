
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
function DependencyInjection() {
    const constructor_Injection=`public class Service {
    private final Repository repository;

    public Service(Repository repository) {
        this.repository = repository;
    }
}
`
     const Setter_Injection=`public class Service {
    private Repository repository;

    public void setRepository(Repository repository) {
        this.repository = repository;
    }
}
`
    const  field_injection =`
@Service
public class Service {
    @Autowired
    private Repository repository;
}
`
  return (
    <div className="container">
      <h1 className="title hover:font-serif mt-24">Dependency Injection</h1>
          <p className="description">
              <b>Dependency Injection</b> is the main functionality provided by Spring IOC(Inversion of Control).
              The Spring-Core module is responsible for injecting dependencies through either<b> Constructor</b> or <b>Setter </b> methods.
              The design principle of Inversion of Control emphasizes keeping the Java classes independent of each other
              and the container frees them from object creation and maintenance. These classes, managed by Spring,
              must adhere to the standard definition of Java-Bean. Dependency Injection in Spring also ensures loose
              coupling between the classes.
          </p>
          <h1 className="title  mt-10">Need for Dependency Injection</h1>
          <p className="description">Dependency Injection (DI) addresses key problems in software development,
              particularly in large, modular applications.
              Here some key points is why DI is important:</p>
          <ul className="text-blue-950 list-decimal font-sans text-1xl from-neutral-700 mx-20 font-semibold">
              <li >Loose Coupling</li>
              <li >Improved Testability</li>
              <li >Better Code Maintainability</li>
              <li >Reusability of Components</li>
              <li > Scalability</li>
              <li >Single Responsibility Principle (SRP)</li>
              <li >Dynamic Behavior</li>
              </ul>
          <h1 className="text-2xl font-semibold mt-24">Types of Dependency Injection</h1>
          <h2 className="font-serif text-1xl font-semibold mt-10">Constructor Injection:</h2>
          <p >Dependencies are provided through a class constructor.</p>
          <p >Ensures that the object is fully initialized with its dependencies at creation.</p>
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
              <div className="bg-slate-700">
                <SyntaxHighlighter language="java" style={ dracula}  >
                  {Setter_Injection}
                </SyntaxHighlighter>
              </div>
            </td>
          </tr>
        </tbody>
          </table>
          
          <h2 className="font-serif text-1xl font-semibold mt-10">Setter Injection:</h2>
          <p >Dependencies are provided via public setter methods.</p>
          <p >Offers flexibility to set dependencies after object creation.</p>
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
                  {constructor_Injection}
                </SyntaxHighlighter>
              </div>
            </td>
          </tr>
        </tbody>
          </table>

          <h2 className="font-serif text-1xl font-semibold mt-10">Field Injection:</h2>
          <p >Dependencies are directly injected into fields using annotations like @Autowired in Spring.</p>
          <p >Simplifies the code but is harder to test and violates encapsulation.</p>
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
                  {field_injection}
                </SyntaxHighlighter>
              </div>
            </td>
          </tr>
        </tbody>
          </table>
          
    </div>
  )
}

export default DependencyInjection
