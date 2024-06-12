import React from "react";
import styled from "styled-components";
import Animation from "../components/Header/Animation";
import Logo from "../components/Header/Logo";
import Nav from "../components/Header/Nav";

const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  position: relative;  
  overflow: hidden;
`

function Home() {
    return (
        <Section>
            <Animation />
            <Logo />
            <Nav />
        </Section>
    )
}

export default Home;