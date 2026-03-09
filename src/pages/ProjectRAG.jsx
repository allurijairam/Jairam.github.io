import "./ProjectDetail.css";

const STEPS = [
  "Document upload",
  "PDF parsing",
  "Document chunking",
  "Embedding generation",
  "Vector database storage",
  "Document retrieval",
  "LLM response generation",
];

const TECH = [
  "Python",
  "LangChain",
  "AWS Bedrock",
  "OpenSearch",
  "FastAPI",
];

export default function ProjectRAG() {
  return (
    <div className="project-detail">
      <div className="container">
        <header className="project-detail-header">
          <h1 className="project-detail-title">Custom RAG System</h1>
          <p className="project-detail-subtitle">
            Retrieval Augmented Generation with document retrieval
          </p>
        </header>

        <section className="project-detail-section">
          <h2 className="project-detail-h2">Overview</h2>
          <div className="card">
            <p>
              This system retrieves information from your documents using embeddings
              and vector search. Incoming text is converted into high-dimensional
              vectors; those vectors are compared against a vector store (e.g. OpenSearch)
              to find the most relevant document chunks. The retrieved context is then
              passed to a large language model (e.g. via AWS Bedrock) to generate
              accurate, source-grounded answers.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <h2 className="project-detail-h2">Architecture</h2>
          <div className="card architecture-card">
            <ol className="architecture-steps">
              {STEPS.map((step) => (
                <li key={step} className="architecture-step">{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="project-detail-section">
          <h2 className="project-detail-h2">Technologies Used</h2>
          <div className="tech-tags">
            {TECH.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
