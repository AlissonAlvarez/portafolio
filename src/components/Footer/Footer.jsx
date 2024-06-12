import React from 'react'
import styled from 'styled-components'
import { FaLinkedin} from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Section = styled.section`
    display: flex;
    justify-content: center;
    background-color:${props => props.theme.textPrimary};
`

const Logos = styled.div`
    margin: ${props => props.theme.fontxs};
    font-size:${props => props.theme.fontll};
    color:${props => props.theme.title}; 
    cursor:pointer;   
`
function Footer() {
    return (
        <Section>
            <Logos>
                <FaLinkedin  />
            </Logos>
            <Logos>
                <FaGithubSquare />
            </Logos>
            <Logos>
                <FaInstagramSquare />
            </Logos>
        </Section>
    )
}

export default Footer