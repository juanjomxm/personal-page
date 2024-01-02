import React from "react";

function SocialMedia(){
    return(
        <div className="container-social-media">
            <h2>Redes Sociales</h2>

            <div className="log-social.media">
                <a href={'https://www.facebook.com/juanjo.alvarezzuluaga'} target="_blank" rel="noopener noreferrer">
                    <img
                    src="https://th.bing.com/th/id/R.72bd2c28b6b771e46a39e00989520221?rik=4A%2bNDwwcIPjftg&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19756.png&ehk=5ArQ9Vzk6wObTcqukRKMQMouipaLLEJN%2fpHY3xTjCYo%3d&risl=&pid=ImgRaw&r=0"
                    width={200}
                    height={200}
                    />
                </a>

                <a href={'https://github.com/juanjomxm'} target="_blank" rel="noopener noreferrer">
                    <img
                    src="https://th.bing.com/th/id/R.97e9f0cc4b38a9613362c45cfb15a92d?rik=5CnPYn0rdMxTjg&pid=ImgRaw&r=0"
                    width={200}
                    height={200}
                    />
                </a>

                <a href={'https://www.linkedin.com/in/juan-jose-alvarez-zuluaga-554727282/'} target="_blank" rel="noopener noreferrer">
                    <img
                    src="https://th.bing.com/th/id/R.15fd5adb3c750e71a0e6ba69caaabe5f?rik=r4eO9JHsawHnKg&pid=ImgRaw&r=0"
                    width={200}
                    height={200}
                    />
                </a>
            </div>
        </div>
    )
}
export { SocialMedia }