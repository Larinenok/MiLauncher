import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  
    return (
        <div class="main">
            <div class="header centered">
                <h3>Time</h3>
            </div>
            <div class="work centered">
                <h3>Work</h3>
            </div>
            <div class="unwork centered">
                <h3>Procrastination</h3>
            </div>
        </div>
    );
}

export default App;
