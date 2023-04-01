import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../media/logo/Logo'
import KhetAILogo from '../media/logo/KhetiAILogo'

export default function Nav() {
    
  return (
    <>
        <nav className='flex w-screen flex-cols bg-slate-50/30 backdrop-blur-md justify-between items-center px-40 py-6 shadow-sm text-lg fixed z-50'>
            <div>
            <Link to='/'>
                <KhetAILogo/>
            </Link>
            </div>
            <div>
                <ul className='flex gap-10 '>
                    <Link to='/' className='font-bold cursor-pointer outline-none'>home</Link>
                    <Link to='/learning' className='hover:font-bold cursor-pointer outline-none'>learnings</Link>
                    <Link to='/explore' className='hover:font-bold cursor-pointer outline-none'>explore</Link>
                    <Link to='/discussion' className='hover:font-bold cursor-pointer outline-none'>discussion forums</Link>
                </ul>
            </div>
                    <Link to='/login' className='bg-green-500 text-black px-6 py-2 rounded-3xl'>login</Link>
        </nav>
    </>
    )
}
