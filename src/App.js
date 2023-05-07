
import './App.css';

import SideMenu from "./components/sidemenu/sidemenu";
import MusicPlayer from "./components/music-player/music-player";
import Header from "./components/header/header";
import Discover from "./components/discover/discover";

function App() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 flex overflow-auto">
                <SideMenu/>
                <div className="flex-1 flex flex-col overflow-auto">
                    <Header/>
                    <div className="flex-1 overflow-auto">
                        <Discover/>
                    </div>
                </div>
            </div>
            <MusicPlayer/>
        </div>
    );
}

export default App;
