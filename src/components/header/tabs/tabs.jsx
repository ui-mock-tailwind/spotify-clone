export default function Tabs() {
    return (
        <div className="flex-1 flex space-x-4">
            <div className="flex items-center text-blue-400 border-b-2 border-blue-400 py-2">Browse</div>
            <div className="flex items-center py-2">Categories</div>
            <div className="flex items-center py-2">Charts</div>
            <div className="flex items-center py-2">For You</div>
            <div className="flex items-center py-2">New Releases</div>

        </div>
    )
}