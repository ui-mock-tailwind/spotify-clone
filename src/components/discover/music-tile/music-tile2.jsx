import {PlayCircleIcon} from "@heroicons/react/24/outline";

export default function MusicTile2(props) {
    const item = props.item;
    return (
        <div className="inline-block">
            <div>
                <img className="w-32 rounded h-32" src={item.image}/></div>
            <div className="text-sm pt-2 items-start">{item.name}</div>
            <div className="text-xs text-gray-400 flex items-start">˜<PlayCircleIcon className="w-3 h-3"/>{item.songs} Songs</div>
        </div>
    )
}