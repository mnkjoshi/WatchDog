import MainLogo from "../assets/WatchDogSimple.png"
import { Outlet, useNavigate } from "react-router-dom";
import darkMode from "../assets/darkMode.png"


export default function Dashboard() {
    let navigate = useNavigate()

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    function HandleClick(which) {
        console.log(which);
        switch (which) {
            case 0:
                navigate("/dashboard")
                break;
            case 1:
                navigate("/dashboard/report")
                break;
            case 2:
                navigate("/dashboard/track")
                break;
            case 3:
                navigate("/dashboard/analytics")
                break;
            case 4:
                setCookie("logged-in", false, -1);
                navigate("/")
                break;
        }
    }

    return (
        <div class="dashboard-main">
            <div class="dashboard-topbar">
                <img src = {MainLogo} class="dashboard-logo"/>
                <p class  = "dashboard-title">WatchDog</p>
                <div class = "dashboard-divider"></div>
                <div class = "dashboard-buttons">
                    <button onClick={() => HandleClick(0)} class="dashboard-home">Home</button>
                    <div class = "dashboard-button-divider"></div>
                    <button onClick={() => HandleClick(1)} class="dashboard-report">Report</button>
                    <div class = "dashboard-button-divider"></div>
                    <button onClick={() => HandleClick(2)} class="dashboard-track">Track</button>
                    <div class = "dashboard-button-divider"></div>
                    {/* <button onClick={() => HandleClick(3)} class="dashboard-analytics">Analytics</button> */}
                </div>
                <div class = "dashboard-toggles">
                    <div class = "dashboard-divider"></div>
                    <button class = "dashboard-mode-toggle"><img class = "dashboard-mode-icon" src = {darkMode}/></button>
                    <button class = "dashboard-logout"  onClick={() => HandleClick(4)}>Sign out</button>
                </div>
            </div>
            <div class = "dashboard-outlet">
                <Outlet/>
            </div>
      </div>
    );
  }