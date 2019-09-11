import React from "react";
import "./preloader.scss";

function Preloader() {
    return (
        <div className="wrapper">
            <div className="loader-wrapper">
                <div className="loader-circle">
                    <svg className='loader-circle-inner' viewBox='25 25 50 50'>
                        <circle cx='50' cy='50' r='15' fill='none' className='path' />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Preloader;