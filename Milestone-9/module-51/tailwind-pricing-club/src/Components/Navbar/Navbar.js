import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open , setOpen]=useState(false);
    const routes = [
        {id: 1, name: 'Home', link:'/home'},
        {id: 2, name: 'Shop', link:'/shop'},
        {id: 1, name: 'Deals', link:'/deals'},
        {id: 1, name: 'Coupon', link:'/Coupon'},
        {id: 1, name: 'Contracts', link:'/contracts'},

    ]
    
    return (
        <nav className='bg-indigo-200 '>
            <div onClick={()=>setOpen(!open)} className='w-10 h-10 md:hidden'>
                {open ? <XIcon></XIcon>:<MenuIcon></MenuIcon>}
            </div>
            
            <ul className={`md:flex justify-center  bg-indigo-200 absolute duration-500 w-full md:static ease-in${open ? 'top-6':'top-[-120px]'}`}>
                {routes.map(route=> <Link key={route.id}
                route={route}
                ></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;