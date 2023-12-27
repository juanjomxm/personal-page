import React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "./ContextGLobal/ContextGlobal";

function ImageProfile(){
    const naviagateChangeImage = useNavigate()
    const {
        viewImageProfile
    } = React.useContext(ProgressContext)


    return(
        <div>
            <h1>Juan Jose Alvarez Zuluaga</h1>
            <textarea></textarea>
            <img
            className="image-profile"
            src={viewImageProfile}
            onClick={()=>{
                let question
                while(question != 314){ // si la respuesta es diferente a 314 el ciclo sigue
            
                question = prompt ("Contingente?")
        
                    if(question == 314){
                        naviagateChangeImage('/change-image')
                    }  else {
                        console.log("no jodas, tan facil que era")
                    }
                }
            }}
            />
            <a href="https://github.com/juanjomxm">Links Proyectos</a>
            <a href="https://www.facebook.com/juanjo.alvarezzuluaga/">Facebook</a>
        </div>
    )
}
export { ImageProfile }