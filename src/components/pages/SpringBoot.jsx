
import SpringBootForMicroservices from './SpringBootForMicroservices';

function SpringBoot() {
    const dependencies = `<dependencies>`;
    
    
    
  return (
    <div className="container ">
         
                 
                  <h1 className="title pt-20 hover:font-serif">Spring Boot Tutorial </h1>
              <p className="description">Spring Boot is a Java framework that makes it easier to create and run Java applications.
                  It simplifies the configuration and setup process, allowing developers to focus more on writing
                  code for their applications.</p>
              <br/>
              <h2 className="title"><b>What is Spring Boot?</b></h2>
              <p className="description" ><b>Spring Boot</b> is an open-source Java framework used to create a Micro Service. Spring boot is developed by Pivotal Team,
                  and it provides a faster way to set up and an easier, configure, and run both simple and web-based applications.
                  It is a combination of Spring Framework and Embedded Servers. The main goal of Spring Boot is to reduce development, unit test,
                  and integration test time and in Spring Boot, there is no requirement for XML configuration.</p>
              <br/>
              <br/>
              <h1 className="title hover:font-serif">Prerequisite of Spring Boot</h1>
              <ul className='list-disc'>
             <li> Understanding of Java syntax and core concepts such as classes, objects, inheritance, interfaces, and exception handling
             xBasic understanding of the Spring framework</li>
             <li>Knowledge of Web Technologies</li>
             <li>Familiarity with build tools such as Maven or Gradle</li>
              </ul>
              <br/>
              <br/>
              <h1 className=' text-3xl'> Introduction to Spring Boot</h1>
              <p className="description">Spring is widely used for creating scalable applications. For web applications Spring provides
                  Spring MVC which is a widely used module of spring which is used to create scalable web applications. But main</p>
              <p className="description font-bold">disadvantage of spring projects is that configuration is really time-consuming and can be a bit overwhelming
                  for the new developers.</p>
              <p>Making the application production-ready takes some time if you are new to the spring. Solution to this is</p>
              <p className="description text-2xl">Spring Boot</p>
              <p className='px-4'>Spring Boot is built on the top of the spring and contains all the features of spring. And is becoming favourite of developer’s these days because of it’s a rapid production-ready environment which enables the developers to directly focus on the logic instead of struggling with the configuration and set up. Spring Boot is a microservice-based framework and making a production-ready application in it takes very less time.
                  Prerequisite for Spring Boot is the basic knowledge Spring framework. For revising the concepts of spring framework</p>

              <h1 className="title">Spring Boot – Starters</h1>
              <p>Before Spring Boot was introduced, Spring Developers used to spend a lot of time on Dependency management.
                  Spring Boot Starters were introduced to solve this problem so that the developers can spend more time on
                  actual code than Dependencies.
                  Spring Boot Starters are dependency descriptors that can be added under the
                 <b> {dependencies} </b>section in pom.xml.
                  There are around 50+ Spring Boot Starters for different Spring and related technologies. These starters give all the dependencies under a single name.
                  </p>
<p> <b> For example,</b> if you want to use Spring Data JPA for database access, you can include spring-boot-starter-data-jpa dependency. </p>
        <br/>  
              <h4 className=' text-1xl'> <b> Advantages of Spring Boot-Staters </b></h4> 
              <br/> 
              <span>The advantages of using Starters are as mentioned below:</span>
              <ul className='list-disc'>
                  
                  <li>Increase productivity by decreasing the Configuration time for developers.</li>
                  <li>Managing the POM is easier since the number of dependencies to be added is decreased.</li>
                  <li>Tested, Production-ready, and supported dependency configurations.</li>
                  <li>No need to remember the name and version of the dependencies.</li>
                      </ul>
                  
          <SpringBootForMicroservices/>
    </div>
  )
}

export default SpringBoot
