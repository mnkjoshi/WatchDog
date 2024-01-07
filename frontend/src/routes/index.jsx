import $ from 'jquery'
import React, {useState} from 'react';
import Placeholder from "../assets/Placeholder.png"
let holder = ""

import TrackerSuccess from "../components/tracker";
import TrackerFail from "../components/ftracker";


export default function Index() {

    const [count, setCount] = useState(0);
    return (
    <div class="index-main">
        <div class = "index-watchlist">
                <div class = "index-users">
                    <div class = "index-user-1">
                    </div>
                    <div class = "index-user-2">
                    </div>
                </div>
            </div>
        <div class = "index-tracker">
            {count == 1 ? <TrackerSuccess/> : <TrackerFail/>}
        </div>
    </div>
    );
  }