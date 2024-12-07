
import{ useState } from "react";
const SpringBootAnnotations = () => {
    const [isCopied, setIsCopied] = useState(false);

    const javaCode = `
   @SpringBootApplication

// Class
public class DemoApplication {

    // Main driver method
    public static void main(String[] args)
    {

        SpringApplication.run(DemoApplication.class, args);
    }
}
  `;
    
  const copyToClipboard = () => {
    navigator.clipboard.writeText(javaCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };
  return (
    <div  className="container ">
          <h1 className='font-bold text-3xl  mt-20'>Spring Boot – Annotations</h1>
          <p className="mt-6">Spring Boot Annotations are a form of metadata that provides data about a spring application.
              Spring Boot is built on the top of the spring and contains all the features of spring.
              And is becoming a favorite of developers these days because of its rapid production-ready environment which enables the
              developers to directly focus on the logic instead of struggling with the configuration and setup.
              Spring Boot is a microservice-based framework and making a production-ready application in it takes very little time.
              Following are some of the features of Spring Boot: </p>
          <ul className="list-decimal  mt-3">
              <li>It allows for avoiding heavy configuration of XML which is present in the spring</li>
              <li>It provides easy maintenance and creation of REST endpoints</li>
              <li>It includes embedded Tomcat-server</li>
              <li>Deployment is very easy, war and jar files can be easily deployed in the Tomcat server</li>
          </ul>
          <p className="mt-6"> Annotations are used to provide supplemental information about a program.
              It does not have a direct effect on the operation of the code they annotate.
              It does not change the action of the compiled program. So in this article,
              we are going to discuss some important Spring Boot Annotations that are available in Spring Boot with examples.</p>
          <h1 className="text-black text-2xl mt-3 font-serif italic "> Spring Boot Annotations</h1>
          <p className=" mt-3"><b>Spring annotations</b> are present in the<b> org.springframework.boot.autoconfigure</b>
              and<b> org.springframework.boot.autoconfigure.condition
              </b>packages are commonly known as Spring Boot annotations.</p>
          <h1>Spring Boot Annotations List</h1>
          <p>Some of the annotations that are available in this category are:</p>
          <ul className="list-decimal  mt-3">
              <li>@SpringBootApplication</li>
              <li>@SpringBootConfiguration</li>
              <li>@EnableAutoConfiguration</li>
              <li>@ComponentScan</li>
              <li>Auto-Configuration Conditions</li>
              <ul className="list-disc  mt-3 px-10">
                  <li>@ConditionalOnClass, and @ConditionalOnMissingClass</li>
                  <li>@ConditionalOnBean, and @ConditionalOnMissingBean</li>
                  <li>@ConditionalOnProperty</li>
                  <li>@ConditionalOnResource</li>
                  <li>@ConditionalOnWebApplication and @ConditionalOnNotWebApplication</li>
                  <li>@ConditionalExpression</li>
                  <li>@Conditional</li>
              </ul>
              <li>@Data</li>
          </ul>

          <h1 className="text-2xl font-semibold mt-8">1. @SpringBootApplication Annotation </h1>
          <p>This annotation is used to mark the main class of a Spring Boot application.
              It encapsulates<b> @SpringBootConfiguration , @EnableAutoConfiguration</b> , and<b> @ComponentScan</b> annotations with their default attributes.</p>
          
              <img src="..\SpringAnnotations.png" alt="Annotatins" className="center-image"/>
              <div className="p-4 bg-gray-100 rounded-md">
      <div className="relative">
        <pre className="p-4 bg-slate-500 text-white rounded-md overflow-auto">
          <code>{javaCode}</code>
        </pre>
        <button
          className="absolute top-2 right-2 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={copyToClipboard}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>



    </div>
  )
}

export default SpringBootAnnotations
