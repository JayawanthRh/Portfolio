import React from "react";
import UnccImg from "../../assets/IBM.png";
import NcrImg from "../../assets/zestmoney.png";
import RandstadImg from "../../assets/Kyndryl.png"
import TMobile from "../../assets/T-Mobile.png"

const Companies = () => {
  return (
    <>


<div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Jan 2024 - Present</p>
            <h3 className="experience__title">Software Engineer – Backend & Application Modernization</h3>
          </div>
          <div className="experience__image">
            <img src={TMobile} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
          ● Contributed across the full SDLC for Best Buy’s Customer Financing & Payments Platform, supporting flexible
installment purchase options for electronics, appliances, and subscription services.  <br/>
          ● Developed the Financing Restructuring module using Spring Boot, Spring IoC, Java Streams, and multithreading
to process high-volume EMI schedules and customer purchase financing data in real time.  <br/>
          ● Built REST and GraphQL APIs to power eligibility checks, monthly payment previews, and downloadable payment
schedules, enabling a smoother checkout and post-purchase experience for customers.  <br/>
          ● Created Angular front-end components for financing calculators, payment history filtering, and account
management dashboards, improving self-service adoption and reducing call center queries.<br/>
          ● Designed Angular modules for Financing, Customer Profile, and Orders, integrating D3.js visualizations to provide
customers with interactive charts of payment schedules, outstanding balances, and purchase history. <br/>
          ● Integrated real-time notifications using WebSocket + STOMP with RxJS Observables to alert customers instantly
on payment updates, financing approvals, or promotional offers. <br/>
          ● Delivered reactive APIs with Spring WebFlux for non-blocking processing of high-traffic financing requests during
holiday sales events, ensuring scalability and uptime. <br/>
          ● Implemented robust security measures by integrating OAuth with JWT authentication, enabling role-to-scope
mapping, refresh token handling, token blacklisting, and BCrypt encryption to protect sensitive customer data.<br/>
          ● Implemented a multi-step asynchronous workflow using Kafka and Spring State Machines to handle financing
approvals involving third-party credit checks, fraud detection, and payment plan generation.<br/>
          ● Modernized legacy integrations by wrapping older SOAP-based credit score services into REST APIs, enabling
seamless orchestration without disrupting downstream compliance checks.<br/>
          ● Managed AWS RDS (PostgreSQL) databases for financing and payments services, optimizing indexing and queries
to handle thousands of daily transactions with low latency.<br/>
        </p>
        </div>
      </div>


<div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Jan 2023 - Dec 2023</p>
            <h3 className="experience__title">Software Engineer – Backend & Application Modernization</h3>
          </div>
          <div className="experience__image">
            <img src={RandstadImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
          ● Spearheaded modernization of legacy monoliths by designing and deploying microservices using Spring Boot and
GraphQL, improving maintainability and reducing API payload size by 40%.  <br/>
          ● Implemented GraphQL APIs to enable efficient data querying and reduce payload size, enhancing client
responsiveness and developer flexibility.  <br/>
          ● Led efforts in legacy application migration to cloud-native architectures, using containerization and service-based
designs to modernize functionality and improve maintainability.  <br/>
          ● Integrated with Kafka for asynchronous event-driven processing, enhancing throughput and system responsiveness
in high-volume environments.<br/>
          ●Applied JPA/Hibernate and SQL/NoSQL databases for efficient data modeling, transaction management, and
optimized query performance. <br/>
          ●Supported cloud enablement and performance tuning efforts, ensuring high availability, secure deployments, and
optimal resource utilization across environments. <br/>
          ● Collaborated with architects and cross-functional teams to define technical roadmaps, implement design patterns,
and support CI/CD pipelines for streamlined delivery. <br/>
          </p>
        </div>
      </div>

      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Feb 2021 - Jan 2023</p>
            <h3 className="experience__title">Software Engineer – Backend Development</h3>
          </div>
          <div className="experience__image">
            <img src={UnccImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
          ● Contributed to the development and enhancement of IBM Spectrum LSF, a high-performance workload
management platform used to schedule and manage distributed computing jobs in hybrid cloud environments.  <br/>
          ● Designed and maintained microservices-based backend systems using Spring Boot, enabling modular, scalable
support for complex job orchestration and cluster scheduling.  <br/>
          ● Built RESTful APIs for job submission, tracking, and resource allocation, ensuring secure and efficient
communication between LSF components and external applications. Improved provisioning speed by 40%, reduced debugging time by 50%.  <br/>
          ● Developed backend logic to interface with IBM Cloud resources, automating instance provisioning, configuration,
and workload distribution across clusters.  <br/>
          ● Worked on cloud-native integrations including containerization support (Docker) and service deployment on IBM
Cloud’s infrastructure, focusing on availability and system resilience.  <br/>
          ● Implemented internal tooling for job lifecycle monitoring, log aggregation, and fault tolerance, helping improve
operational efficiency and debugging turnaround times. <br/>
          ● Collaborated closely with QA and DevOps teams to support CI/CD pipelines, unit testing, and performance
benchmarking for backend systems under heavy compute loads. <br/>
          </p>
        </div>
      </div>

      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> Nov 2020 - Feb 2021</p>
            <h3 className="experience__title">Software Engineer</h3>
          </div>
          <div className="experience__image">
            <img src={NcrImg} alt="Experience Image" />
          </div>
        </div>
        <div className="experience__box">
          <p>
          ● Engineered scalable and secure RESTful APIs using Spring Boot, powering critical backend services for the
ZestMoney EMI platform across payments, user onboarding, and transaction workflows.  <br/>
          ● Designed and optimized relational database schemas (MySQL/PostgreSQL), ensuring data integrity, query
performance, and effective indexing for large-scale user and transaction datasets.  <br/>
          ● Built and consumed GraphQL APIs to enable flexible client-side queries and reduce over-fetching of data,
improving API efficiency and front-end performance.  <br/>
          ● Integrated multiple third-party services, including payment gateways, KYC/identity providers, and notification
platforms, ensuring seamless data exchange and secure communication across systems.  <br/>
          ● Deployed backend services on AWS cloud, leveraging EC2, S3, RDS, and API Gateway, with a focus on high
availability, cost optimization, and auto-scaling.  <br/>
          ● Contributed to internal microservices frameworks adhering to ZEST compliance standards, standardizing logging,
error handling, and authentication across services.  <br/> 
          </p>
        </div>
      </div>

      {/* <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> May 2019 - July 2019</p>
            <h3 className="experience__title">Software Engineer Intern</h3>
          </div>
          <div className="experience__image">
            <img src={VirtusaImg} alt="Experience Image" />
          </div>
        </div> */}

        {/* <div className="experience__box">
          <p>
            ● Created a coding platform using ReactJS, NodeJS, and MySQL, with
            custom IDEs and integrated compilers, engaging over 500 users and
            fostering skill development and collaboration.
            <br />
            ● Curated a dashboard to categorize 100+ coding problems, monitored
            KPIs, and enhanced user access to focused practice exercises.
            <br />
            ● Designed custom IDEs to streamline development and accommodate
            diverse language needs.
            <br />
            ● Developed comprehensive coding performance analytics
            utilizing MDB Bootstrap Charts to facilitate data-driven
            decision-making.
          </p>
        </div>
      </div> */}

      {/* <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> February 2019 - May 2019</p>
            <h3 className="experience__title">Software Engineer Intern</h3>
          </div>
          <div className="experience__image">
            <img src={AmazonImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Designed a PHP school management web application with MySQL
            integration. Customized user-specific modules ensuring tailored
            interfaces and efficient operations.
            <br />
            ● Built a login authentication system utilizing session management,
            enhancing application security.
            <br />
            ● Deployed a notifications message box to promptly communicate
            important updates, enhancing user engagement and satisfaction.
            <br />● Designed a QR code-based attendance system, reducing
            lecturer workload by 70% and streamlining administrative processes.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Companies;
