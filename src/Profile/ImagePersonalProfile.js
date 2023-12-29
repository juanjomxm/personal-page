import React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../ContextGLobal/ContextGlobal";

function ImageProfile(){
    const naviagateChangeImage = useNavigate()
    const {
        viewImageProfile
    } = React.useContext(ProgressContext)


    return(
        <div className="container-profile">
            <img
            className="image-profile"
            src={viewImageProfile}
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
                <p>Conocimientos y habilidades</p>
            </div>
        </div>
    )
}
export { ImageProfile }