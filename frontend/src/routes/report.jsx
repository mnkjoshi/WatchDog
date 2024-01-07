import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";
import useState from 'react';
import Placeholder from "../assets/Placeholder.png"

import wanted1Icon from "../assets/wanted1.png"
import wanted2Icon from "../assets/wanted2.png"

export default function Report() {

    function handleSubmission() {
        console.log("Hello");
    }

    return (
        <div class="report-main">
            <div class = "report-report">
                <p class = "report-info-top">Upload image of suspect to place them on emergency watchlist.</p>
                <div class = "report-box">
                    <input type = "file" id = "report-input" class = "report-input" onChange={() => handleSubmission}/>
                </div>
                <div class = "report-display">
                    <p class = "report-info">Drag and drop to upload!</p>
                    <img class = "report-image" src = {Placeholder}></img>
                </div>
                <button class = "report-submit">Submit</button>
            </div>
            <div class = "report-watchlist">
                <div class = "report-wanted">
                    <div class = "wanted-1">
                        <img src = {wanted1Icon} class = "wanted-1-icon"/>
                        <img class = "report-close" src = "https://cdn-icons-png.flaticon.com/512/1828/1828843.png"/>
                    </div>
                    <div class = "wanted-2">
                        <img src = {wanted2Icon} class = "wanted-2-icon"/>
                        <img class = "report-close" src = "https://cdn-icons-png.flaticon.com/512/1828/1828843.png"/>
                    </div>
                    <div class = "wanted-3">
                        <img class = "wanted-3-icon"/>
                    </div>
                    <div class = "wanted-4">
                        <img class = "wanted-4-icon"/>
                    </div>
                    <div class = "wanted-5">
                        <img class = "wanted-5-icon"/>
                    </div>
                    <div class = "wanted-6">
                        <img class = "wanted-6-icon"/>
                    </div>
                    <div class = "wanted-7">
                        <img class = "wanted-7-icon"/>
                    </div>
                </div>
            </div>
      </div>
    );
  }