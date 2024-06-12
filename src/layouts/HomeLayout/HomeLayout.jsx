import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrollTriggerProjects from "../../components/Section/ScrollTriggerProjects.js";

import { ThemeProvider } from "styled-components";
import { one } from "../../styles/ThemeStyles.jsx";
import GlobalStyles from "../../styles/GlobalStyles.jsx";

import Home from "../../pages/Home";
import About from "../../pages/About.jsx";
import Projects from "../../pages/Projects.jsx";
import Services from "../../pages/Services.jsx";
import Contact from "../../pages/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function HomeLayout() {
  const containerRef = useRef(null);
  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={one}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <FormspreeProvider project="2493140480997457400">
            <main className="App" data-scroll-container ref={containerRef}>
              <ScrollTriggerProjects />
              <Home />
              <About />
              <Projects />
              <Services />
              <Contact />
              <Footer />
            </main>
          </FormspreeProvider>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default HomeLayout;
