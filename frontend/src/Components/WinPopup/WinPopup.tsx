import { Link } from "react-router";

const WinPopup = () => {
    return <div className="absolute h-screen w-screen bg-black bg-opacity-60 flex justify-center items-center z-10">
        <div className="bg-white rounded-2xl p-4 flex flex-col h-60 w-96">
            <p className="text-4xl text-center my-0 text-blue-600 font-bold">Félicitations !</p>
            <p className="text-center my-auto">Mais l'océan contient encore des secrets à découvrir</p>
            <Link to="/" className="mt-auto">
                <div className="bg-blue-600 text-white rounded-full py-2 text-center">OK</div>
            </Link>
        </div>
    </div>
}

export default WinPopup;