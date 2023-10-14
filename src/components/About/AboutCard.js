import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karnam Nithin </span>
            from <span className="purple"> Tirupati,Andhra Pradesh, India.</span>
            <br /> I am a Pre final year student pursuing Bachelors in Computer Science and engineering with specialization in artificial intelligence and machine learning
            <br />
            Additionally, I have recently worked as a machine learning intern at GoYaana: a technology startup
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on Maths
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nithin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
