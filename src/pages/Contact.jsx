import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import Gif from '../assets/videos/contact.mp4'

const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.theme.textPrimary};
`

const Title = styled.h1`
  margin-top: 1rem;
  font-weight: 300;
  font-size: ${props => props.theme.fontxl};
  color: ${props => props.theme.title};
`

const ContainerForm = styled.div`
  width: 60%;
  height: 60vh;
  margin-bottom: 2rem;
  margin-top: 2rem;
  border-radius: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.body};
`

const Form = styled.form`
  padding-right: 1rem;

  input, textarea {
    width: 100%;
    margin: ${props => props.theme.fontxx};
    padding: 0.5rem;
    border-radius: 5px;
  }

  input, textarea {
    margin-top: ${props => props.theme.fontxs};
  }
  
  textarea {
    height:20vh;
  }

  input[type="submit"]{
    font-weight: 700;
    font-size: ${props => props.theme.fontxs};
    color: ${props => props.theme.textPrimary};
    background-color: ${props => props.theme.title};
    cursor:pointer;
  }

  input::placeholder, textarea::placeholder {
    margin: ${props => props.theme.fontss};
    font-size: ${props => props.theme.fontxs};
    color: ${props => props.theme.body};
    text-align: left;
  }
`

const VideoContainer = styled.div`
    width: 100%;
    height: 80vh;
    background-color: ${props => props.theme.body};

    video{
        width: 100%;
        height: 90vh;
    }
`

function Contact() {
  const [state, handleSubmit] = useForm("contacMe");
  if (state.succeeded) {
    return (
      <Section>
        <VideoContainer>
          <video src={Gif} typeof="video/mp4" autoPlay muted loop />
        </VideoContainer>
      </Section>
    );
  }
  return (
    <Section>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Contacto
      </Title>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <input 
            id="name"
            type="name"
            name="name"
            placeholder='Nombre'
          />
          <ValidationError 
            prefix="Name" 
            field="name" 
            errors={state.errors}
          />
          <input 
            id="email"
            type="email"
            name="email"
            placeholder='Correo'
          />
          <ValidationError 
            prefix="Email" 
            field="email" 
            errors={state.errors}
          />
          <textarea 
            id="message" 
            name="message" 
            placeholder="Mensaje" 
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input type="submit" disabled={state.submitting}/>
        </Form>
      </ContainerForm>
    </Section>
  );
}

export default Contact;