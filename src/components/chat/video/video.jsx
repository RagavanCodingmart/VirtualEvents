import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

function Video() {
    const startVideo=()=>{
      const video = document.querySelector("#video");
      navigator.getUserMedia({video:{}},stream=>video.srcObject=stream, err=>alert("Kinly check the permission and try again"));
      console.log(video);
    }
    const stopVideo=()=>{
      const video = document.querySelector("#video");
      video.srcObject=null;
    }
    return (
        <div className="w-100">
            <video id="video" height="560" autoPlay ></video>
            <div className="flexRow m-auto">
                <button className="btn start" onClick={()=>{
                    startVideo()
                }}>Start <PlayArrowIcon />
                </button>
                <button className="btn stop" onClick={()=>{
                    stopVideo()
                }}>Stop <StopIcon />
                </button>
            </div>
        </div>
    )
}

export default Video
