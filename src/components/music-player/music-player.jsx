import {Cog6ToothIcon, HeartIcon, SpeakerWaveIcon} from "@heroicons/react/20/solid";
import { PauseCircleIcon} from "@heroicons/react/24/solid";

export default function MusicPlayer() {
    return (
        <div className=" h-24 flex ">
            <div className="flex basis-1/4  p-2">
                <div className=" basis-1/4">
                <img className="w-20 h-20 rounded-md" src="https://upload.wikimedia.org/wikipedia/en/7/7c/Taylor_Swift_-_Blank_Space_%28Official_Single_Cover%29.png" alt="the balnk pace " />
                </div>
            <div  className=" flex flex-1 flex-col ">
                <div className="flex  ">Shallow <HeartIcon className="ml-1 w-4 h-4 text-red-700 items-center"/></div>
                <div className="text-gray-400">Lady Gaga</div>
            </div>
            </div>
            <div className="flex basis-1/2 flex-col  ">
                <div className="flex items-center pt-2 px-64">
                   <div className="text-gray-400"> <svg className="w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/>
                    </svg>
                       </div>
<div className="text-gray-400 mx-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className=" w-6 h-6">
        <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
    </svg>
</div>


                    <PauseCircleIcon className="w-9 h-9 text-sky-500"/>
                    <div className="text-gray-400 mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                        </svg>

                    </div>
                    <div className="text-gray-400">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path
                                d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/>
                        </svg>
                    </div>
                </div>
                <div className="p-3 flex">
                    <div className="items-center flex text-gray-400 pr-2 text-sm">1:24</div>
                    <div className="flex-1 items-center pt-3">
                    <div className="relative h-1 bg-gray-200  ">
                        <div className="absolute h-full w-1/2 bg-sky-500 flex items-center justify-end">
                            <div className="rounded-full w-3 h-3 bg-sky-500 shadow"></div>
                        </div>
                        </div>
                    </div>
                    <div className="items-center flex text-gray-400 pl-2 text-sm">4:56</div>
                </div>
            </div>
            <div className="pl-40 flex  items-center ">
                <SpeakerWaveIcon className="flex-auto w-7 h-7 text-gray-400"/>
                <div>
                    <div className="flex w-24 bg-gray-400 "></div>
                    <div className="absolute h-1 w-24"></div>
                    <div className="relative h-1 w-20  bg-sky-500   "></div>
                </div>
               <Cog6ToothIcon className="w-6 h-6 text-gray-400"/>


            </div>
        </div>
    )
}