import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexbetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
    
  return (
  <nav>
    <div
    className={`${flexbetween} fixed top-0 z-30 w-full py-6`}
    >
        <div className={`${flexbetween} mx-auto w-5/6` }> 
            <div className={`${flexbetween} w-full gap-16` }>
                <img src={Logo} alt="logo" />
            </div>
            {isAboveMediumScreen ? (<div className={`${flexbetween} w-full`}>
                <div className={`${flexbetween} gap-8 text-sm`}>
                    <Link 
                     page="Home"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="About"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="Benefits"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="Training"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="Contact Us"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                </div>
                <div className={`${flexbetween} gap-8`}>
                    <p>Sign In</p>
                    <button>Become a Member</button>
                </div>
            
            </div> : (
                <div></div>
            )}

        </div>
    </div>
  </nav>
)

}

export default Navbar