import Tabs from "./tabs/tabs";
import Search from "./search/search";

export default function Header() {
    return (
        <div className="bg-white flex px-4">
            <Tabs />
            <Search />
        </div>
    )
}