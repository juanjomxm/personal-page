import React from "react";
import tuImagen from './imageProfile.jpg'
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../ContextGLobal/ContextGlobal";

function ImageProfile(){
    const naviagateChangeImage = useNavigate()
    const {
    } = React.useContext(ProgressContext)

    return(
        <div className="container-profile">
            <img
            className="image-profile"
            src={tuImagen}
            onClick={()=>{
                let question
            
                question = prompt ("Contingente?")
        
                    if(question == 314){
                        naviagateChangeImage('/change-image')
                    }  else {
                        naviagateChangeImage('/')
                    }
            }}
            />
            <div className="container-discovery">
                <h1>Juan Jose Alvarez Zuluaga</h1>
                <article className="container-description">
                    Soy un estudiante de programacion y desarrollo de software, 
                    con un enfoque en frontend.
                    Mi deseo es seguir aprendiendo y recolectando 
                    nuevos conocimientos dia a dia para convertirme en un excelente
                    programador, tambien adquirir conocimientos en el area de backend
                    y especializarme en inteligencia artificial, todo es un proceso y 
                    estoy en ese camino, con disciplina y enfoque estoy seguro de lo que puedo lograr
                </article>
            </div>
        </div>
    )
}
export { ImageProfile }