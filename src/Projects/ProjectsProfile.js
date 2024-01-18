import React from "react"

function Projects(){
    return(
        <div className="container-projects">
            <h2>PROYECTOS</h2>
            <ul className="container-list-projects">
                <li>
                    <a href={"https://progress-cultivation.vercel.app/"} target="_blank" rel="noopener noreferrer">CULTIVO
                        <img
                        src={"https://th.bing.com/th/id/R.bf12ddc91f8de83254c976f32fd8d70c?rik=4fPqdT%2bfiZQSzA&pid=ImgRaw&r=0"}
                        width={50}
                        height={50}
                        />
                    </a>
                </li>
                
                <li>
                    <a href={"https://game-avatar.vercel.app/"} target="_blank" rel="noopener noreferrer">JUEGO AVATAR
                        <img
                        src={"https://th.bing.com/th/id/OIP.H2BbZEorsXKCtBHnCYd_7wAAAA?rs=1&pid=ImgDetMain"}
                        width={50}
                        height={50}
                        />
                    </a> 
                </li>

                <li>
                    <a href={"https://app-exercise.vercel.app/"} target="_blank" rel="noopener noreferrer">RUTINA DE EJERCICIOS
                        <img
                        src={"https://i.ytimg.com/vi/8ar4-RvF2eU/maxresdefault.jpg"}
                        width={50}
                        height={50}
                        />
                    </a> 
                </li>

                <li>
                    <a href={"https://results-soccer.vercel.app/"} target="_blank" rel="noopener noreferrer">RESULTADOS DE FUTBOL
                        <img
                        src={"https://th.bing.com/th/id/OIP.n_c7-CN7eybLsHzJteQxQAHaEK?rs=1&pid=ImgDetMain"}
                        width={50}
                        height={50}
                        />
                    </a> 
                </li>
            </ul>
        </div>
    )
}
export { Projects }