import logo from './logo.svg';
import './App.css';
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {ChevronRightIcon} from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="bg-gray-500 h-screen flex flex-col">
        <div className="bg-amber-400 flex-1 flex">
            <div className="bg-green-400 w-80">LEFT</div>
            <div className="bg-orange-400 flex-1 flex flex-col">
                <div className="bg-white flex px-4">
                    <div className="flex-1 flex space-x-4">
                        <div className="flex items-center text-blue-400 border-b-2 border-blue-400 py-2">Browse</div>
                        <div className="flex items-center py-2">Categories</div>
                        <div className="flex items-center py-2">Charts</div>
                        <div className="flex items-center py-2">For You</div>
                        <div className="flex items-center py-2">New Releases</div>

                    </div>
                    <div className="flex items-center py-3 space-x-3">
                        <div className="flex rounded-md border border-gray-300 p-2 divide-x">
                            <div className="pr-2">
                               <ChevronLeftIcon className="h-5 w-5 text-gray-500"/>
                            </div>
                            <div className="pl-2">
                                <ChevronRightIcon className="h-5 w-5 text-gray-500"/>
                            </div>
                        </div>
                        <div>Search bar</div>
                    </div>
                </div>
                <div className="bg-cyan-400 flex-1"> Music </div>
            </div>

        </div>
        <div className="bg-blue-400 h-24">
            ABX
        </div>

    </div>
  );
}

export default App;
