import { Outlet, Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import './Layout.css'
import blob1 from './assets/blob1.svg'
import blob2 from './assets/blob2.svg'
import blob3 from './assets/blob3.svg'
import blob4 from './assets/blob4.svg'

const Layout = () => {
  return (
    <>
      <div className="opacity-40 absolute w-screen h-screen -z-10">
        <img src={blob1} className="blob1 rotating_div"/>
        <img src={blob2} className="blob2 rotating_div"/>
        <img src={blob3} className="blob3 reverse"/>
        <img src={blob4} className="blob4 reverse"/>
      </div>
      
      <nav>
        <Link to="/" className="returnButton"><FontAwesomeIcon icon={faArrowLeftLong} color="black" /></Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;