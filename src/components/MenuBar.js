import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const MenuBar = () => {
    const [showMenu, setShowMenu] = useState('false');
    const handleMenuToggle = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className="w-[100vw] h-[8vh] overflow-x-hidden flex flex-row justify-between items-center px-8 lg:pl-20 bg-black "
        // style={{ borderBottom: 'black' }}
        >
            <div className="">
                <h1 className="text-3xl text-slate-500">T <span className="text-white">|</span> R<span className="text-xl font-light">entals</span></h1>
            </div>
            <div className="lg:flex md:flex flex-row gap-6 hidden lg:relative md:relative text-white">
                <p>Home</p>
                <p>Car Companies</p>
                <p>Contact Us</p>
                <p>Help</p>
            </div>
            <div className="lg:flex md:flex gap-4 hidden lg:relative md:relative">
                <Button variant="outlined">Login</Button>
                <Button variant="contained">Sign Up</Button>
            </div>
            <div className="lg:hidden md:hidden z-20">
                {showMenu === 'true' && (<ClearIcon className="cursor-pointer right-0 z-10" style={{ fontSize: '48px', color: 'white' }} onClick={handleMenuToggle} />)}
                {showMenu === 'false' && (<MenuIcon className='cursor-pointer right-0 z-10' style={{ fontSize: '32px', color: 'white' }} onClick={handleMenuToggle} />)}

            </div>

            {showMenu === 'true' &&
                (<div className={`w-[70vw] h-[80vh] z-20 rounded-l-xl  absolute right-0 top-[10vh] backdrop-blur-sm bg-black/30 border border-red-500 px-6 py-6 flex flex-col justify-between lg:hidden md:hidden `}>
                    <div className="flex justify-end">
                        {/* <ClearIcon className="cursor-pointer right-0" style={{ fontSize: '48px', color: 'white' }} onClick={() => { setShowMenu(false) }} /> */}
                    </div>


                    <div className="text-white text-2xl font-bold z-20">
                        <p className="cursor-pointer hover:text-slate-200 hover:text-3xl mb-4">Homepage</p>
                        <p className="cursor-pointer hover:text-slate-200 hover:text-3xl mb-4">Car Companies</p>
                        <p className="cursor-pointer hover:text-slate-200 hover:text-3xl mb-4">Contact Us</p>
                        <p className="cursor-pointer hover:text-slate-200 hover:text-3xl mb-4">Help</p>
                    </div>
                    <div className="flex gap-4 pt-[10vh]">

                        <Button variant="outlined">Login</Button>
                        <Button variant="contained">Sign Up</Button>

                    </div>
                </div>)
            }
            {/* </div> */}

        </div>
    )
}
export default MenuBar;