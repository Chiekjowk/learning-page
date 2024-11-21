import metting from '../../assets/metting.jpg'
import PrimaryButton from '../../utilit/PrimaryButton'
import './Section6.css'


const Section6 = () => {
  return (
    <div className='section-6'>
        <div className="info">
            <h1>Get Ready to learn and Grow your Skill</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quos praesentium veritatis incidunt tempore perferendis illo culpa optio vitae cupiditate harum ea delectus magni possimus corrupti, reiciendis, odit aperiam nisi?</p>
            <PrimaryButton text="Get Start Now"/>
        </div>
        <img src={metting} alt="" />
    </div>
  )
}

export default Section6