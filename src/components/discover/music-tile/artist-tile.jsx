

export default function ArtistTile(props) {
    const item = props.item;
    return (
        <div className="inline-block">
            <div>
                <img className="w-32 rounded-full h-32 object-cover" src={item.img}/></div>
            <div className="text-sm pt-2 items-start">{item.name}</div>
            <div className="text-xs text-gray-400 flex items-start">˜{item.followers} Followers</div>
        </div>
    )
}