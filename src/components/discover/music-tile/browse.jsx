
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
export  default function  Browse(){
    return(
        <div className="flex ">
            <div className="basis-11/12 p-2 pt-6 text-xl font-bold">Browse</div>
            <div className="p-4">
                <div className="flex rounded-md border border-gray-300 p-2 divide-x">
                    <div className="pr-2">
                        <ChevronLeftIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                    <div className="pl-2">
                        <ChevronRightIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
