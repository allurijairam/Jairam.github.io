import "./Resume.css";

const CONTACT = {
  name: "Jairam Alluri",
  role: "Machine Learning Engineer",
  location: "Dallas, TX 75013",
  phone: "(469) 237-1808",
  email: "allurijairam@gmail.com",
  linkedin: "https://www.linkedin.com/in/jairam-alluri-23a624172/",
  website: "allurijairam.github.io/Jairam.github.io",
  websiteUrl: "https://allurijairam.github.io/Jairam.github.io",
};

const SUMMARY =
  "Machine Learning Engineer with 4+ years of production experience in computer vision, NLP, and LLM systems. Reduced Azure infrastructure costs by 80% and preprocessing latency by 10× at Honeywell; holds a pending USPTO patent for a novel 3D vision preprocessing technique. Built a GPT-2 transformer from scratch in PyTorch and deployed a production RAG pipeline on AWS Bedrock. Focused on LLM systems, RAG architecture, and efficient model deployment.";

const SKILLS = {
  languages: ["Python", "SQL"],
  mlAi: [
    "PyTorch", "TensorFlow", "Transformers (BERT/ViT/LLaMA/GPT-2)", "YOLO",
    "OpenCV", "Scikit-learn", "LangChain", "RAG", "Multi-Query Retrieval",
    "RAG Fusion", "Embeddings", "Semantic Search", "Vector Databases (ChromaDB)",
    "NLP", "Time Series", "Edge ML",
  ],
  mlops: [
    "Docker", "REST API", "Flask", "MLflow", "CI/CD",
    "AWS (EC2, Bedrock, S3)", "Azure (Auto-scaling, Spot Instances)",
  ],
  techniques: [
    "Feature Engineering", "Model Quantization", "Seq2Seq", "Attention Mechanisms",
    "Positional Encodings", "Custom Tokenization", "Model Monitoring", "Experiment Tracking",
  ],
};

