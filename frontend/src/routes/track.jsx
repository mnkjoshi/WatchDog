import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import Placeholder from "../assets/Placeholder.png"
let holder = ""


import TrackerSuccess from "../components/tracker";
import TrackerFail from "../components/ftracker";

export default function Track() {

    const [count, setCount] = useState(0);

    function AddImage() {
        holder = document.getElementById("track-input").files[0]
        holder = URL.createObjectURL(holder)
        setCount(0)
    }

    return (
        <div class="track-main">
            <div class = "track-report">
                <p class = "report-info-top">Upload image of suspect to track their located movements.</p>
                <div class = "track-box">
                    <input type = "file" id = "track-input" class = "track-input" onChange={() => AddImage()}/>
                </div>
                <div class = "track-display">
                    <p class = "track-info">Drag and drop to upload!</p>
                    {holder == "" ? <img class = "track-image" src = {Placeholder}></img> : <img class = "track-image" src = {holder}></img>}
                    
                </div>  
                <button class = "track-submit" onClick = {() => setCount(count + 1)}>Submit</button>
            </div>
            <div class = "track-tracker">
                {count == 1 ? <TrackerSuccess/> : <TrackerFail/>}
            </div>
      </div>
    );
  }