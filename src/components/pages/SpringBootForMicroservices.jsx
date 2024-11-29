
import './SpringBootForMicroservices.css'; // Include CSS file for styling
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Link } from 'react-router-dom';
const SpringBootForMicroservices = () => {
    const xml=`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>`
  return (
    <div className="container">
      <h1 className="title hover:font-serif">Spring Boot For Microservices Development</h1>
      <p className="description">
        Microservices are small, loosely coupled distributed services. Microservices architecture evolved as a solution
        to the scalability, independently deployable, and innovation challenges with Monolithic Architecture.
        It provides us to take a big application and break it into efficiently
        manageable small components with some specified responsibilities.
        It is considered the building block of modern applications.
        Microservices can be written in a variety of programming languages, and frameworks,
        but why Spring Boot is one of the best frameworks for Microservices Development?
      </p>
      <img src="..\microservice.jpg" alt="Microservice" className="center-image"/>
      <p className="description">
        As we know Spring Boot is built on top of the conventional Spring Framework.
        So, it delivers all the features of Spring. Spring Boot is a microservice-based framework
        that makes a production-ready application in very less time.
        In Spring Boot most of the things are auto-configured.
        We just need to use the proper configuration for utilizing a particular functionality.
        Spring Boot is very beneficial if we want to develop
        REST API.
          </p>
          <h1 className="title hover:font-serif"> 7 Major Reasons to Choose Spring Boot for Microservices Development</h1>
          <ul className='list-decimal font-sans text-2xl from-neutral-700 mx-20'>
              <li>Embedded Server</li>
              <li>Support Load Balancer</li>
              <li>Auto Configuration</li>
              <li>Minimal Code using Annotations</li>
              <li>Loose Coupling</li>
              <li>Dependency Management</li>
              <li>Open Source</li>
          </ul>
          <h1 className="font-sans text-2xl font-bold"> 1. Embedded Server</h1>
          <p className="description">In the microservice architecture, there may be hundreds of microservice instances deployed at a given time.
              We would like to automate the development and deployment of microservices to the maximum extent possible.
              An embedded server is implanted as part of the deployable application. If we take the example of Java applications,
              then it would be a JAR. The benefit of it is, we don’t require the server pre-installed in the deployment environment.
              So the first point why you’re choosing Spring Boot is because of the presence of the embedded server. </p>
          <p className="description">Unlike the Spring MVC project where we have to manually add and install the tomcat server,
              Spring Boot comes with an embedded Tomcat server, so that the applications can be hosted on it.
              There are other options also apart from Tomcat. You can also use Jetty for the embedded server.
              If you use Jetty then you have to use an exclusion element in the XML
              configuration file and specify the `dependency` element as follows.</p>
           {/* Table Section */}
      <table className="w-full border-collapse border border-gray-300 mt-6">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200 p-4 text-left">
              XLM
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-4">
              
          <div> <SyntaxHighlighter language="xml" style={dracula}>
                  {xml}
                </SyntaxHighlighter> </div>
            </td>
          </tr>
        </tbody>
      </table>
          <h1 className="font-sans text-2xl font-bold"> 2. Support Load Balancer</h1>
          <p className="description">
              Another major point to choosing Spring Boot for Microservices Development is,
              it supports Load Balancer. In the Microservices application, we need auto-scaling.
              Auto-scaling means that there are lots and lots of loads coming to one particular service
              like some more customers coming in and logging into the application or maybe we are running
              some offer so my products are getting a huge demand and lots of people are purchasing my products.
          </p>
          <h1 className="font-sans text-2xl font-bold"> 3. Auto Configuration</h1>
          <p className="description">
              Let’s say you want to build an application fast because in Microservices you have to build fast.
              For example, if you want some database connectivity there should be some starter dependency that
              is going to help you to configure your Session Factory, Connection Factory, Data Source, and all
              these things. So you don’t have to create those beans and the same goes for the security also.
              In spring boot everything is auto-configured, unlike the Spring MVC Project.
              We just need to use the proper configuration for utilizing a particular functionality.
          </p>
          <h1 className="font-sans text-2xl font-bold"> 4. Minimal Code using Annotations</h1>
          <p className="description">
              Annotations are a form of metadata that provides data about a program. They provide additional information about a program.
              Annotations do not have a direct effect on the operation of the code they annotate and they do not change the action
              of the compiled program. There are plenty of annotations available in Spring Boot that are highly
              useful and they minimize the code.</p>
              <p className="description">
              For example, if we want to use Hibernate(ORM) then we can just add @Table annotation above the model/entity
              class and add @Column annotation to map it to the table and columns in the database.
              So there are many many examples like this. When you start learning Spring Boot you will explore these things.
          </p>
          <h1 className="font-sans text-2xl font-bold"> 5. Loose Coupling</h1>
          <p className="description">
              Spring from the starting days provides us with the two most important features to achieve loose coupling.
              <ul className='list-decimal font-sans text-2xl from-neutral-700 mx-20'>
                   <li><Link  to="/spring-ICO-container" className='underline md:underline-offset-2 font-bold text-blue-500'> Inversion of Control </Link></li>
                  <li><Link  to="/Dependency-Injection" className='underline md:underline-offset-2 font-bold text-blue-500'>Dependency Injection </Link></li>
                  </ul>
          </p>
          <h1 className="font-sans text-2xl font-bold"> 6. Dependency Management</h1>
          <p className="description">
              Dependency Management is just a way of managing all the required dependencies in one place and efficiently
              making use of them. Working with dependency management, Spring-Boot Starters plays an important role here.
              In Spring Boot, there are a lot of starters project which are available like Spring Boot Starter Data JPA,
              Spring Boot Starter Security, etc. There are a lot of different applications which are involved which are gonna
              grab the dependency quickly for you and you don’t have to know to do it and manually go to the Maven repo and have
              to configure the things.
          </p>
          <h1 className="font-sans text-2xl font-bold"> 7. Open Source</h1>
          <p className="description">
              One of the major features of Spring Boot is, it’s open-source, and lots of vendor work on this open-source.
              There are lots and lots of developers working on Spring Boot so you have a very vast knowledge of the developers.
              People are working in Java right now and most of them are familiar with Spring because this is pretty much a popular
              framework. So this is open source and the knowledge is equally balanced between the developer so obviously
              if something happens the developer can communicate with each other and fix the issues.
          </p>
    </div>
  );
};

export default SpringBootForMicroservices;
