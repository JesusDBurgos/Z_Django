import React from "react";
import Webcam from "react-webcam";

function Vision_Camera() {

    //return <Webcam />;
    return (
        <div>

         <div class="video-wrap">
             <video id="video" playsinline autoplay></video>
             <Webcam />
         </div>

        <div class="controller">
             <button id="snap" width="640" height="480">Captura</button>
        </div>

        <canvas id="canvas" width="640" height="480"></canvas>

        </div>
        
    )

}

export default Vision_Camera