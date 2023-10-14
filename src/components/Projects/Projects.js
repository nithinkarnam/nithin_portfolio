import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/wordcounter.png";
import editor from "../../Assets/Projects/agecalculator.png";
import chatify from "../../Assets/Projects/fertilizerforecast.png";
import bitsOfCode from "../../Assets/Projects/destidive.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fertilizer Forecast App"
              description="This Streamlit application allows users to predict the recommended fertilizer for specific crops based on user-provided environmental and soil parameters, utilizing a pre-trained machine learning model. Users can adjust sliders and select soil and crop types to receive fertilizer recommendations."
              ghLink="https://github.com/nithinkarnam/model_prediction-fertilizer/blob/main/app.py"
              demoLink="https://nithinkarnam-model-prediction-fertilizer-app-dkrlhs.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DestiDive travell helper"
              description= "DestiDive is a user-friendly travel app that leverages a K-nearest neighbors (KNN) model to suggest important places and services at various destinations. With a visually appealing Streamlit interface, users can select their desired travel destination from a vast list of options"
              ghLink="https://github.com/nithinkarnam/destidive-app"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Age Calculator using React js"
              description= "with this responsive application you can calculate your age by simply entering your date of birth"
              ghLink="https://github.com/nithinkarnam/agecalculator_mern"
              demoLink="https://agecalculator-mern.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Word Counter using React js"
              description= "with this responsive application you can calculate the number of words in a paragraph that you need "
              ghLink="https://github.com/nithinkarnam/word_counter_mern"
              demoLink="https://word-counter-amber.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
