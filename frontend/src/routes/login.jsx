import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";


export default function Login() {
    let navigate = useNavigate()

    function HandleClick() {
        navigate("/login")
    }

    return (
        <div class="landing-main">
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