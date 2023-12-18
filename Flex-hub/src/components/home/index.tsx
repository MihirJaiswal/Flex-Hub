import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import HomePageText from '@/assets/HomePageText.png'
import icon1 from '@/assets/class-icon-1.png'
import icon2 from '@/assets/class-icon-2.png'
import icon3 from '@/assets/class-icon-3.png'
import icon4 from '@/assets/class-icon-4.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* Image and header */}
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
            
            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/*heading*/}
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                            <h1 className='font-[Archivo black]'>Flex-Hub</h1>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero iste itaque quis aliquam? Corrupti!
                    </p>
                </div>

                {/* Action buttons */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>

                    <AnchorLink 
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>

                </AnchorLink>
                </div>
             </div>

             {/* Image */}
           <div>
            <img src={HomePageGraphic} alt="home-pageGraphic" className='w-full h-[460px]  object-cover w-50'/>
           </div>
        </div>
        {/*sponsor*/}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img src={icon1} alt="Weight Training" />
                        <img src={icon2} alt="Cardio" />
                        <img src={icon3} alt="Yoga" />
                        <img src={icon4} alt="Diet" />

                    </div>
                </div>
            </div>
        )}

    </section>
  )
}

export default Home;