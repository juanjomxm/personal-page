import React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "./ContextGLobal/ContextGlobal";

function ChangeImage(){
    const navigateImage = useNavigate()
    const {
        newImage,
        setNewImage
    } = React.useContext(ProgressContext)

    const onSubmit = (event)=>{
        event.preventDefault()
        navigateImage('/')
    }

    const onCancel = (event)=>{
        event.preventDefault()
        navigateImage('/')
    }

    const onSubmitImage = (event)=>{
        setNewImage({
          src: URL.createObjectURL(event.target.files[0])
        })
    }

    return(
        <div>
           <form
            onSubmit={onSubmit}
           />

            <label>
                <input 
                type="file"
                onChange={onSubmitImage}
                ></input>
            </label>

            <button
                type="button"
                onClick={onCancel}
                >Cancelar
            </button>
            <button 
                type="submit"
                onClick={onSubmit}
                >Añadir
            </button>

            <img
                src={newImage.src}
                width={200}
                height={200}
            />
        </div>
    )
}
export { ChangeImage }