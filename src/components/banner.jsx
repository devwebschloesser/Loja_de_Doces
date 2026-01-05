import React from "react";


const Banner = () => {
    return ( 
        <>
        <div className="container-banner">
            <div className="content">
                <img className="banner"
                src="/banner1.png" alt="imagem"></img>
            </div>
            <div className="content">
                <img className="banner"
                src="/banner2.png" alt="imagem"></img>
            </div>
            <div className="content">
                <img className="banner"
                src="/banner3.png" alt="imagem"></img>
            </div>
        </div>
        </>
     );
}
 
export default Banner;