import { Link } from "react-router";

const Home = () => {
    return <div className="flex flex-col justify-center items-center py-12 z-10 h-screen">
        <div className="flex flex-col justify-center items-center h-3/4 my-12">
            <img className="size-64 w-auto" src="../src/assets/home_logo.png" alt="logo" />
            <h1 className="text-8xl text-blue-600 mb-4 mt-16 flex-grow-0">Mem'Ocean</h1>

            <Link to="/game"><div className="bg-blue-600 text-4xl text-white py-3 px-16 rounded-full font-bold tracking-wide transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110">COMMENCER</div></Link>
        </div>

        <div className="flex justify-center gap-4 w-2/3">
            <div className="bg-blue-600 text-xl text-white py-3 px-12 flex-1 w-0 rounded-full text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110">Crédits</div>
            <div className="bg-blue-600 text-xl text-white py-3 px-12 flex-1 w-0 rounded-full text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110">Collection</div>
            <div className="bg-blue-600 text-xl text-white py-3 px-12 flex-1 w-0 rounded-full text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110">Panthéon</div>
        </div>
    </div>
}

export default Home;