const EXPERIENCE = [
  {
    role: "Machine Learning Engineer",
    company: "Honeywell",
    location: "Richardson, TX",
    period: "May 2023 – Present",
    points: [
      "Developed a 3D Computer Vision system using PyTorch and OpenCV with a custom Vision Transformer (ViT) and specialized positional encodings for structural pattern classification; the data-preprocessing technique is pending USPTO patent.",
      "Reduced preprocessing latency by 10× by re-architecting the Azure pipeline for parallel execution, enabling real-time inference on production workloads.",
      "Reduced Azure cloud expenditure by 80% through workload-specific instance selection, database configuration tuning, and migrating batch jobs to spot instances.",
      "Developed and deployed TensorFlow Edge ML models for real-time gas concentration prediction on resource-constrained embedded hardware with minimal CPU overhead.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Straive",
    location: "Chennai, India",
    period: "June 2021 – August 2022",
    points: [
      "Built a PyTorch deep learning OCR pipeline for automated PDF text extraction, reducing per-document operational cost by 90% and eliminating the manual extraction workflow.",
      "Deployed a YOLO-based object detection system to automate data labeling, cutting manual annotation time by 70% across the team.",
      "Built a Transformer-based NLP triage pipeline to classify and prioritize customer service queries by urgency, improving resolution speed by 70%.",
      "Reduced monthly Azure cloud expenditure by 80% by migrating infrastructure to auto-scaling groups and spot instances.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "M.S. in Business Analytics – Data Science Cohort",
    school: "The University of Texas at Dallas",
    location: "Richardson, TX",
    period: "Aug 2022 – May 2024",
    points: [
      "GPA: 3.91/4.0 | Dean's Excellence New Student Cohort Scholarship",
      "Ranked #1 in AI/ML and Statistics courses; relevant coursework: Machine Learning, Deep Learning, Statistical Modeling, Natural Language Processing",
    ],
  },
];

const PATENTS = [
  "Patent Pending (USPTO) — Novel data-preprocessing technique for 3D structural pattern classification in industrial computer vision systems, Honeywell International, 2024.",
  "Dean's Excellence Scholarship, University of Texas at Dallas, 2022 — awarded for exceptional academic excellence at entry.",
];

const PROJECTS = [
  {
    name: "Academic Knowledge Assistant – Hybrid RAG Pipeline",
    tech: "LangChain, ChromaDB, BM25, AWS Bedrock, Flask, Docker, Python",
    points: [
      "Built a domain-specific Q&A system for academic content — students upload course notes, textbooks, and lecture PDFs and ask natural language questions, getting grounded answers with source references instead of generic LLM responses.",
      "Implemented a hybrid retrieval layer combining ChromaDB (dense vector search) with BM25 (sparse keyword search), then fused results using Reciprocal Rank Fusion (RRF) — significantly improving recall on technical terminology and exact-match queries where pure semantic search fails.",
      "Added Multi-Query Retrieval to decompose complex multi-part questions into sub-queries, improving answer completeness on questions that span multiple document sections.",
      "Designed session memory with TTL-based caching (10-min expiry) to maintain conversation context across follow-up questions while automatically purging user data on session end.",
      "GitHub: github.com/allurijairam/rag_lamda_app",
    ],
    repoUrl: "https://github.com/allurijairam/rag_lamda_app",
  },
  {
    name: "GPT-2 Language Model Built from Scratch",
    tech: "PyTorch, Custom Tokenizer, Transformer Architecture",
    points: [
      "Implemented the complete GPT-2 decoder-only architecture from scratch in PyTorch: Masked Multi-Head Self-Attention, Feed-Forward Networks, Sinusoidal Positional Encodings, Layer Normalization, and Residual Connections — no HuggingFace or external transformer libraries used.",
      "Built a character-level tokenizer from scratch and tuned training stability using Residual Connections and gradient clipping across deep transformer blocks.",
      "Blog post: medium.com/@allurijairam/gpt-2-from-scratch-40efde46db2d",
    ],
    blogUrl: "https://medium.com/@allurijairam/gpt-2-from-scratch-40efde46db2d",
  },
  {
    name: "Deep Learning Autocorrect System",
    tech: "PyTorch, Seq2Seq, FastText, 1D-CNN, Flask",
    points: [
      "Built a Seq2Seq Encoder-Decoder model with Attention and 1D-CNN layers for real-time sentence-level text correction, handling errors that traditional spell-checkers miss.",
      "Used FastText embeddings to improve generalization on rare and misspelled inputs compared to one-hot encoding baselines.",
      "Deployed full inference pipeline as a Flask web application with end-to-end real-time correction.",
      "Blog post: medium.com/@allurijairam/sentence-correction-using-deep-learning-333a5ba6f89f",
    ],
    blogUrl: "https://medium.com/@allurijairam/sentence-correction-using-deep-learning-333a5ba6f89f",
  },
];

/** Wraps common metrics (e.g. 10x, 80%, $10M, 3.91, #1) in <strong> for emphasis. */
function boldMetrics(text) {
  const parts = text.split(
    /(\d+x|\.?\d+%|\$\d+M|\d+\.\d+|#\d+)/gi
  );
  return parts.map((part, i) => {
    if (/^\d+x$/i.test(part) || /^\d+%$/.test(part) || /^\$\d+M$/i.test(part) || /^\d+\.\d+$/.test(part) || /^#\d+$/.test(part)) {
      return <strong key={i}>{part}</strong>;
    }
    return part;
  });
}

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="container">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <a
            href="./Jairam_Alluri_Resume.pdf"
            download="Jairam_Alluri_Resume.pdf"
            className="btn btn-primary"
          >
            Download Resume (PDF)
          </a>
        </header>

        <div className="resume-content">
          <section className="resume-section">
            <h2 className="resume-h2">Summary</h2>
            <div className="card">
              <p className="resume-summary">{boldMetrics(SUMMARY)}</p>
            </div>
          </section>

          <section className="resume-section resume-contact">
            <h2 className="resume-h2">Contact</h2>
            <div className="card resume-contact-card">
              <p className="resume-contact-name">{CONTACT.name}</p>
              <p className="resume-contact-role">{CONTACT.role}</p>
              <p className="resume-contact-detail">{CONTACT.location}</p>
              <p className="resume-contact-detail">
                <a href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}>{CONTACT.phone}</a>
              </p>
              <p className="resume-contact-detail">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
              <p className="resume-contact-detail">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
              <p className="resume-contact-detail">
                <a href={CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {CONTACT.website}
                </a>
              </p>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Work Experience</h2>
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="resume-job card">
                <div className="resume-job-header">
                  <span className="resume-job-role">{job.role}</span>
                  <span className="resume-job-period">{job.period}</span>
                </div>
                <p className="resume-job-company">
                  {job.company}
                  {job.location && `, ${job.location}`}
                </p>
                <ul className="resume-list">
                  {job.points.map((point, j) => (
                    <li key={j}>{boldMetrics(point)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Education</h2>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="card resume-edu-block">
                <div className="resume-edu-header">
                  <strong>{edu.degree}</strong>
                  <span className="resume-job-period">{edu.period}</span>
                </div>
                <p className="resume-edu-school">
                  {edu.school}{edu.location && `, ${edu.location}`}
                </p>
                <ul className="resume-list">
                  {edu.points.map((point, j) => (
                    <li key={j}>{boldMetrics(point)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Patents &amp; Recognition</h2>
            <div className="card">
              <ul className="resume-list">
                {PATENTS.map((item, i) => (
                  <li key={i}>{boldMetrics(item)}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Project Work</h2>
            {PROJECTS.map((proj, i) => (
              <div key={i} className="card resume-project">
                <strong className="resume-project-name">{proj.name}</strong>
                {proj.tech && (
                  <p className="resume-project-tech">{proj.tech}</p>
                )}
                <ul className="resume-list">
                  {proj.points.map((point, j) => (
                    <li key={j}>
                      {point.startsWith("Blog post:") && proj.blogUrl ? (
                        <>
                          Blog post:{" "}
                          <a
                            href={proj.blogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {point.replace(/^Blog post:\s*/, "")}
                          </a>
                        </>
                      ) : point.startsWith("GitHub:") && proj.repoUrl ? (
                        <>
                          GitHub:{" "}
                          <a
                            href={proj.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {point.replace(/^GitHub:\s*/, "")}
                          </a>
                        </>
                      ) : (
                        boldMetrics(point)
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Skills</h2>
            <div className="card">
              <p className="resume-skills-label">Languages:</p>
              <ul className="resume-list resume-skills">
                {SKILLS.languages.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              <p className="resume-skills-label">ML &amp; AI:</p>
              <ul className="resume-list resume-skills">
                {SKILLS.mlAi.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              <p className="resume-skills-label">MLOps &amp; Infra:</p>
              <ul className="resume-list resume-skills">
                {SKILLS.mlops.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              <p className="resume-skills-label">Techniques:</p>
              <ul className="resume-list resume-skills">
                {SKILLS.techniques.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
