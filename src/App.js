import logo from './logo.svg';
import './App.css';
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {ChevronRightIcon} from "@heroicons/react/24/solid";
import SideMenu from "./components/sidemenu/sidemenu";
import MusicPlayer from "./components/music-player/music-player";
import Header from "./components/header/header";
import Discover from "./components/discover/discover";

function App() {
  return (
    <div className="bg-gray-500 h-screen flex flex-col">
        <div className="bg-amber-400 flex-1 flex">
            <SideMenu />
            <div className="bg-orange-400 flex-1 flex flex-col">
                <Header />
                 <Discover />
            </div>
        </div>
        <MusicPlayer />
    </div>
  );
}

export default App;
