import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";
import "../assets/particles.scss"

export default function Login() {
    let navigate = useNavigate()

    function HandleClick() {
        navigate("/dashboard")
    }

    return (
        <div class="login-main">
            <div class="animation-wrapper">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
            </div>
            <div class="login-logo-container">
                <img src = {MainLogo} class="login-logo"/>
            </div>
            <input class = "login-user" placeholder = "Username"/>
            <input class = "login-pass" placeholder = "Password" type = "password"/>
            <button onClick={HandleClick} class="login-enter">SUBMIT</button>
            <div class="login-quotes">
                <span>Detect</span>
                <span>Secure</span>
                <span>Protect</span>
            </div>
      </div>
    );
  }