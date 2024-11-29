
import './SpringIOC.css';
const SpringIOC = () => {
  return (
       <div className="container">
      <h1 className="mt-14 hover:font-serif text-3xl">Spring Boot For Microservices Development</h1>
          <p className="description">
          Spring IoC, Spring Bean Example Tutorial
          </p>
          <h2 className="mt-2 text-3xl  font-semibold ">
              Spirng IoC</h2>
          <p className="description">
              Spring IoC is the mechanism to achieve loose-coupling between Objects dependencies.
              To achieve loose coupling and dynamic binding of the objects at runtime, objects dependencies are
              injected by other assembler objects. Spring IoC container is the program that injects dependencies
              into an object and make it ready for our use. We have already looked how we can use Spring Dependency
              Injection to implement IoC in our applications. Spring IoC container classes are part of org.springframework.
              beans and org.springframework.context packages. Spring IoC container provides us different ways to decouple
              the object dependencies. BeanFactory is the root interface of Spring IoC container. ApplicationContext
              is the child interface of BeanFactory interface that provide Spring AOP features, i18n etc. Some of the
              useful child-interfaces of ApplicationContext are ConfigurableApplicationContext and WebApplicationContext.
              Spring Framework provides a number of useful ApplicationContext implementation classes that we can use to get
              the spring context and then the Spring Bean. Some of the useful ApplicationContext implementations that we use are;
          </p>
          <ul className='list-disc px-10'>
              <li><b> AnnotationConfigApplicationContext: </b>If we are using Spring in standalone java applications and using annotations
                  for Configuration, then we can use this to initialize the container and get the bean objects.</li>
              <li><b> ClassPathXmlApplicationContext:</b> If we have spring bean configuration xml file in standalone application,
                  then we can use this class to load the file and get the container object.</li>
                  <li><b>FileSystemXmlApplicationContext:</b> This is similar to ClassPathXmlApplicationContext except that the xml
                      configuration file can be loaded from anywhere in the file system.</li>
              <li><b> AnnotationConfigWebApplicationContext</b> and XmlWebApplicationContext for web applications.</li>
          </ul>
          <br/>
          <p className="description"> Spring IOC can be used in many ways like Managing object creation and maintaining the complete object life cycle,
              dependency resolution, assembling application components, enhancing modularity, and encouraging loosely coupled
              application so, these are some of the major usages of Spring IOC.</p>
          
          <img src="springIOC.png" alt="student learing" className='mt-5 rounded-2xl' />
          <span className='p-44 font-serif text-red-600'> Figure:   Spring IOC Container</span>
          <h1 className="mt-14 text-1xl hover:font-serif text-3xl font-semibold"> Spring Bean</h1>
          <p className="description">
              Spring Bean is nothing special, any object in the Spring framework that we initialize through Spring container
              is called Spring Bean. Any normal Java POJO class can be a Spring Bean if it’s configured to be initialized via
              container by providing configuration metadata information.
              
          </p>
          <h1 className=" text-1xl hover:font-serif text-3xl font-semibold">Spring Bean Scopes</h1>
          <p className="description">There are five scopes defined for Spring Beans.</p>
          <ul className='list-disc px-10'>
              <li><b> singleton - </b>Only one instance of the bean will be created for each container.
                  This is the default scope for the spring beans. While using this scope, make sure bean doesn’t
                  have shared instance variables otherwise it might lead to data inconsistency issues.</li>
              <li><b> prototype -</b>  A new instance will be created every time the bean is requested.</li>
              <li><b>Frequest - </b> This is same as prototype scope, however it’s meant to be used for web applications.
                  A new instance of the bean will be created for each HTTP request.</li>
              <li><b> session -</b>  A new bean will be created for each HTTP session by the container.</li>
              <li><b> global-session -</b> This is used to create global session beans for Portlet applications.</li>
          </ul>
    </div>
  )
}

export default SpringIOC
