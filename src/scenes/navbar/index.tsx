import { useEffect, useState } from "react";
// import { Bars3Icon, XMarkIcon} from "@heroicons/react";
import {Link} from './Link'
import Logo from "@/assets/Logo.png"
useEffect 

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (<nav>
    <div
      className={`${flexBetween} fixed top-0 z-30 w-full`}
    >
      <div className={`${flexBetween} mx=auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE */}
          <img alt="logo" src={Logo}/>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 texxt-sm`}>
              <Link 
              page="Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>Home
              <Link 
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>Benefits
              <Link 
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>Our Classes
              <Link 
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>Contact Us
            </div>
          </div>
            <p>Sign In</p>
            <button>Become a Member</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar