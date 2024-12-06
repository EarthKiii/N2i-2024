import { Link } from "react-router";
import podcast1 from "../../assets/podcast1.mp3"
import podcast2 from "../../assets/podcast2.mp3"
import homeLogo from "../../assets/home_logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Home = () => {
    const podcast1Elm = useRef<HTMLAudioElement>(null);
    const podcast2Elm = useRef<HTMLAudioElement>(null);

    return <div className="flex flex-col justify-center items-center py-12 z-10 h-screen">
        <div className="flex flex-col justify-center items-center h-3/4 my-12">
            <img className="size-64 w-auto" src={homeLogo} alt="logo" />
            <h1 className="text-8xl text-blue-600 mb-4 mt-16 flex-grow-0">Mem'Ocean</h1>

            <div className="bg-blue-600 text-4xl text-white py-3 px-16 rounded-full font-bold tracking-wide transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110"><Link to="/game">COMMENCER</Link></div>
        </div>

        <div className="flex justify-center gap-4 w-2/3">
            <div className="bg-blue-600 text-xl text-white py-3 px-12 flex-1 w-0 rounded-full text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110"><Link to="/credits">Crédits</Link></div>
            <div className="bg-blue-600 text-xl text-white py-3 px-12 flex-1 w-0 rounded-full text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110"><Link to="/collection">Collection</Link></div>
            <div className="bg-blue-600 text-xl text-white py-3 px-12 flex-1 w-0 rounded-full text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:scale-110"><Link to="/pantheon">Panthéon</Link></div>
        </div>
        <audio ref={podcast1Elm} src={podcast1}></audio>
        <button onClick={() => {
            podcast1Elm.current?.paused ? podcast1Elm.current?.play() : podcast1Elm.current?.pause()
        }}><FontAwesomeIcon icon={faPodcast} color="blue"/></button>
        <audio ref={podcast2Elm} src={podcast2}></audio>
        <button onClick={() => {
            podcast2Elm.current?.paused ? podcast2Elm.current?.play() : podcast2Elm.current?.pause()
        }}><FontAwesomeIcon icon={faPodcast} color="blue"/></button>
    </div>
}

export default Home;