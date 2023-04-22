import React from 'react'
import Link from 'next/link'
import {BsChevronDown} from 'react-icons/bs'

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

function Menu({showCatMenu,setShowCatMenu}) {
  return (
    <ul className='hidden md:flex items-center gap-8 font-semibold'>
      {data.map((item)=>{
        return(
            <React.Fragment key={item.id}>
                {/*!=true & ?=if item nt defined skip without showing err*/}
                {!!item?.subMenu?(
                    <li className='flex items-center
                    cursor-pointer gap-2 relative' 
                    onMouseEnter={()=> setShowCatMenu(true)}
                    onMouseLeave={() => setShowCatMenu(false)}>
                        {item.name}
                        <BsChevronDown size={14}/>

                        {showCatMenu &&(
                            <ul className='bg-white absolute top-6 left-0
                            min-w-[250px] shadow-lg rounded-xl'>
                                {subMenuData.map((subMenu)=>{
                                return(
                                <Link key={subMenu.id} href='/' 
                                onClick={()=> setShowCatMenu(false)}>
                                    <li className='h-12 flex justify-between
                                    items-center px-3 hover:bg-black/5 rounded-lg'>
                                        {subMenu.name}
                                    <span>20</span></li>
                                    </Link>
                            )})}</ul>
                        )}
                    </li>
                ):(
                    <li className='cursor-pointer'>
                        <Link href={item?.url}>{item.name}</Link>
                    </li>
                )}
            </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Menu
