import MainLogo from "../assets/WatchDogMain.png"
import { useNavigate } from "react-router-dom";
import "../assets/particles.scss"

import $ from 'jquery'

export default function Login() {
    let navigate = useNavigate()

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    function HandleClick() {

        $.getJSON("https://manav-watchdog-default-rtdb.firebaseio.com/users/" +  document.getElementById("login-user").value + ".json", function(data) {
            if (document.getElementById("login-pass").value == JSON.stringify(data)) {
                setCookie("logged-in", "true", 100)
                navigate("/dashboard")
            }
        });
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
            <input class = "login-user" id = "login-user" placeholder = "Username"/>
            <input class = "login-pass" id = "login-pass" placeholder = "Password" type = "password"/>
            <button onClick={HandleClick} class="login-enter">SUBMIT</button>
            <div class="login-quotes">
                <span>Detect</span>
                <span>Secure</span>
                <span>Protect</span>
            </div>
      </div>
    );
  }