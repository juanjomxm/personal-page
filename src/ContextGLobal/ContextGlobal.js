import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ProgressContext = React.createContext()

function ProgressProvider({children}){
    const{
        item: imageProfile,
        saveItem
    } = useLocalStorage('personal-page', [])
    const [newImage, setNewImage] = React.useState('')

    const viewImageProfile = imageProfile.map(item => item.src)

    const changeImage = (newImageProfile) => {
        const updatedImageList = [
          {
            src: newImageProfile,
          },
        ];
        saveItem(updatedImageList);
      }

    return(
        <ProgressContext.Provider value={{
            imageProfile,
            saveItem,
            newImage,
            setNewImage,
            changeImage,
            viewImageProfile
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }