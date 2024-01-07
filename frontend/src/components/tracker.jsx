import Cam1Icon from "../assets/Cam1.webp"
import Cam2Icon from "../assets/Cam2.webp"
import Cam3Icon from "../assets/Cam3.webp"

export default function TrackerSuccess() {
    return (
        <div class = "track-found">
            <div class = "track-picture">
                <p>Target Detected</p>
                <img src = {Cam3Icon}/>
            </div>
            <div class = "track-divider"/>
            <div class = "track-camera1">
                 <p>Camera 1 Detected Target</p>
                 <img src = {Cam1Icon}/>
            </div>
            <div class = "track-divider"/>
            <div class = "track-camera2">
                <p>Camera 2 Detected Target</p>
                <img src = {Cam2Icon}/>
            </div>
            <div class = "track-divider"/>
            <div class = "track-camera3">
                <p>Camera 3 Detected Target</p>
                <img src = {Cam3Icon}/>
            </div>
        </div>
    );
  }