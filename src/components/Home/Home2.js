import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",color: "black" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ fontSize: "2.6em",color: "black" }}>
               I build LLM-powered agents and RAG systems, and I'm passionate about
              turning ambiguous business problems into evaluated, production-ready AI.
              <br />
              <br />I am fluent in a tech stack like
              <i>
                <b className="purple"> Python (Pandas, NumPy, Scikit-Learn), LangChain, SQL, AWS, GCP, Azure. </b>
              </i>
              <br />
              <br />
              My fields of interest are building &nbsp;
              <i>
                <b className="purple">Agentic AI systems, RAG pipelines, and LLM evaluation harnesses </b>
              </i>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">FIND ME ON</span></h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ameya-Deshmukh26"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ameya-deshmukh-179945a4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
