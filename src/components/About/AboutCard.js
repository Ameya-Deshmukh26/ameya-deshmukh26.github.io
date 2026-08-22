import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "black" }}>
            Hi Everyone, I am <span className="purple">Ameya Deshmukh </span>
            <br />
            I hold a Master's in Data Analytics Engineering from Northeastern University (Dec 2025).
            <br />
            I currently work as an AI Engineer at Humanitarians AI, building LLM-powered analytical
            applications, RAG pipelines, and evaluation harnesses over financial disclosure data.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          </p>
          
        </blockquote>
        <row style={{ color: "black" }}>
            "I strive to do things that are in the realm of innovation!"
          </row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
