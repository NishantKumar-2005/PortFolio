import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/NishantKumar-2005/ASP-Dotnet-Projects" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://tracking-app-ecru.vercel.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
                 </div>
            </header>
            <div className="body">
              <h3>Real-Time Location Tracking Using SignalR</h3>
              <p> This project enables real-time location tracking for devices within a group. It allows devices to connect and share their locations with others in the group, ensuring that all connected devices can view the locations of every member, regardless of when they joined.</p>
            </div>
            <footer> <ul className="tech-list"> <li>.Net</li> <li>SignalR</li> <li>OpenMap</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/NishantKumar-2005/ASP-Dotnet-Projects" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                  <a href="https://chat-app-react-theta-peach.vercel.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real Time Group Chat App with No DATABASE</h3>
              <p>
              TempChatAPP is a lightweight, temporary chat application built with ASP.NET Web API and SignalR that enables users to form groups and exchange messages in real time without the need for a database.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.Net</li>
                <li>SignalR</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/NishantKumar-2005/SX" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Port Scanner</h3>
              <p>
              Port Scanner is a tool designed to scan and identify open ports on a networked system, providing insights into the services and vulnerabilities associated with these ports. It is commonly used for network diagnostics, security auditing, and penetration testing.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nmap</li>
                <li>Flask</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/NishantKumar-2005/EcommerceBackend" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ecommerce Backend</h3>
              <p>The E-commerce Backend is a robust and scalable system designed to handle the core functionalities of an online shopping platform. It serves as the backbone for managing products, users, orders, payments, and more.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>ExpressJs</li>
                <li>MongoDb</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/NishantKumar-2005/RabbitMQDemo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>RabbitMQ Implementation</h3>
              <p>Developed a RabbitMQ-based messaging system enabling efficient communication between microservices, ensuring reliability, scalability, and real-time data processing</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET</li>
                <li>Docker</li>
                <li>RabbitMQ</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}