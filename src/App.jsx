import linkedinLogo from "./assets/linkedin-logo.webp";
import gitHubLogo from "./assets/images.png";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="app">
      <h1>Kinan Sliman</h1>
      <h2>Information and Communication Engineer,</h2>
      <h2>Master's in Web Technologies</h2>
      <p>kin.as.sy@gmail.com</p>
      <div className="links">
        <a href="www.linkedin.com/in/kinan-sliman">
          <img src={linkedinLogo} alt="linkedlin logo" />
        </a>
        <a href="www.github.com/KinanSliman">
          <img className="githubLogoimg" src={gitHubLogo} alt="github logo" />
        </a>
      </div>
      <div className="skills">
        <ul>
          <li>HTML</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>React js</li>
          <li>Node js</li>
          <li>MYSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="introductionText">
        <p>
          Over the past year, I dedicated myself to completing my Master's
          thesis. This challenging yet rewarding experience allowed me to tackle
          numerous technical and conceptual problems, and I got a 95% grade and
          high praise from both my supervisor and the thesis committee, which is
          somthing I am very proud of.
        </p>
        <p>
          Developing a full Blockchain from scratch provided an invaluable
          opportunity to deepen my knowledge and explore various concepts and
          technologies. This project involved working with networks, nodes,
          servers, broadcasting, authentication, cryptography, and many other
          cutting-edge technologies and it was fully written with JavaScript.
        </p>
        <p>
          In addition to my thesis, I have worked on several other projects,
          including building websites for various purposes. I have included the
          code and live demos to showcase examples of my work.
        </p>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="educationLevel">
          <h4>Master's degree in web technologies</h4>
          <p>Syrian Virtual University - 2024</p>
        </div>
        <div className="educationLevel">
          <h4>Bachelor's degree in information and communication technology</h4>
          <p>Tartous University - 2020</p>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3># Payment System Using Blockchain</h3>
          <p>
            this is my master thesis project, a blockchain built from scratch to
            provide cyptocurrency and financial services to users
          </p>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>Node js</li>
              <li>MYSQL</li>
              <li>PHP</li>
            </ul>
          </div>
          <p>along with the following technologies:</p>
          <div className="skills">
            <ul>
              <li>Topic-based publish/subscribe</li>
              <li>Libp2p</li>
              <li>Multicast DNS</li>
              <li>SHA-256</li>
              <li>Elliptic Curve Cryptography</li>
              <li>Elliptic Curve Digital Signature Algorithm</li>
            </ul>
          </div>
          <div className="projectLinks">
            <a
              href="https://www.youtube.com/watch?v=8FD0U1Xxr-c"
              target="_blank"
            >
              <p>Video Demo</p>
            </a>
            <a
              href="https://github.com/KinanSliman/payment-system-using-blockchain"
              target="_blank"
            >
              <p>GitHub</p>
            </a>
          </div>
        </div>
        <div className="project">
          <h3># Data Scientist Portfolio</h3>
          <p>
            a portfolio for my brother, to show his skills in data analytics
          </p>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="projectLinks">
            <a href="https://w-sliman.github.io/portfolio/" target="_blank">
              <p>Live Demo</p>
            </a>
            <a href="https://github.com/w-sliman/portfolio" target="_blank">
              <p>GitHub</p>
            </a>
          </div>
        </div>
        <div className="project">
          <h3># Shampoo Ecommerce</h3>
          <p>an online store to sell shampoo products</p>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>React js</li>
              <li>Node js</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="projectLinks">
            <a href="https://shampoo-ecommercee.onrender.com/" target="_blank">
              <p>Live Demo</p>
            </a>
            <a
              href="https://github.com/KinanSliman/Shampoo-Ecommerce"
              target="_blank"
            >
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
export default App;
