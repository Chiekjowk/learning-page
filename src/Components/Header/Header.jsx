import './Header.css'

const Header = () => {
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
                <button className="btn">Sign Up</button>
            </div>
        </div>
        <div className="content">
            <div className="left">
                <h1>Don't just dream</h1>
                <h1>learn with us</h1>
                <p>Education is the foundation for personal and social growth.It</p>
                <p>fosters critical thinking , creativity and problem-solving skills.</p>
                <button className='read'>Read more</button>
            </div>
            <div className="right">
                <div className="img">
                    <img src="src/assets/study.jpg" alt="a girl studying" />
                </div>

            </div>
        </div>


    </div>
  )
}

export default Header
