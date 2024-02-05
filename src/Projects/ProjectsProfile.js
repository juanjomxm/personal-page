import React from "react"

function Projects(){
    return(
        <div className="container-projects">
            <h2>PORTAFOLIO</h2>
            <div className="container-list-projects">
                <ul>
                    <a 
                    className="container-image-project"
                    href={"https://progress-cultivation.vercel.app/"} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div>
                            <img
                            src={"https://th.bing.com/th/id/R.bf12ddc91f8de83254c976f32fd8d70c?rik=4fPqdT%2bfiZQSzA&pid=ImgRaw&r=0"}
                            width={100}
                            height={100}
                            />
                        </div>
                        <button
                            className="button-projects"
                        >CULTIVO</button>
                    </a>
                </ul>
                
                <ul>
                    <a 
                    className="container-image-project"
                    href={"https://game-avatar.vercel.app/"} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div>
                            <img
                            src={"https://th.bing.com/th/id/OIP.H2BbZEorsXKCtBHnCYd_7wAAAA?rs=1&pid=ImgDetMain"}
                            width={100}
                            height={100}
                            />
                        </div>
                        <button
                            className="button-projects"
                        >JUEGO AVATAR</button>
                    </a> 
                </ul>

                <ul>
                    <a 
                    className="container-image-project"
                    href={"https://app-exercise.vercel.app/"} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div className="container-image-project">
                            <img
                            src={"https://i.ytimg.com/vi/8ar4-RvF2eU/maxresdefault.jpg"}
                            width={100}
                            height={100}
                            />
                        </div>
                        <button
                            className="button-projects"
                        >RUTINA DE EJERCICIOS</button>
                    </a> 
                </ul>

                <ul>
                    <a 
                    className="container-image-project"
                    href={"https://results-soccer.vercel.app/"} 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div className="container-image-project">
                            <img
                            src={"https://th.bing.com/th/id/OIP.n_c7-CN7eybLsHzJteQxQAHaEK?rs=1&pid=ImgDetMain"}
                            width={100}
                            height={100}
                            />
                        </div>
                        <button
                            className="button-projects"
                        >RESULTADOS DE FUTBOL</button>
                    </a> 
                </ul>
            </div>
        </div>
    )
}
export { Projects }