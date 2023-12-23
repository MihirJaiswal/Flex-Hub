import React from 'react'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import AboutUsPageGraphic from '@/assets/AboutUsPageGraphic.jpg'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="AboutUs" className="mx-auto w-full pt-24 pb-24">
        <motion.div className='px-6 md:w-3/5 md:ml-40 md:flex md:justify-center md:items-center' onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
            <motion.div className="w-full md:w-3/5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <HText>
            <span className="text-primary-500">About</span> Us
          </HText>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde blanditiis quo est facilis sed, fuga expedita optio reprehenderit eaque distinctio placeat fugit, neque pariatur consectetur animi necessitatibus totam. Minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic beatae, velit sit ipsa excepturi eius saepe atque veniam impedit earum, sequi error laborum quam reiciendis laudantium. Deleniti similique recusandae aperiam.
              </p>
            </motion.div>
            <motion.div className="mt-16 basis-2/5 md:mt-0 " initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:ml-40">
                        <img src={AboutUsPageGraphic} alt="contact-us-page-graphic" className="w-full  md:rounded-egg md:ml-40 " />
                    </div>

                </motion.div>
               
            </motion.div>
          
           
        <div>

        </div>
      
    </section>
    
  )
}

export default AboutUs;