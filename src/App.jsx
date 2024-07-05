import linkedinLogo from "./assets/linkedin-logo.webp";
import gitHubLogo from "./assets/images.png";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="app">
      <h1>Kinan Sliman</h1>
      <h2>Frontend developer</h2>
      <p>I build things for the web.</p>
      <p>kin.as.sy@gmail.com</p>
      <div className="links">
        <img src={linkedinLogo} alt="linkedlin logo" />
        <img className="githubLogoimg" src={gitHubLogo} alt="github logo" />
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
          When marimba rhythms start to play Dance with me, make me sway Like a
          lazy ocean hugs the shore Hold me close, sway me more Like a flower
          bending in the breeze Bend with me, sway with ease When we dance, you
          have a way with me Stay with me, sway with me Other dancers may be on
          the floor Dear, but my eyes will see only you Only you have that magic
          technique When we sway, I go weak I can hear the sounds of violins
          Long before it begins Make me thrill as only you know how Sway me
          smooth, sway me now
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
            <a href="https://www.youtube.com/watch?v=8FD0U1Xxr-c">
              <p>Video Demo</p>
            </a>
            <a href="https://github.com/KinanSliman/payment-system-using-blockchain">
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
            <a href="https://w-sliman.github.io/portfolio/">
              <p>Live Demo</p>
            </a>
            <a href="https://github.com/w-sliman/portfolio">
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
            <a href="https://shampoo-ecommercee.onrender.com/">
              <p>Live Demo</p>
            </a>
            <a href="https://github.com/KinanSliman/Shampoo-Ecommerce">
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
