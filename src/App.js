import React from "react";
import { ProgressProvider } from "./ContextGLobal/ContextGlobal";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ImageProfile } from "./ImagePersonalProfile";
import { ChangeImage } from "./ChangeImage";

function App() {
  return (
    <ProgressProvider>
      <React.Fragment>
        <HashRouter>
          <Routes>
            <Route path="/" element={
              <ImageProfile/>
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
