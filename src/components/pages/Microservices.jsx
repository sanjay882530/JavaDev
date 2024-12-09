import { Link } from "react-router-dom";
import SpringBootForMicroservices from "./SpringBootForMicroservices";

function Microservices() {
  const dependencies = `<dependencies>`;

  return (
    <div className="container ">
      <h1 className="title pt-20 hover:font-serif">
        Introduction of Miscroservices
      </h1>
      <p className=" text-sm">
        Microservices are an architectural approach to developing software
        applications as a collection of small, independent services that
        communicate with each other over a network. Instead of building a
        monolithic application where all the functionality is tightly integrated
        into a single codebase, microservices break down the application into
        smaller, loosely coupled services.
      </p>
      <br />
      <h1 className="title pt-20 hover:font-serif">What are Microservices?</h1>
      <p className="text-sm">
        Microservice is a small, loosely coupled service that is designed to
        perform a specific business function and each microservice can be
        developed, deployed, and scaled independently.
      </p>
      <ul className="list-disc text-sm">
        <li>
          This architecture allow you to take a large monolith application and
          decompose it into small manageable components/services. Also, it is
          considered as the building block of modern applications.
        </li>
        <li>
          Microservices can be written in a variety of programming languages,
          and frameworks, and each service acts as a mini-application on its
          own.
        </li>
      </ul>
      <br />
      <h1 className="title pt-20 hover:font-serif">
        {" "}
        How do Microservices work?
      </h1>
      <p className="text-sm">
        Microservices break complex applications into smaller, independent
        services that work together, enhancing scalability, and maintenance.
        Below is how microservixes work:
      </p>

      <ul className="list-disc text-sm">
        <li>
          Applications are divided into self-contained services, each focused on
          a specific function, simplifying development and maintenance.
        </li>
        <li>
          Each microservice handles a particular business feature, like user
          authentication or product management, allowing for specialized
          development.
        </li>
        <li>
          Services interact via APIs, facilitating standardized information
          exchange and integration.
        </li>
        <li>
          Different technologies can be used for each service, enabling teams to
          select the best tools for their needs.
        </li>
        <li>
          Microservices can be updated independently, reducing risks during
          changes and enhancing system resilience.
        </li>
      </ul>
      <br />

      <h1 className="title pt-20 hover:font-serif">
        What are the main components of Microservices Architecture?
      </h1>
      <p className="text-sm">
        Main components of microservices architecture include:
      </p>

      <ul className="list-disc text-sm">
        <li>
          <b className="text-green-700">
            <u> Microservices:</u>
          </b>{" "}
          Small, loosely coupled services that handle specific business
          functions, each focusing on a distinct capability.
        </li>
        <li>
          <b className="text-green-700">
            <u>API Gateway: </u>
          </b>{" "}
          Acts as a central entry point for external clients also they manage
          requests, authentication and route the requests to the appropriate
          microservice.
        </li>
        <li>
          <b className="text-green-700">
            <u>Service Registry and Discovery:</u>
          </b>{" "}
          Keeps track of the locations and addresses of all microservices,
          enabling them to locate and communicate with each other dynamically.
        </li>
        <li>
          <b className="text-green-700">
            <u>Load Balancer:</u>
          </b>{" "}
          Distributes incoming traffic across multiple service instances and
          prevent any of the microservice from being overwhelmed.
        </li>
        <li>
          <b className="text-green-700">
            <u>Containerization: </u>
          </b>{" "}
          Docker encapsulate microservices and their dependencies and
          orchestration tools like Kubernetes manage their deployment and
          scaling.
        </li>
        <li>
          <b className="text-green-700">
            <u>Event Bus/Message Broker: </u>
          </b>{" "}
          Facilitates communication between microservices, allowing pub/sub
          asynchronous interaction of events between components/microservices.
        </li>
        <li>
          <b className="text-green-700">
            <u>Database per Microservice:</u>
          </b>{" "}
          Each microservice usually has its own database, promoting data
          autonomy and allowing for independent management and scaling.
        </li>
        <li>
          <b className="text-green-700">
            <u>Caching: </u>
          </b>{" "}
          Cache stores frequently accessed data close to the microservice which
          improved performance by reducing the repetitive queries.
        </li>
        <li>
          <b className="text-green-700">
            <u>Fault Tolerance and Resilience Components: </u>
          </b>
          Components like circuit breakers and retry mechanisms ensure that the
          system can handle failures gracefully, maintaining overall
          functionality.
        </li>
      </ul>
      <br />
    </div>
  );
}

export default Microservices;
