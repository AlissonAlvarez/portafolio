import React from 'react'
import styled from 'styled-components'
import image from '../assets/images/about.jpg'

const Section = styled.section`
  width: 80vw;
  min-height: 70vh;
  margin: 0 auto;  
  position: relative; 
  display: flex;
  overflow: hidden;  
`

const Title = styled.h1`
  margin-left: 5%;  
  margin-top: 1rem;
  z-index: 5;
  position: absolute;  
  font-size: ${props => props.theme.fontxl};  
  font-weight: 300;    
  color: ${props => props.theme.title};
`

const Left = styled.div`  
  width: 50%;
  margin-top: 20%;
  z-index: 5;
  position: relative;  
  font-size: ${props => props.theme.fontss};
  font-weight: 300;
  color: ${props => props.theme.textPrimary};  
`

const Right = styled.div`
  width: 50%;
`

function About() {
  return (
    <Section id='scroll-target' className='about'>
      <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>Acerca de mi</Title>
      <Left data-scroll data-scroll-sticky data-scroll-target='#scroll-target'>
        Desarrolladora Full Stack, me destaco
        por resolver problemas y encontrar
        soluciones creativas. Tengo habilidades
        en HTML, CSS y JavaScript, he
        trabajado con React, Node.js, Express y
        MongoDB. Estoy comprometida a seguir
        aprendiendo y a mejorar mis habilidades,
        me interesa aplicar mis conocimientos
        para trabajar en proyectos retadores y
        colaborar en el desarrollo de soluciones
        innovadoras en el área tecnológica.  </Left>
      <Right><img src={image} alt="About Us" /></Right>
    </Section>
  )
}

export default About;