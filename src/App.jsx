import profile from "./assets/profile.png";
import { useState, useEffect } from "react";

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
  const [filter, setFilter] = useState("All");
  const filters = ["All", "PHP", "MySQL", "Java", "Kotlin"];
  const shown = projects.filter(
      (p) => filter === "All" || p.tech.split(" · ").includes(filter)
  );

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <div className="mx-auto max-w-[1400px] px-8">
        {/* ---------- NAVBAR ---------- */}
        <nav className="flex items-center justify-between py-8 font-display text-[0.8rem] font-semibold">
          <a href="#home">{info.siteName}</a>
          <ul className="flex list-none gap-5 md:gap-12">
            <li><a className="hover:text-accent" href="#about">About Me</a></li>
            <li><a className="hover:text-accent" href="#projects">Projects</a></li>
            <li><a className="hover:text-accent" href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* ---------- HERO ---------- */}
        <header
            id="home"
            className="relative grid grid-cols-1 items-end gap-8 overflow-hidden text-center md:grid-cols-[1fr_auto_1fr] md:text-left after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[2] after:h-[30%] after:bg-gradient-to-t after:from-bg after:to-transparent after:content-['']"
        >
          <div className="self-center justify-self-center md:justify-self-end">
            <p className="mb-[0.4rem] font-display text-[1.05rem] text-accent">{info.greeting}</p>
            <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-[1.05]">
              {info.firstName}
              <br />
              {info.lastName}
            </h1>
          </div>

          <div className="relative order-first mx-auto flex max-w-[560px] justify-center self-end md:order-none md:mx-0 md:max-w-none">
            <div className="absolute -bottom-1/4 -left-[15%] aspect-square w-[130%] bg-[radial-gradient(circle,rgba(192,57,79,0.95)_0%,rgba(128,24,48,0.6)_35%,transparent_68%)] blur-[40px]" />
            <img
                src={profile}
                alt="Portrait of Jon Erlo Hermosa"
                className="relative z-[1] h-auto w-full max-w-full object-contain md:h-[min(88vh,800px)] md:w-auto [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_bottom,#000_35%,transparent_90%),linear-gradient(to_right,transparent_0%,#000_32%,#000_68%,transparent_100%)] [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,#000_35%,transparent_90%),linear-gradient(to_right,transparent_0%,#000_32%,#000_68%,transparent_100%)]"
            />
          </div>

          <div className="self-center justify-self-center md:justify-self-start">
            <p className="mb-[0.4rem] font-display text-[1.05rem] text-accent">{info.roleSmall}</p>
            <h2 className="font-display text-[clamp(1.4rem,2.6vw,2.2rem)] font-extrabold leading-[1.05]">
              <span className="text-accent">{info.roleBig}</span>
              <br />
              {info.roleBig2}
            </h2>
          </div>

          <div className="z-[3] flex justify-center gap-4 text-sm text-muted md:absolute md:bottom-6 md:left-0 md:flex-col md:justify-start">
            <a className="hover:text-accent" href={info.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a className="hover:text-accent" href={info.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-accent" href={info.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </header>

        {/* ---------- ABOUT ---------- */}
        <section className="max-w-3xl pb-8 pt-20" id="about">
          <h3 className="mb-5 font-display text-3xl">About Me</h3>
          <p className="max-w-[60ch] text-[1.05rem] leading-relaxed text-muted">{info.about}</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {skills.map((s) => (
                <span key={s} className="rounded-full border border-accent-soft px-[0.9rem] py-[0.4rem] text-sm">
              {s}
            </span>
            ))}
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section className="max-w-3xl pb-8 pt-20" id="projects">
          <h3 className="mb-5 font-display text-3xl">Projects</h3>
          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border border-accent-soft px-4 py-1.5 text-sm transition-colors ${
                        filter === f ? "bg-accent text-ink" : "text-muted hover:text-ink"
                    }`}
                >
                  {f}
                </button>
            ))}
          </div>
          <div className="grid gap-4">
            {shown.map((p) => (
                <a
                    key={p.id}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block border-t border-line py-[1.4rem] transition-[padding] duration-200 hover:pl-4 motion-reduce:transition-none"
                >
                  <h4 className="mb-[0.4rem] font-display text-[1.1rem]">{p.title}</h4>
                  <p className="text-muted">{p.desc}</p>
                  <small className="text-accent">{p.tech}</small>
                </a>
            ))}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section className="max-w-3xl pb-8 pt-20" id="contact">
          <h3 className="mb-5 font-display text-3xl">Contact</h3>
          <a className="inline-block border-b border-accent font-display text-accent" href={`mailto:${info.email}`}>
            {info.email}
          </a>
        </section>

        {/* ---------- BACK TO TOP BUTTON ---------- */}
        {showTop && (
            <a
                href="#home"
                className="fixed bottom-6 right-6 z-10 rounded-full bg-accent px-4 py-3 font-display text-xs text-ink hover:opacity-80"
            >
              ↑ Top
            </a>
        )}

        <footer className="pb-8 pt-16 text-center text-sm text-muted">© 2026 @jnerlherms</footer>
      </div>
  );
}