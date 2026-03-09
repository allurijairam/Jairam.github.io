import "./ProjectDetail.css";

const TECH = ["Python", "NumPy", "Jupyter"];

export default function ProjectML() {
  return (
    <div className="project-detail">
      <div className="container">
        <header className="project-detail-header">
          <h1 className="project-detail-title">ML from Scratch</h1>
          <p className="project-detail-subtitle">
            Core machine learning algorithms implemented from scratch
          </p>
        </header>

        <section className="project-detail-section">
          <h2 className="project-detail-h2">Overview</h2>
          <div className="card">
            <p>
              A learning-oriented project implementing fundamental ML algorithms
              (e.g. linear regression, logistic regression, basic neural nets)
              without relying on high-level frameworks. Used for deepening
              understanding and experimentation.
            </p>
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
