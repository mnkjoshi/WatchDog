import MainLogo from "../assets/WatchDogSimple.png"
import { Outlet, useNavigate } from "react-router-dom";
import darkMode from "../assets/darkMode.png"


export default function Dashboard() {
    let navigate = useNavigate()

    function HandleClick(which) {
        switch (which) {
            case 1:

                break;
            case 2:

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
                    <button onClick={() => HandleClick(3)} class="dashboard-analytics">Analytics</button>
                </div>
                <div class = "dashboard-toggles">
                    <div class = "dashboard-divider"></div>
                    <button class = "dashboard-mode-toggle"><img class = "dashboard-mode-icon" src = {darkMode}/></button>
                    <button class = "dashboard-logout">Sign out</button>
                </div>
            </div>
            <div class = "dashboard-outlet">
                <Outlet/>
            </div>
      </div>
    );
  }