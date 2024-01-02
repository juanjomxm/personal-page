import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ProgressContext = React.createContext()

function ProgressProvider({children}){
    const{
        item: imageProfile,
        saveItem
    } = useLocalStorage('personal-page', [])

    const [newImage, setNewImage] = React.useState('') // Estado para cambiar la imagen, todavia no lo estoy utilizando porque tengo una imagen fija

    // Funcion para cambiar la imagen del perfil. Ahora no la voy a utilizar porque solo voy a dejar una imagen fija desde el codigo

    // const changeImage = (newImageProfile) => {
    //     const updatedImageList = [
    //       {
    //         src: newImageProfile,
    //       },
    //     ];
    //     saveItem(updatedImageList);
    //   }

    return(
        <ProgressContext.Provider value={{
            imageProfile,
            saveItem,
            newImage,
            setNewImage
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }