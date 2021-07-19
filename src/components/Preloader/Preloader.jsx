import React from "react";
import "./Preloader.css";

const Preloader = ({ isPreloaderOpen }) => {
  return (
    <div className = {`preloader ${isPreloaderOpen }`}>
      <div className = 'preloader__container'> 
       <span className = 'preloader__round'></span>
      </div>
    </div>
  )
}

export default Preloader;