import MusicTile from "./music-tile/music-tile";
import Browse from "./music-tile/browse";
import MyPlaylist from "./music-tile/myPlaylist";

import MusicTile2 from "./music-tile/music-tile2";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import ArtistTile from "./music-tile/artist-tile";

const browseList = [
    {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Pop hits",
        followers: "8,823,567",
    },
    {
        image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0NDgzMjg2NjQ5NzQyNjk2/ten-top-workout-vidios.png",
        name: "Workout",
        followers: "1,611,234",
    },
    {
        image: "https://i1.sndcdn.com/artworks-000213396916-xotadc-t500x500.jpg",
        name: "Chill Hits",
        followers: "3,345,567",
    },
    {
        image: "https://i.scdn.co/image/ab67616d0000b273da75b1c6dc067c74f759c45a",
        name: "Sad Feeling",
        followers: "2,122,820",
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/419f7rGos-L._UXNaN_FMjpg_QL85_.jpg",
        name: "Friday's Night Party ",
        followers: "827,234",
    },
    {
        image: "https://i.scdn.co/image/ab67706f000000020776a5b5a70f372747584c2b",
        name: "Punjabi 101",
        followers: "1,345,345",
    },
    {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Pop hits",
        followers: "8,823,567",
    },
    {
        image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0NDgzMjg2NjQ5NzQyNjk2/ten-top-workout-vidios.png",
        name: "Workout",
        followers: "1,611,234",
    },
    {
        image: "https://i1.sndcdn.com/artworks-000213396916-xotadc-t500x500.jpg",
        name: "Chill Hits",
        followers: "3,345,567",
    },
    {
        image: "https://i.scdn.co/image/ab67616d0000b273da75b1c6dc067c74f759c45a",
        name: "Sad Feeling",
        followers: "2,122,820",
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/419f7rGos-L._UXNaN_FMjpg_QL85_.jpg",
        name: "Friday's Night Party ",
        followers: "827,234",
    },
    {
        image: "https://i.scdn.co/image/ab67706f000000020776a5b5a70f372747584c2b",
        name: "Punjabi 101",
        followers: "1,345,345",
    },
    {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Pop hits",
        followers: "8,823,567",
    },
    {
        image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0NDgzMjg2NjQ5NzQyNjk2/ten-top-workout-vidios.png",
        name: "Workout",
        followers: "1,611,234",
    },
    {
        image: "https://i1.sndcdn.com/artworks-000213396916-xotadc-t500x500.jpg",
        name: "Chill Hits",
        followers: "3,345,567",
    },
    {
        image: "https://i.scdn.co/image/ab67616d0000b273da75b1c6dc067c74f759c45a",
        name: "Sad Feeling",
        followers: "2,122,820",
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/419f7rGos-L._UXNaN_FMjpg_QL85_.jpg",
        name: "Friday's Night Party",
        followers: "827,234",
    },
    {
        image: "https://i.scdn.co/image/ab67706f000000020776a5b5a70f372747584c2b",
        name: "Punjabi 101",
        followers: "1,345,345",
    },
]
const albumList = [
    {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "All is R&B",
        songs: "56",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "This is Maroon 5",
        songs: "36",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Acoustic Songs",
        songs: "41",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Fresh Songs",
        songs: "23",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Classic Hits",
        songs: "62",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Best Night Hits",
        songs: "73",
    },
    {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "All is R&B",
        songs: "56",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "This is Maroon 5",
        songs: "36",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Acoustic Songs",
        songs: "41",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Fresh Songs",
        songs: "23",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Classic Hits",
        songs: "62",
    }, {
        image: "https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg",
        name: "Best Night Hits",
        songs: "73",
    },
]

const artistList = [
    {
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    },{
        img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQKQSKBGyI-njQ_VhjpOMQYSKyoZJ1gRYGxYqN5TqluScr9Y03OoROn1vpOEd-kWponF-sxq4rBCr3V6tgmXT6MF2OUbiySqLOqgvEhz3xt",
        name: "Lady Gaga",
        followers: "1,234,567"
    }

]

export default function Discover() {
    return (
        <div className="flex-1 flex flex-col divide-y p-7">
            <Browse/>
            <div className="p-4 w-full overflow-x-auto hide-scrollbar whitespace-nowrap space-x-5">
                {browseList.map((item, index) => {
                    return <MusicTile key={index} item={item}/>;
                })}
            </div>
            <div>
                <MyPlaylist/>

                <div className="p-4 w-full overflow-x-auto hide-scrollbar whitespace-nowrap space-x-5">
                    {albumList.map((item, index) => {
                        return <MusicTile2 key={index} item={item}/>;
                    })}
                </div>
            </div>
            <div>

                <div className="flex ">
                <div className="basis-11/12 p-2 pt-6 text-xl font-bold">More Like Lady Gaga</div>
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
                <div className="p-4 w-full overflow-x-auto hide-scrollbar whitespace-nowrap space-x-5">
                    {artistList.map((item, index) => {
                        return <ArtistTile key={index} item={item}/>;
                    })}
                </div>
            </div>
        </div>
    )
}