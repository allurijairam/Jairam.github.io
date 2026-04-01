import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectRAG from "./pages/ProjectRAG";
import ProjectML from "./pages/ProjectML";
import Upload from "./pages/Upload";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/rag-system" element={<ProjectRAG />} />
          <Route path="/projects/ml-from-scratch" element={<ProjectML />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>

    </HashRouter>
  );
}
