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
              title="Stock Price Prediction"
              description=" This is a model of finding path od Stock prices using brownian motion and monte carlo simulation. Utilizing Pandas and Plotly."
              ghLink="https://github.com/Ameya-Deshmukh26/Stock-Price-prediction-and-Technical-Indicators"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Recommendation System"
              description="Always wanted to find a movie that is similar to the one I loved so made this Recommendation system using NLP, Kmeans clusturing and Hierarchical clustering just the nerdy way to simulate 'You might also like!'."
              ghLink="https://github.com/Ameya-Deshmukh26/Recommendation_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Machine Learning: SVM & PCA from scratch"
              description="This is a code for classification of Online news Articles as Popular or Not Popular based on the number of shares.
                          I have utilized various data cleaning and vaidation techniques and applied PCA for dimentionality reduction. "
              ghLink="https://github.com/Ameya-Deshmukh26/ML-SVM-from-scratch/tree/main"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SQL_TravelDatabase"
              description="Created a Travel SQL Dataset using Python comtaining tables such as Customers,Hotels and Transportation etc. These tables are interlinked and depict how a travel website might look, "
              ghLink="https://github.com/Ameya-Deshmukh26/SQL_TravelDatabase"
            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
