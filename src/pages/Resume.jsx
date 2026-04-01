import "./Resume.css";

const CONTACT = {
  name: "Jairam Alluri",
  role: "Machine Learning Engineer",
  location: "Dallas, Texas 75013",
  phone: "(469)-237-1808",
  email: "allurijairam@gmail.com",
  linkedin: "https://www.linkedin.com/in/jairam-alluri-23a624172/",
};

const SKILLS = {
  languages: ["Python", "SQL"],
  technologies: [
    "PyTorch",
    "TensorFlow",
    "Azure",
    "AWS",
    "EC2",
    "LLMs",
    "Transformers",
    "OpenCV",
    "Computer Vision",
    "NLP",
    "Time Series",
    "Edge ML",
    "Vector Databases",
    "Docker",
    "Flask",
    "Scikit-learn",
  ],
};

const EXPERIENCE = [
  {
    role: "Machine Learning Engineer",
    company: "Honeywell",
    location: "Richardson, USA",
    period: "May 2023 - Present",
    points: [
      "Architected a 3D Computer Vision system using PyTorch and OpenCV, developing a custom Vision Transformer (ViT) architecture with specialized positional encodings to classify complex structural patterns; I secured approval to file a patent covering a novel data-preprocessing technique.",
      "Engineered a parallel processing pipeline on Azure that achieved a 10x reduction in preprocessing latency.",
      "Reduced Azure cloud expenditure by 80% by optimizing infrastructure, selecting high-throughput compute instances and database configurations tailored to specific workload demands.",
      "Developed and deployed Edge ML models using TensorFlow, optimizing for real-time gas concentration prediction with minimal CPU overhead on resource-constrained hardware.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Straive",
    location: "Chennai, India",
    period: "June 2021 - August 2022",
    points: [
      "Architected a large-scale Deep Learning OCR system for automated text extraction from PDFs using PyTorch and Computer Vision, reducing operational costs per document by 90%.",
      "Engineered a scalable, low-latency Object Detection and Segmentation system (YOLO/Mask R-CNN) that automated data labeling, slashing manual annotation time and reducing team overhead by 70%.",
      "Developed a production-grade NLP Pipeline for customer service automation, leveraging Transformers to prioritize urgent queries and improve resolution speed by 70%.",
      "Optimized Azure Cloud Infrastructure by implementing auto-scaling and spot instances, effectively reducing the department's monthly cloud expenditure by 80%.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "M.S. in Business Analytics (Data Science Cohort)",
    school: "The University of Texas at Dallas",
    period: "August 2022 - May 2024",
    points: [
      "GPA: 3.91",
      "Honors & Scholarship(s): Dean's Excellence New Student Cohort Scholarship for exceptional academic excellence.",
      "Achievements: Ranked #1 in the AI/ML and Statistics courses.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Document RAG Assistant (End-to-End Serverless RAG)",
    points: [
      "Built and deployed an end-to-end RAG system combining document retrieval with a large language model to generate grounded answers.",
      "Implemented multi-query & RAG fusion for follow-up queries and ranked retrieval; session-based memory for PDFs, queries, and results; automatic cache cleanup after 10 minutes of inactivity.",
      "Tech: LangChain, Vector Database (Chroma), AWS Bedrock, Python, Flask.",
      "GitHub: github.com/allurijairam/rag_lamda_app",
    ],
    repoUrl: "https://github.com/allurijairam/rag_lamda_app",
  },
  {
    name: "Custom GPT-2 LLM From Scratch",
    points: [
      "Developed a Custom GPT-2 LLM: Engineered a decoder-only Large Language Model from the ground up using PyTorch, implementing Masked Multi-Head Attention and Feed-Forward Networks for autonomous text generation.",
      "Engineered Core LLM Components: Built and integrated Sinusoidal Positional Encodings and Layer Normalization to manage sequence dependencies and ensure training stability across deep transformer blocks.",
      "Optimized Training Pipeline: Developed a custom character-level tokenizer and implemented Residual Connections to improve gradient flow, training the model on specialized datasets to achieve coherent linguistic outputs.",
      "Blog post: medium.com/@allurijairam/gpt-2-from-scratch-40efde46db2d",
    ],
    blogUrl: "https://medium.com/@allurijairam/gpt-2-from-scratch-40efde46db2d",
  },
  {
    name: "Deep Learning-Based Autocorrect System",
    points: [
      "Developed a Seq2Seq Encoder-Decoder model using an Attention Mechanism and 1D-CNN layers for real-time text correction.",
      "Engineered a custom NLP pipeline leveraging FastText embeddings and advanced tokenization to improve semantic accuracy.",
      "Optimized performance through rigorous error analysis and iterative experimentation to handle diverse linguistic scenarios.",
      "Deployed a real-time web application using Flask to demonstrate end-to-end model inference.",
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
                <p className="resume-edu-school">{edu.school}</p>
                <ul className="resume-list">
                  {edu.points.map((point, j) => (
                    <li key={j}>{boldMetrics(point)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Project Work</h2>
            {PROJECTS.map((proj, i) => (
              <div key={i} className="card resume-project">
                <strong className="resume-project-name">{proj.name}</strong>
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
              <p className="resume-skills-label">Technologies &amp; Tools:</p>
              <ul className="resume-list resume-skills">
                {SKILLS.technologies.map((s, i) => (
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
