import Chat from "../components/Chat";
import "./Home.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/jairam-alluri-23a624172/";
const GITHUB_URL = "https://github.com/allurijairam/rag_lamda_app";
const GPT2_MEDIUM_URL = "https://medium.com/@allurijairam/gpt-2-from-scratch-40efde46db2d";
const RAG_EVAL_MEDIUM_URL =
  "https://allurijairam.medium.com/building-a-baseline-rag-evaluation-framework-and-why-you-should-have-one-d05528e59cdb?postPublishedType=initial";

const ABOUT_ME =
  "I'm a Machine Learning Engineer with 4+ years of experience across computer vision, NLP, and LLMs. At Honeywell, I cut cloud costs by 80% and sped up processing by 10x, work that's now a pending USPTO patent. On the side, I built a GPT-2 model from scratch in PyTorch and shipped a production RAG pipeline on AWS Bedrock. What drives me is taking research ideas and turning them into systems that hold up in the real world.";

const LIVE_DEMO_FEATURES = [
  "Multi-query & RAG fusion (custom implementation): I coded the system to automatically generate follow-up queries from the original question and retrieve/rank relevant documents using RAG fusion, producing more accurate, coherent, and context-aware answers.",
  "Session memory: I implemented caching to store uploaded PDFs, user queries, and retrieval results for the duration of the session.",
  "Automatic cache management: I built logic to clear session data after 10 minutes of inactivity.",
  "Grounded responses: I combined ranked retrieval results with LLM reasoning to generate precise, context-aware answers.",
];

const LIVE_DEMO_TECH = ["LangChain", "Vector Database", "AWS Bedrock", "Python"];

export default function Home() {
  return (
    <>
      {/* Homepage Intro */}
      <section className="section intro-section">
        <div className="container">
          <h1 className="hero-name">Jairam Alluri</h1>
          <p className="hero-title">
            Machine Learning Engineer | End-to-End AI Systems | Computer Vision &amp; LLMs
          </p>
          <h2 className="subsection-title">About Me</h2>
          <p className="about-me-text">{ABOUT_ME}</p>
          <div className="hero-buttons">
            <a
              href="./Jairam_Alluri_Resume.pdf"
              download="Jairam_Alluri_Resume.pdf"
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Live Project Demo Section */}
      <section className="section live-demo-section">
        <div className="container">
          <h2 className="section-title">Live Demo — Document RAG Assistant</h2>
          <p className="live-demo-desc">
            Built and deployed an end-to-end RAG system combining document retrieval with a large
            language model to generate grounded answers.
          </p>
          <Chat />
          <div className="live-demo-features">
            <h3 className="features-title">Key Features</h3>
            <ul className="features-list">
              {LIVE_DEMO_FEATURES.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tech-stack">
            <span className="tech-stack-label">Tech Stack:</span>{" "}
            {LIVE_DEMO_TECH.join(", ")}
          </div>
        </div>
      </section>

      {/* Projects Blog Section */}
      <section className="section projects-blog-section">
        <div className="container">
          <h2 className="section-title">Projects Blog</h2>
          <div className="card project-blog-card">
            <h3 className="project-blog-title">Custom GPT-2 LLM From Scratch</h3>
            <p className="project-blog-desc">
              Built a GPT-2 style large language model from scratch using PyTorch, implementing
              transformers with masked multi-head attention, positional encodings, and residual
              connections.
            </p>
            <a
              href={GPT2_MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Blog Post on Medium
            </a>
          </div>
          <div className="card project-blog-card">
            <h3 className="project-blog-title">RAG Evaluation Baseline Framework</h3>
            <p className="project-blog-desc">
              Walked through how to build a baseline evaluation framework for RAG systems and why
              having one is essential for measuring and improving retrieval-augmented LLM
              pipelines.
            </p>
            <a
              href={RAG_EVAL_MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Blog Post on Medium
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
