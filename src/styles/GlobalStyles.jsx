import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  outline: none;  
  font-family: 'Montserrat'; 
}

html, body {
  width:100%;
  background-color: #010737;
  overflow-x: hidden;
}

a{
    color: inherit;
}
`
export default GlobalStyles;