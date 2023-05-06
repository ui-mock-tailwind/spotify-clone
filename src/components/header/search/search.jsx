import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

export default function Search() {
    return (
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
    )
}