import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";
import useState from 'react';
import Placeholder from "../assets/Placeholder.png"

import wanted1Icon from "../assets/wanted1.png"
import wanted2Icon from "../assets/wanted2.png"

export default function Track() {

    function handleSubmission() {
        console.log("Hello");
    }

    return (
        <div class="track-main">
            <div class = "track-report">
                <div class = "track-box">
                    <input type = "file" id = "track-input" class = "track-input" onChange={() => handleSubmission}/>
                </div>
                <div class = "track-display">
                    <img class = "track-image" src = {Placeholder}></img>
                </div>
                <button class = "track-submit">Submit</button>
            </div>
            <div class = "track-tracker">
                <div class = "track-found">
                    
                </div>
            </div>
      </div>
    );
  }