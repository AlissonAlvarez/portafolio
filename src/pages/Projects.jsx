import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

const Section = styled(motion.section)`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;  
  overflow: hidden;
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

const Left = styled.div`
  width: 40%;
  min-height: 100vh;  
  left: 0;
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.title};
  color: ${props => props.theme.body};  

  p{
    width: 80%;
    margin: 0 auto;
    font-size: ${props => props.theme.fontss};
    font-weight: 300;
  }
`

const Right = styled.div`
  width: 200vw;  
  min-height: 100vh;
  margin-left: 20%;
  padding-left: 30%;
  position: absolute; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.textPrimary};
}
`

const Card = styled(motion.div)`  
  width: 100%;
  margin-right: 5rem;
  padding: 1rem;
  background-color: ${props => props.theme.title};

  img {
    width: 100%;
    height: auto;
  }

  h1 {
    width: 100%;
    font-weight: 500;
    text-align: center;
  }

  p {
    width: 100%;
    padding: 1rem;
    font-weight: 500;
    text-align: center;
  }
`;

const Button = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  button{
    padding: 1rem;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
  }

  .buttonCode{
    background-color: ${props => props.theme.textPrimary};
    color: ${props => props.theme.body};
  }
  
  .buttonDemo{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.textPrimary};
  }
`;

const Project = ({
  imageSrc = '',
  imageAlt = '',
  title = '',
  description = '',
  buttonCode = '',
  buttonDemo = ''
}) => {
  return (
    <Card
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={imageSrc} alt={imageAlt} />
      <h1>{title}</h1>
      <p>{description}</p>
      <Button>
        <button className="buttonCode"><Link to={buttonCode} target="_blank">Repositorio</Link></button>
        <button className="buttonDemo"><Link to={buttonDemo} target="_blank">Despliegue</Link></button>
      </Button>
    </Card>
  );
};

const Projects = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref}>

      <Title data-scroll data-scroll-speed='-1' data-scroll-direction='horizontal'>Proyectos</Title>

      <Left>
        <p></p>
      </Left>

      <Right data-scroll ref={Horizontalref}>
        <Project
          imageSrc='project_04.png'
          imageAlt='aSupermercado El Labriego'
          title='Supermercado El Labriego'
          description=''
          buttonCode='https://github.com/AlissonAlvarez/ecommerce-react'
          buttonDemo='https://ellabriego.vercel.app/'
        />
        <Project
          imageSrc='project_03.png'
          imageAlt='calculadora'
          title='Calculadora'
          description=''
          buttonCode='https://github.com/AlissonAlvarez/Calculadora-JS'
          buttonDemo='https://calculadora-javas.vercel.app/'
        />
        <Project
          imageSrc='project_02.png'
          imageAlt='Anefty Clone'
          title='Anefty Clone'
          description=''
          buttonCode='https://github.com/AlissonAlvarez/Anefty-Clone'
          buttonDemo='https://anefty-clone.vercel.app/'
        />
        <Project
          imageSrc='project_01.png'
          imageAlt='Web Tributo'
          title='Web Tributo'
          description=''
          buttonCode='https://github.com/AlissonAlvarez/Web-Tributo'
          buttonDemo='https://rachel-mcadams.vercel.app/'
        />
      </Right>

    </Section>
  )
}

export default Projects