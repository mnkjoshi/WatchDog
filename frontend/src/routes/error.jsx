import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";

import "../assets/particles.scss"

export default function ErrorPage() {
    let navigate = useNavigate()

    function HandleClick() {
        navigate(-1)
    }
    return (
        <div class="landing-main">
            <div class="landing-logo-container">
                <img src = {MainLogo} class="landing-logo"/>
            </div>
            <button onClick={HandleClick} class="landing-enter">RETURN TO PAGE</button>
      </div>
    );
  }