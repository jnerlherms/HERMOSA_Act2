import "./App.css";
import profile from "./assets/profile.png";

const info = {
  siteName: "jnerlherms",
  firstName: "Jon Erlo",
  lastName: "Hermosa",
  greeting: "Hello, I'm",
  roleSmall: "CIT-U",
  roleBig: "BSIT 3rd Year",
  roleBig2: "Student",
  about:
      "I am a 3rd year IT student at CIT-U who loves building websites. " +
      "I work with HTML, CSS, JavaScript, PHP, MySQL, Java, C, and now React.",
  email: "jnerlherms@gmail.com",
  github: "https://github.com/jnerlherms",
  instagram: "https://www.instagram.com/big_joot/",
  facebook: "https://www.facebook.com/jonerlo.hermosa",
  resume: "#",
};

const projects = [
  {
    id: 1,
    title: "Sanina'an",
    desc: "A Cebuano-themed thrift marketplace web app.",
    tech: "PHP · MySQL",
    link: "https://github.com/jnerlherms/Sanina-an",
  },
  {
    id: 2,
    title: "AlphonseTronics App",
    desc: "A mobile app made for my Mobile Development class.",
    tech: "Kotlin",
    link: "https://github.com/jnerlherms/AlphonseTronics-App",
  },
  {
    id: 3,
    title: "Blood of the Rift",
    desc: "A terminal-based game that runs in the console.",
    tech: "Java",
    link: "https://github.com/jnerlherms/BLOOD-OF-THE-RIFT-TERMINAL-BASED-",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "Java", "Kotlin", "C", "C++"];

export default function App() {
  return (
      <div className="page">
        <nav className="navbar">
          <a href="#home" className="logo">{info.siteName}</a>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <header className="hero" id="home">
          <div className="hero-left">
            <p className="hello">{info.greeting}</p>
            <h1>
              {info.firstName}
              <br />
              {info.lastName}
            </h1>
          </div>

          <div className="hero-photo">
            <div className="glow" />
            <img src={profile} alt="Portrait of Erlo Hermosa" />
          </div>

          <div className="hero-right">
            <p className="hello">{info.roleSmall}</p>
            <h2>
              <span className="purple">{info.roleBig}</span>
              <br />
              {info.roleBig2}
            </h2>
          </div>

          <div className="socials">
            <a href={info.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={info.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={info.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>


        </header>

        <section className="section" id="about">
          <h3>About Me</h3>
          <p className="about-text">{info.about}</p>
          <div className="skills">
            {skills.map((s) => (
                <span key={s}>{s}</span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h3>Projects</h3>
          <div className="project-list">
            {projects.map((p) => (
                <a key={p.id} className="project" href={p.link} target="_blank" rel="noreferrer">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <small>{p.tech}</small>
                </a>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <h3>Contact</h3>
          <a className="mail" href={`mailto:${info.email}`}>{info.email}</a>
        </section>

        <footer>© 2026 @jnerlherms</footer>
      </div>
  );
}