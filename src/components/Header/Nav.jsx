import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const NavContainer = styled(motion.div)`
  width: 100vw;
  top: ${props => props.click ? '0' : `-${props.theme.fontlg}`};
  z-index: 6;
  position: absolute;
  display:flex;
  justify-content: center;
  align-items: center;  
  transition:all 0.3s ease; 
`

const MenuItems = styled(motion.ul)`
  width: 100%;
  height: ${props => props.theme.fontlg};
  padding: 0 20;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.body};
  background-color: ${props => `rgba(${props.theme.textRgba})`};
    
`

const MenuButton = styled.li`
  width: 15rem;
  height: 2.5rem;
  left: 50%;
  top: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontxs};
  font-weight:600;
  color: ${props => props.theme.body};
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
  text-transform: uppercase;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  transform: translateX(-50%);  
  cursor: pointer;
`

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  cursor: pointer;
`

function Nav() {
  const [click, setClick] = useState(false);

  return (
    <NavContainer click={click}
      initial={{
        y: '-100%'
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 2, delay: 2
      }}>
      <MenuItems
        drag='y'
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin>
        <MenuButton onClick={() => setClick(!click)}>Menu</MenuButton>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuItems>
    </NavContainer >
  )
}

export default Nav