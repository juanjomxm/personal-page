import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ProgressContext = React.createContext()

function ProgressProvider({children}){
    const{
        item: imageProfile,
        saveItem
    } = useLocalStorage('personal-page', [])

    const [newImage, setNewImage] = React.useState('') // Estado para cambiar la imagen, todavia no lo estoy utilizando porque tengo una imagen fija

    const viewImageProfile = 'https://scontent.feoh5-1.fna.fbcdn.net/v/t39.30808-6/341044175_890455078708284_5837869336479410943_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGYFgZyUf0wxDjbf9hxCAlZz6LiJ4y5L4HPouInjLkvgVMBjSFJdFfhFwbAbOkDQ_k&_nc_ohc=zn3T8D9fs9EAX_n8kib&_nc_ht=scontent.feoh5-1.fna&oh=00_AfC-GtkCA89P_nucd51kVAO5WFlXl1hs9CFAJOdEN4ZeJA&oe=65918072'   // imageProfile.map(item => item.src)

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
            setNewImage,
            viewImageProfile
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }