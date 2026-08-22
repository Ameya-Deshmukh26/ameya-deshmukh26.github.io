import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading" style={{ color: "black"}} >
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px",color: "black" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Production RAG on Financial Disclosures"
              description="Built a 600-document retrieval system with an MRR and hit-rate evaluation harness on programmatically generated ground truth, comparing 3 embedding models across quality, index build time, query latency, and storage. Profiled per-stage latency across embedding, retrieval, reranking, and generation."
              ghLink="https://github.com/Ameya-Deshmukh26/fin-disclosure-rag"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Observable Agent System"
              description="Built a LangGraph agent with a retry cycle gated by a zero-LLM fabrication validator enforcing provenance and metric thresholds, traced end to end in Opik with 32 passing tests."
              ghLink="https://github.com/Ameya-Deshmukh26/job-scraper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Multi-Agent RAG Research Assistant"
              description="Architected a multi-domain agentic research system using LangChain with a centroid-routed RAG pipeline, SQLite memory, and an LLM-as-judge evaluation framework, deployed on HuggingFace."
              ghLink="https://github.com/Ameya-Deshmukh26/multi-agent-rag"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Congressional Trading Intelligence System"
              description="Built an MCP multi-agent system using LangChain orchestration linking Capitol Trades data to Yahoo Finance signals, generating LLM alert narratives and surfacing insights via a React dashboard."
              ghLink="https://github.com/Ameya-Deshmukh26"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="NLP Classification with BERT Fine-tuning"
              description="Fine-tuned BERT on 910K+ repositories for multi-label classification, achieving 89% accuracy using transfer learning and domain-specific tokenizer adaptation with Hugging Face."
              ghLink="https://github.com/Ameya-Deshmukh26/bert-classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Transformer Language Model from Scratch"
              description="Built a 4-layer Transformer from scratch in PyTorch implementing multi-head attention, achieving 0.21 validation loss on 50M+ tokens and containerizing the inference pipeline via Docker."
              ghLink="https://github.com/Ameya-Deshmukh26/Transformer-LLM"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
