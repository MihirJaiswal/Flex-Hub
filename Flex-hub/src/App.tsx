import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home";
import AboutUs from "@/components/aboutus";
import Benefits from "@/components/benefits";
import Training from "@/components/training";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0)
      {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

  return (
    <div className='app bg-gray-50'>
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Training setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
