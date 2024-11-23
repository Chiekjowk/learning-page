
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import './Header.css'
import { useState } from 'react'
const Header = () => {
    const [hide, setHde] = useState(false)
    const toggle = () => {
        hide ? setHde(false) : setHde(true)
    }
  return (
    <div className='header'>
        <div className="navbar">
            <div className="logo">
                <h1>Edu<span>vaa</span></h1>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About us</a></li>
                </ul>

            </div>
            <div className="signup">
                <button className="primary-btn-2">Sign Up</button>
            </div>
            <div className="menu">
                {
                    hide ? <IoMdClose style={{ color: "white", fontSize:"30px" }} onClick={toggle} /> : <IoMdMenu style={{ color: "white", fontSize:"30px" }} onClick={toggle} />
                }
                {
                    hide && <div className="hide">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>

                }
            </div>
        </div>
        <div className="content-1">
            <div className="left">
                <h1>Don't just dream</h1>
                <h1>learn with us</h1>
                <p>Education is the foundation for personal and social growth.It</p>
                <p>fosters critical thinking , creativity and problem-solving skills.</p>
                <button className="primary-btn-1">Read more</button>
            </div>
            <div className="right">
                <div className="right-img">
                    <img src="src/assets/study.jpg" alt="a girl studying" />
                </div>

            </div>
        </div>


    </div>
  )
}

export default Header
