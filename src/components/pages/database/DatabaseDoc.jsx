

const DatabaseDoc = () => {
    
  return (
    <div  className="container ">
          <h1 className='font-bold text-3xl  mt-20'>What is Database?</h1>
          <p className="mt-6">A database is an organized collection of data stored in a computer system and usually controlled by a database management system (DBMS).
              The data in common databases is modeled in tables, making querying and processing efficient.
              Structured query language (SQL) is commonly used for data querying and writing. </p>
          
          <p className="mt-6"> The Database is an essential part of our life. We encounter several activities
              that involve our interaction with databases, for example in the bank, in the railway station,
              in school, in a grocery store, etc.
              These are the instances where we need to store a large amount of data in one place and fetch these data easily. </p>
          <h1 className="text-black text-2xl mt-3 font-serif italic "> What is Data?</h1>
          <p className=" mt-3">Data is statically raw and unprocessed information.
              For example – name, class, marks, etc. In computer language, a piece of information that can
              be translated into a form for efficient movement and processing is called data.
              Data is interchangeable information.</p>
          <h1>What is a Database?</h1>
          <p>A database is a collection of data that is organized, which is also called structured data.
              It can be accessed or stored in a computer system. It can be managed through a Database Management System (DBMS),
              a software used to manage data. Database refers to related data in a structured form.</p>
          <p><b>Application:</b> Company Information, Account information, manufacturing, banking, finance transactions, telecommunications.</p>
          <ul className="list-decimal  mt-3">
              <li>Relational Database:
                  <p>A relational database is made up of a set of tables with data that fits into a predefined category.</p>
              </li>
              <li>Distributed Database:
                  <p>A distributed database is a database in which portions of the database are stored in multiple physical locations,
                      and in which processing is dispersed or replicated among different points in a network. </p>
              </li>
              <li>Cloud Database:
                  <p>A cloud database is a database that typically runs on a cloud computing platform. Database service provides access to the database.
                      Database services make the underlying software stack transparent to the user.</p>
              </li>
          </ul>

          <p>These interactions are examples of a traditional database where data is of one type-that is textual. In advancement of technology has led to new applications of database systems.
              New media technology has made it possible to store images, video clips.
              These essential features are making multimedia databases.</p>
          <p>Nowadays, people are becoming smart – before taking any decisions they analyze facts and figures related to it, which come from these databases.
              As the databases have made it easier to manage information, we are able to catch criminals and do deep research.</p>
          <h1>Evolution of Databases</h1>
          <h2>File-Based</h2>
          <p>With the advent of databases in the early 1960s, they have undergone a significant evolution.
              The first systems used to store and edit data were navigational databases, such as the hierarchical database
              (which depended on a tree-like architecture and perFile-Based databases were first developed in 1968.
              Data in file-based databases was kept in flat files. Files provide a lot of benefits, but they also have some drawbacks.</p>
          <p>The file system’s several access techniques, such as sequential, indexed, and random, are among its main advantages.</p>
          <p>It calls for a lot of third-generation language programming, such BASIC or COBOL.</p>
          <h2>Hierarchical Data Model</h2>
          <p>The period of the Hierarchical Database was 1968–1980. IBM’s first DBMS was a prominent hierarchical database paradigm.
              The information management system, or IMS, was the name of it.</p>
          <h2>Network Data Model</h2>
          <p>Network data model Charles Bachman created the Integrated Data Store (IDS), Honeywell’s first database management system. Although it was created in the early 1960s,
              the Conference on Data Systems Languages, or CODASYL, standardised it in 1971.</p>
          <h2>Relational Database</h2>
          <p>Relational databases gained popularity in the 1980s, and object-oriented databases in the 1990s. NoSQL databases emerged more recently in response to the internet’s rapid expansion and the demand for unstructured data processing at a faster rate. These days,
              self-driving databases and cloud databases are revolutionizing
              the ways in which data is gathered, stored, handled, and used.</p>
          <h1>Types of Databases</h1>
          <p>There are many types of databases.</p>
          <ul className="list-decimal  mt-3">
              <li><b>Relational Database:</b>
                  <p>A relational database’s contents are arranged as a collection of tables with rows and columns.
                      Accessing structured data is made most flexible and efficient by relational database technology.</p>
              </li>
              <li><b>Object-Oriented Databases: </b>
                  <p>Similar to object-oriented programming, data in an object-oriented database is represented as objects.</p>
              </li>
              <li><b>Distributed Databases:</b>
                  <p>A distributed database is made up of two or more files that are spread across multiple locations.
                      The database could be dispersed across many networks, housed in one physical place, or kept on several computers.</p>
              </li>
              <li><b>Data Warehouses:</b>
                  <p>A data warehouse is a sort of database created especially for quick query and analysis.
                      It is a central repository for data.</p>
              </li>
              <li><b>NoSQL Databases: </b>
                  <p>Unlike relational databases, which specify how all data input must be formatted, NoSQL, or nonrelational databases,
                      permit the storing and manipulation of unstructured and semistructured data.
                      The prevalence and complexity of online applications led to the rise in popularity of NoSQL databases.</p>
              </li>
              <li><b>Graph Databases: </b>
                  <p>Data is stored in a graph database using entities and their relationships.
                  OLTP Database: An OLTP database is a quick, analytical database made to handle lots of transactions from several users at once.</p>
              </li>
              <li><b>Open source databases:</b>
                  <p>A database system that is open source can have either a SQL or NoSQL database as its source code.</p>
              </li>
              <li><b>Cloud databases:</b>
                  <p>A collection of organized or unorganized data that is housed on a private, public,
                      or hybrid cloud computing platform is known as a cloud database. Cloud database models come in two flavors:
                      traditional and database as a service (DBaaS).
                      With DBaaS, a service provider handles maintenance and administrative duties.</p>
              </li>
          </ul>
    </div>



    
  )
}

export default DatabaseDoc
