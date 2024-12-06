import { Link } from "react-router";

const WinPopup = () => {
    return <div className="absolute h-screen w-screen bg-black bg-opacity-60 flex justify-center items-center z-10">
        <div className="bg-white rounded-2xl p-4 flex flex-col h-60 w-96">
            <h1>GG mon salaud!!</h1>
            <Link to="/">
                <div className="bg-blue-600 text-white rounded-full py-2 mt-auto text-center">OK</div>
            </Link>
        </div>
    </div>
}

export default WinPopup;