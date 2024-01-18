import React from "react";

function SocialMedia(){
    return(
        <div className="container-social-media">
            <h2>REDES SOCIALES</h2>

            <div className="log-social-media">
                <ul>
                    <a href={'https://www.facebook.com/juanjo.alvarezzuluaga'} target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://dockx-movers.be/wp-content/uploads/2022/05/facebook_logo.png"
                        width={200}
                        height={200}
                        />
                    </a>
                </ul>

                <ul>
                    <a href={'https://github.com/juanjomxm'} target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://th.bing.com/th/id/OIP.aDwI0N5dHQFtCTbj68kbsQAAAA?w=300&h=300&rs=1&pid=ImgDetMain"
                        width={200}
                        height={200}
                        />
                    </a>
                </ul>

                <ul>
                    <a href={'https://www.linkedin.com/in/juan-jose-alvarez-zuluaga-554727282/'} target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://th.bing.com/th/id/R.15fd5adb3c750e71a0e6ba69caaabe5f?rik=r4eO9JHsawHnKg&pid=ImgRaw&r=0"
                        width={200}
                        height={200}
                        />
                    </a>
                </ul>
            </div>
        </div>
    )
}
export { SocialMedia }