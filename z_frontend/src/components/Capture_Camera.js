import React from 'react'
//import React, { useEffect, useState } from 'react'

function Capture_Camera() {

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector('span#errorMsg');

const constraints = {
  audio: true,
  video: {
    width: 1280, height: 720
  }
};

// Access webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
}

// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

// Load init
init();

// Draw image
var context = canvas.getContext('2d');
snap.addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
});

    return (
        <div>

         <div class="video-wrap">
             <video id="video" playsinline autoplay></video>
         </div>

        <div class="controller">
             <button id="snap">Captura</button>
        </div>

        <canvas id="canvas" width="640" height="480"></canvas>

        </div>
        
    )

}

export default Capture_Camera