import React from "react";
import certificateApiPractice from "./diploma-api-practico.pdf"
import certificateApi from "./diploma-api.pdf"
import certificateJsbasic from "./diploma-basico-javascript.pdf"
import certificateFrontendDev from "./diploma-frontend-developer.pdf"
import certificateJsScope from "./diploma-javascript-closures-scope.pdf"
import certificateJsNavigator from "./diploma-javascript-navegador.pdf"
import certificateJsPooInter from "./diploma-javascript-poo-intermedio.pdf"
import certificateJsPoo from "./diploma-javascript-poo.pdf"
import certificateJsPractice from "./diploma-javascript-practico.pdf"
import certificateReactRouter from "./diploma-react-router.pdf"
import certificateReact from "./diploma-react.pdf"


import { useNavigate } from "react-router-dom";


function ButtonCertificates(){
    const navigateCertificates = useNavigate()
    return(
        <div className="container-button-certificates">
            <h2>CERTIFICACIONES</h2>
            <button
            className="button-certificates"
            onClick={()=>{
                navigateCertificates('/certificates')
            }}
            >👁️CERTIFICADOS</button>
        </div>
    )
}

function Certificates(){
    return(
        <div>
            <h2 className="title-certificate">CERTIFICADOS PLATZI</h2>
            <div className="container-certificates-platzi">
                <iframe src={certificateApi}/>
                <iframe src={certificateApiPractice}/>
                <iframe src={certificateJsbasic}/>
                <iframe src={certificateFrontendDev}/>
                <iframe src={certificateJsScope}/>
                <iframe src={certificateJsNavigator}/>
                <iframe src={certificateJsPooInter}/>
                <iframe src={certificateJsPoo}/>
                <iframe src={certificateJsPractice}/>
                <iframe src={certificateReactRouter}/>
                <iframe src={certificateReact}/>
            </div>
        </div>
    )
}

export { ButtonCertificates }
export { Certificates }