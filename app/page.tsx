export default function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Nishant Shukla</h1>

        <p className="subtitle">
          Deep Tech • Distributed Systems • Deep Learning • Databases
        </p>

        <p>
          I write research-oriented blogs about distributed systems, deep learning
          infrastructure, databases for ML workloads, and theoretical foundations
          of modern neural networks.
        </p>

        <p>
          Currently inclined towards hallucinations in LLMs, while actively
          grinding DSA and competitive programming.
        </p>

        <div className="links">
          <a
            href="https://www.linkedin.com/in/nishantshukla2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/IAMNISHANTSHUKLA"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:nishantwork2004@gmail.com">Email</a>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles">
        <h2>Research Problem Notes</h2>

        <Article title="Distributed Systems & Deep Learning Infrastructure">
          <ul>
            <li>
              <b>1.1 Asynchronous Gradient Aggregation</b> — Provably convergent async
              optimization under Byzantine failures and network heterogeneity.
            </li>
            <li>
              <b>1.2 Adaptive Data Partitioning</b> — Dynamic data allocation for
              heterogeneous federated learning with PAC guarantees.
            </li>
          </ul>
        </Article>

        <Article title="Database Architecture for ML Workloads">
          <ul>
            <li>
              <b>2.1 Learned Index Structures</b> — Robust learned indexes under
              distributional shift with worst-case guarantees.
            </li>
            <li>
              <b>2.2 Transaction Semantics</b> — Formalizing checkpoint consistency
              and throughput trade-offs using database theory.
            </li>
          </ul>
        </Article>

        <Article title="Transformer Architecture Foundations">
          <ul>
            <li>
              <b>3.1 Attention Sample Complexity</b> — Expressiveness and
              VC-dimension of multi-head attention.
            </li>
            <li>
              <b>3.2 Implicit Bias</b> — Optimization landscapes and hierarchical
              representation learning.
            </li>
            <li>
              <b>3.3 Long-Context Attention</b> — Subquadratic attention with
              provable approximation guarantees.
            </li>
          </ul>
        </Article>

        <Article title="Deep Learning Theory & Optimization">
          <ul>
            <li>
              <b>4.1 NTK Beyond Lazy Training</b> — Feature learning in finite-width
              networks.
            </li>
            <li>
              <b>4.2 Implicit Regularization</b> — Architecture–optimization
              interactions.
            </li>
            <li>
              <b>4.3 Sample-Efficient Deep RL</b> — Theory for POMDPs.
            </li>
            <li>
              <b>4.4 Double Descent</b> — Benign overfitting regimes.
            </li>
          </ul>
        </Article>

        <Article title="Cross-Cutting Systems–Theory Problems">
          <ul>
            <li>
              <b>5.1 Communication-Optimal Training</b> — Lower bounds and near-optimal
              transformer training.
            </li>
            <li>
              <b>5.2 Memory-Efficient Training</b> — Optimal activation checkpointing.
            </li>
            <li>
              <b>5.3 Byzantine Resilience</b> — Robust distributed optimization.
            </li>
          </ul>
        </Article>
      </section>
    </main>
  );
}

function Article({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
