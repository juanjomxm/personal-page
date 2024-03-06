import React from "react";
import { ProgressProvider } from "./ContextGLobal/ContextGlobal";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ImageProfile } from "./Profile/ImagePersonalProfile";
import { Projects } from "./Projects/ProjectsProfile";
import { SocialMedia } from "./SocialMedia/SocialMedia";

import { ButtonCertificates } from "./Certificate/Certificates";
import { Certificates } from "./Certificate/Certificates";

function App() {
  return (
    <ProgressProvider>
      <React.Fragment>
        <HashRouter>
          <Routes>
            <Route path="/" element={
              <React.Fragment>
                <ImageProfile/>
                <div className="container-projects-and-certificates">
                  <Projects/>
                  <ButtonCertificates/>
                </div>
                <SocialMedia/>
              </React.Fragment>
              }
            />

            {/* Navegacion para ver certificados de programacion */}
            <Route path="/certificates" element={
              <Certificates/>
            }
              
            />
          </Routes>
        </HashRouter>
      </React.Fragment>
    </ProgressProvider>
  );
}
export { App };
