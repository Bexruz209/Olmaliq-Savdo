import MenuComp from '../MenuComp/MenuComp';
import './style.css';

function HomeCompo() {
    const time = new Date().getHours()
    const minute = new Date().getMinutes()
    const week = new Date().getDay()
 
    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <div className="left-text">
                        <p className="nav-text">{time}:{minute < 10 ? "0" + minute : minute}  {week === 1 ? "Dushanba" : week === 2 ? "Sashanba" : week === 3 ? "Chorshanba" : week === 4 ? "Payshanba" : week === 5 ? "Juma" : week === 6 ? "Shanba" : week === 7 ? "Yakshanba" : "err"}</p>
                    </div>
                    <div className="right-text">
                        <select className='til'>
                            <option className='tio'>O'zbekcha</option>
                            <option className='tio'>Russia</option>
                            <option className='tio'>English</option>
                        </select>
                        {/* <p className="nav-text"> <i class="fa-solid fa-caret-down"></i></p> */}

                    </div>
                </nav>
            </div>
            <MenuComp />
        </>
    )
}

export default HomeCompo
