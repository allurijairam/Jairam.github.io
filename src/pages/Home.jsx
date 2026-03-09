import { Link } from "react-router-dom";
import Chat from "../components/Chat";
import "./Home.css";

const TAGLINE =
  "I build intelligent AI systems using machine learning, large language models, and retrieval augmented generation pipelines.";

const SKILLS = [
  "Python",
  "Machine Learning",
  "PyTorch",
  "LangChain",
  "AWS Bedrock",
  "OpenSearch",
  "FastAPI",
  "React",
  "Vector Databases",
  "Retrieval Augmented Generation",
];

const PROJECTS = [
  {
    id: "rag-system",
    title: "Custom RAG System",
    description:
      "Retrieval Augmented Generation system with document ingestion, embeddings, vector search, and LLM-powered answers.",
    technologies: ["Python", "LangChain", "AWS Bedrock", "OpenSearch", "FastAPI"],
    path: "/projects/rag-system",
  },
];

export default function Home() {
  return (
    <>
      {/* Live Demo – Top of page */}
      <section className="section live-demo-section">
        <div className="container">
          <div className="live-demo-header">
            <h2 className="section-title">Live Project / AI Demo</h2>
            <p className="live-demo-subtitle">
              Try the RAG system below or{" "}
              <Link to="/projects/rag-system">view the project page</Link> for details.
            </p>
          </div>
          <Chat />
        </div>
      </section>

      {/* Header – Developer info */}
      <section className="section hero-section">
        <div className="container">
          <h1 className="hero-name">Jairam Alluri</h1>
          <p className="hero-title">AI Engineer | Machine Learning | RAG Systems</p>
          <p className="hero-tagline">"{TAGLINE}"</p>
        </div>
      </section>

      {/* About */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="card about-card">
            <p>
              I focus on building production ML systems, RAG pipelines, and AI tools.
              My work spans document retrieval with vector search, embedding models,
              and large language model integration (including AWS Bedrock and LangChain).
              I enjoy turning research and prototypes into reliable, scalable applications
              that teams can use every day.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <div key={project.id} className="card project-card">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tech">
                  {project.technologies.map((t) => (
                    <span key={t} className="skill-tag skill-tag-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to={project.path} className="btn btn-primary project-card-btn">
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
