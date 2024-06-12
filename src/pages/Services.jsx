import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Title = styled.h1`
  left: 1%;
  top: 1rem;
  z-index: 10;
  position: absolute;
  font-size: ${props => props.theme.fontxl};
  font-weight: 300;  
  color: ${props => props.theme.textPrimary};
`

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Skill = styled.h1`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.textPrimary};
  text-transform: uppercase;

  span {
    display: block;
    background-color: ${(props) => props.theme.title};
    padding: 1rem 2rem;    
  }

`

const Services = () => {
  return (
    <Section>
      <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>Habilidades</Title>
       <Container id="direction">
        <Skill>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            Mongo
          </span>
        </Skill>
        <Skill data-scroll data-scroll-speed="-2" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            Express
          </span>
        </Skill>
        <Skill>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
            REACT
          </span>
        </Skill>
        <Skill data-scroll data-scroll-speed="6" data-scroll-target="#direction">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-target="#direction"
          >
            Node
          </span>
        </Skill>
      </Container>
    </Section>
  )
}

export default Services