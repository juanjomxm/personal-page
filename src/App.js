import React from "react";
import { ProgressProvider } from "./ContextGLobal/ContextGlobal";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ImageProfile } from "./Profile/ImagePersonalProfile";
import { Projects } from "./Projects/ProjectsProfile";
import { SocialMedia } from "./SocialMedia/SocialMedia";
import { ChangeImage } from "./Profile/ChangeImage";

function App() {
  return (
    <ProgressProvider>
      <React.Fragment>
        <HashRouter>
          <Routes>
            <Route path="/" element={
              <React.Fragment>
                <ImageProfile/>
                <Projects/>
                <SocialMedia/>
              </React.Fragment>
              }
            />

            <Route path="/change-image" element={
              <ChangeImage/>
            }/>
          </Routes>
        </HashRouter>
      </React.Fragment>
    </ProgressProvider>
  );
}
export { App };
