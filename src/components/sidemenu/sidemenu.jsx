import {Bars3Icon} from "@heroicons/react/20/solid";
import {
    ArrowRightOnRectangleIcon,
    ChevronDownIcon, Cog8ToothIcon,
    FilmIcon,
    GlobeAltIcon,
    InboxIcon, InformationCircleIcon,
    MusicalNoteIcon,
    NewspaperIcon, UserCircleIcon,
} from "@heroicons/react/24/outline";


export default function SideMenu() {
    return (
        <div className=" w-60">
            <div className="flex flex-col  divide-y   py-4 ">
                <div className="flex px-3 pb-3 ">
                   <div className="flex-1"> <div className="flex font-bold text-gray-800 px-3s">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                        </svg>
             Maise
                   </div>
                    </div>
                    <div className="basis-1/6 ">
                        <Bars3Icon className="w-6 h-6 text-gray-400"/>
                    </div>
                </div>
<div className="flex px-3 pb-2 pt-7">
    <div className="px-2 basis-1/4">
        <img className=" w-10 h-10 rounded-full" src="https://t3.ftcdn.net/jpg/03/31/63/82/360_F_331638217_BsSy1TcziNymxOBAMGO6Zrc4hge5yQWz.jpg"/>
    </div>
    <div className="flex flex-col basis-2/4 text-xs text-center items-start">
        <div>Vladimir Raksha</div>
        <div className="text-gray-500">Premium Plan</div>
    </div>
    <div className="basis-1/4 pl-6 ">
        <ChevronDownIcon className="w-4 h-4 text-gray-500"/>
    </div>
</div>
                <div className="pt-6 flex flex-col">
                    <div className="flex p-1.5">
                        <div className="pl-3">
                            <InboxIcon className="h-4 w-4 text-gray-700"/>
                        </div>
                        <div className="text-gray-700 text-xs px-2">Storage</div>
                    </div>
                    <div className="flex p-1.5">
                        <div className="pl-3"><NewspaperIcon className="w-4 h-4 text-gray-700 "/></div>
                        <div className="text-gray-700 text-xs px-2">News</div>
                    </div>
                    <div className="flex p-1.5">
                        <div className="pl-3">
                            <FilmIcon className="h-4 w-4 text-gray-700"/>
                        </div>
                        <div className="text-gray-700 text-xs px-2">Movies</div>
                    </div>
                    <div className="flex border-l-2 border-sky-600  p-1.5 bg-gray-100 ">
                    <div className="pl-3"> <MusicalNoteIcon className="h-4 w-4 text-sky-600" /></div>
                        <div className="text-sky-600 text-xs px-2 ">Music</div>
                </div>
                    <div className="flex p-1.5">
                        <div className="pl-3">
<GlobeAltIcon className="h-4 w-4 text-gray-700"/>
                    </div>
                        <div className="text-gray-700 text-xs px-2">Travel</div>
                </div>
                </div>
                <div className="pt-6 flex flex-col">
                    <div className="flex p-1.5">
                        <div className="pl-3">
                            <UserCircleIcon className="h-4 w-4 text-gray-700"/>
                        </div>
                        <div className="text-gray-700 text-xs px-2">Account</div>
                    </div>
                    <div className="flex p-1.5">
                        <div className="pl-3">
                            <Cog8ToothIcon className="h-4 w-4 text-gray-700"/>
                        </div>
                        <div className="text-gray-700 text-xs px-2">Settings</div>
                    </div>
                    <div className="flex p-1.5">
                        <div className="pl-3">
                            <InformationCircleIcon className="h-4 w-4 text-gray-700"/>
                        </div>
                        <div className="text-gray-700 text-xs px-2">Help & Support</div>
                    </div>
                    <div className="flex p-1.5">
                        <div className="pl-3">
                            <ArrowRightOnRectangleIcon className="h-4 w-4 text-gray-700"/>
                        </div>
                        <div className="text-gray-700 text-xs px-2">Log Out </div>
                    </div>

                </div>
            </div>
        </div>
    )
}