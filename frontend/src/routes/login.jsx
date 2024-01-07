import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";


export default function Login() {
    let navigate = useNavigate()

    function HandleClick() {
        navigate("/login")
    }

    return (
        <div class="login-main">
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