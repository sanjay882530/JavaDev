import React from 'react'

function SpringBoot() {
  return (
      <div className='boot mt-44'>
          <div className='m-10 mr-20'>
              <h1 className=' text-3xl font-bold'>Spring Boot Tutorial </h1>
              <p className=''>Spring Boot is a Java framework that makes it easier to create and run Java applications.
                  It simplifies the configuration and setup process, allowing developers to focus more on writing
                  code for their applications.</p>
              <br/>
              <h2 className='text-1xl'><b>What is Spring Boot?</b></h2>
              <p ><b>Spring Boot</b> is an open-source Java framework used to create a Micro Service. Spring boot is developed by Pivotal Team,
                  and it provides a faster way to set up and an easier, configure, and run both simple and web-based applications.
                  It is a combination of Spring Framework and Embedded Servers. The main goal of Spring Boot is to reduce development, unit test,
                  and integration test time and in Spring Boot, there is no requirement for XML configuration.</p>
              <br/>
              <br/>
              <h1 className=' text-2xl text-zinc-600 font-bold'>Prerequisite of Spring Boot</h1>
              <ul className='list-disc'>
             <li> Understanding of Java syntax and core concepts such as classes, objects, inheritance, interfaces, and exception handling
             xBasic understanding of the Spring framework</li>
             <li>Knowledge of Web Technologies</li>
             <li>Familiarity with build tools such as Maven or Gradle</li>
              </ul>
              <br/>
              <br/>
              <h1 className=' text-3xl'> Introduction to Spring Boot</h1>
              <p >Spring is widely used for creating scalable applications. For web applications Spring provides
                  Spring MVC which is a widely used module of spring which is used to create scalable web applications. But main</p>
              <p className='font-bold'>disadvantage of spring projects is that configuration is really time-consuming and can be a bit overwhelming
                  for the new developers.</p>
              <p>Making the application production-ready takes some time if you are new to the spring. Solution to this is</p>
              <p className=' text-2xl'>Spring Boot</p>
              <p className='px-4'>Spring Boot is built on the top of the spring and contains all the features of spring. And is becoming favourite of developer’s these days because of it’s a rapid production-ready environment which enables the developers to directly focus on the logic instead of struggling with the configuration and set up. Spring Boot is a microservice-based framework and making a production-ready application in it takes very less time.
                  Prerequisite for Spring Boot is the basic knowledge Spring framework. For revising the concepts of spring framework</p>
          </div>
      
    </div>
  )
}

export default SpringBoot
