import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";

import "../assets/particles.scss"

export default function Root() {
    let navigate = useNavigate()

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    function HandleClick() {
        if (getCookie("logged-in")) {
            navigate("/dashboard")
        } else {
            navigate("/login")
        }
        
    }
    return (
        <div class="landing-main">
            <div class="animation-wrapper">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
            </div>
            <div class="landing-logo-container">
                <img src = {MainLogo} class="landing-logo"/>
            </div>
            <button onClick={HandleClick} class="landing-enter">ENTER</button>
            <div class="landing-quotes">
                <span>Detect</span>
                <span>Secure</span>
                <span>Protect</span>
            </div>
      </div>
    );
  }