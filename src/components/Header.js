import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";




const Header = ()=>{

const cartitems = useSelector((state)=>state.cart.items);


    return(
        <div className='flex justify-between bg-pink-200'>
            <div className='logo-conatiner'>
                <img className='w-30' src='data:image/png;base64,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' alt='Logo' />
            </div>
            <div className='flex items-center'>
                <ul className="flex justify-between p-4 m-4 gap-10 hover:cursor-auto  ">
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "bg-pink-400 rounded": undefined
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                         <NavLink
                            className={({ isActive }) =>
                            isActive ? "bg-pink-400 rounded": undefined
                            }
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                     <li>
                         <NavLink
                            className={({ isActive }) =>
                                isActive ? "bg-pink-400 rounded": undefined
                            }
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                   
                    <li> <NavLink  className={({ isActive }) =>
                               isActive ? "bg-pink-400 rounded": undefined
                            } to = '/cart'>Cart🛒 ({cartitems.length})</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default Header;