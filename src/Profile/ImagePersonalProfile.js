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
                    Programador y desarrollador de software en el area frontend.
                    Deseo poner mi aprendizaje y conocimientos en pro de las personas a las cuales pueda mejorar algun aspecto de su vida y transformar el entorno de estas mismas, para que la tecnologia se convierta en un aliado. El objetivo es especializarme en inteligencia artificial, aprovechando la capacidad de convertirse en una ayuda eficaz en el dia a dia. El mundo se transforma y evoluciona a cada segundo, lo mismo debe suceder con las ideas, todo es un proceso y estoy en ese camino. Con disciplina y enfoque todas las metas se pueden alcanzar
                </article>
            </div>
        </div>
    )
}
export { ImageProfile }