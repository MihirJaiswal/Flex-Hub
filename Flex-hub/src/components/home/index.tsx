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
import { motion } from 'framer-motion'
import { isPromise } from 'util/types'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* Image and header */}
        <motion.div
         className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
         onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
         >
            
            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/*heading*/}
                <motion.div 
                className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -150 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]  md:before:content-evolvetext'>
                            <img src={HomePageText} alt="home-page-text"/>
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>
                    Welcome to Unrivaled Gym, where excellence meets fitness. Our unparalleled <br />
                    training fitness classes are designed to sculpt your body into the shape of your <br />
                    dreams. 
                    Immerse yourself in world-class studios equipped with state-of-the-art <br /> 
                    equipment and facilities.
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                 className='mt-8 flex items-center gap-8'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
                 variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible: { opacity: 1, x: 0 },
                 }}
                 >
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>

                    <AnchorLink 
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>

                </AnchorLink>
                </motion.div>
             </div>

             {/* Image */}
           <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
            <img src={HomePageGraphic} alt="home-pageGraphic" className='md:h-[80%] md:w-[80%] md:-mt-20'/>
           </div>
        </motion.div>
        {/*sponsor*/}
        {isAboveMediumScreens && (
            <div className="h-[145px] w-full bg-primary-100 py-10">
                <div className='mx-auto -mt-4 w-5/6'>
                    <div className='flex w-3/5 items-center justify-between'>
                        <img src={icon1} alt="sponsor1" className='h-[80px] w-[100px]'/>
                        <img src={icon2} alt="sponsor2" className='h-[100px] w-[170px]' />
                        <img src={icon3} alt="sponsor3" className='h-[80px] w-[120px]'/>
                    </div>
                </div>
            </div>
        )}

    </section>
  )
}

export default Home;