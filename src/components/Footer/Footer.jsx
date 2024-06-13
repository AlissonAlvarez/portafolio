import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Section = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.textPrimary};
`;

const Logos = styled.div`
  margin: ${(props) => props.theme.fontxs};
  font-size: ${(props) => props.theme.fontll};
  color: ${(props) => props.theme.title};
  cursor: pointer;
`;
function Footer() {
  return (
    <Section>
      <Logos>
      <Link to="https://www.linkedin.com/in/alisson-geraldine-alvarez-desarrolladora-web/" target="_blank"><FaLinkedin /></Link>
      </Logos>
      <Logos>        
      <Link to="mailto:alissong.alvarez@gmail.co" target="_blank"><FaEnvelope /></Link>
      </Logos>
      <Logos>
      <Link to="https://github.com/AlissonAlvarez" target="_blank"><FaGithubSquare /></Link>
      </Logos>
    </Section>
  );
}

export default Footer;
