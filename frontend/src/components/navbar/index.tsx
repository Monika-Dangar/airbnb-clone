import { NavLink } from 'react-router-dom'
import { HiHomeModern } from "react-icons/hi2";
import { GiAirBalloon } from "react-icons/gi";
import { FaConciergeBell } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { FaRegHeart } from "react-icons/fa6";

const index = () => {
    return (
        <>
            <header className=' flex h-30 bg-yellow-50'>
                <div className='flex items-center ml-10'>
                    <img src={logo} alt="logo" className='w-32 h-auto' />
                </div>
                <div className='flex items-center w-full justify-center mr-10'>
                    <ul className='flex space-x-16'>
                        <li className='flex items-center space-x-1'>
                            <HiHomeModern className='h-8 w-8' />
                            <NavLink to={"/"} className="font-bold text-xl" >Homes</NavLink>
                        </li>
                        <li className='flex items-center space-x-1'>
                            <GiAirBalloon className='h-8 w-8' />
                            <NavLink to={"/service"} className="font-bold text-xl" >Services</NavLink>
                        </li>

                        <li className='flex items-center space-x-1'>
                            <FaConciergeBell className='h-8 w-8' />
                            <NavLink to={"/experience"} className="font-bold text-xl" >Experiences</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center mr-10 cursor-pointer hover:'>
                    <NavLink to={"/wishlist"} >
                        <FaRegHeart className='h-8 w-8' />
                    </NavLink>
                </div>
            </header>
        </>
    )
}

export default index