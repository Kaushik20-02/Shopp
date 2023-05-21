import React,{useState, useEffect} from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import download from '../public/assets/logo.svg'
import Image from 'next/image'
import Menu from './Menu'
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from './MobileMenu'

function Header() {
  const [mobileMenu, setMobileMenu]= useState(false)
  const [showCatMenu, setShowCatMenu]= useState(false)
  const [show, setShow]= useState('translate-y-0')
  const [lastScrollY, setLastScrollY]= useState(0)
  const [categories, setCategories]= useState(null)

  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("-translate-y-[80px]");
        } else {
            setShow("shadow-sm");
        }
    } else {
        setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
}, [lastScrollY]);

  return (
    <header className={`w-full h-[50px] md:h-[80px]
    bg-white flex items-center justify-between z-20 top-0
    sticky transition duration-300 ${show}`}>
    
    <Wrapper className="h-[60px] flex justify-between items-center">
      <Link href='/'>
        <Image className='w-[4rem] md:w-[2rem]' src={download} alt='none'/>
      </Link>

      <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/>
      {mobileMenu && (
        <MobileMenu showCatMenu={showCatMenu} 
        setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}/> 
      )}
    <div className='flex items-center gap-2'>
      
      <div className='w-8 md:w-12 h-8 md:h-12 flex cursor-pointer
      justify-center items-center hover:bg-black/10 rounded-full'>
        <IoMdHeartEmpty className='text-[19px] md:text[24px]'/>
        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] 
        rounded-full bg-red-600 absolute top-3 right-[6.5rem] md:right-[6rem] md:top-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
          10</div>
      </div>

      <Link href='/cart'>
      <div className='w-8 md:w-12 h-8 md:h-12 flex cursor-pointer
      justify-center items-center hover:bg-black/10 rounded-full'>
        <BsCart className='text-[19px] md:text[24px]'/>

        </div>
      </Link>

      <div className='w-8 md:w-12 h-8 md:h-12 flex cursor-pointer md:hidden
      justify-center items-center hover:bg-black/10 rounded-full'>
        {mobileMenu ? (
          <VscChromeClose className='text-[16px]' 
          onClick={()=> setMobileMenu(false)}/>
        ):( 
          <BiMenuAltRight className='text-[20px]' 
          onClick={()=> setMobileMenu(true)}/>
        )}
      </div>
    </div>
    </Wrapper>
    </header>
  )
}

export default Header