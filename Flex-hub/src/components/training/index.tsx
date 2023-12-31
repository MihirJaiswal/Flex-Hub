import { SelectedPage, ClassType } from '@/shared/types'
import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'
import image4 from '@/assets/image4.jpg'
import image5 from '@/assets/image5.jpg'
import image6 from '@/assets/image6.jpg'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'


const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum!',
    image: image1
  },
  {
    name: 'Yoga Classes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum!',
    image: image2
  },
  {
    name: 'Ab Core Classes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum!',
    image: image3
  },
  {
    name: 'Adventure Classes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum!',
    image: image4
  },
  {
    name: 'Fitness Classes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum!',
    image: image5
  },
  {
    name: 'Training Classes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolorum!',
    image: image6
  },

]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Trainig = ({ setSelectedPage }: Props) => {
  return (
  <section id='training' className=' W-Full bg-primary-100 py-[70px]'>
   
    <motion.div
    className='mx-auto w-5/6'
    onViewportEnter={() => setSelectedPage(SelectedPage.Training)}
    >
     <motion.div
     className='mx-auto w-5/6'
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.5 }}
     variants={{
       hidden: { opacity: 0, x: -50 },
       visible: { opacity: 1, x: 0 },
     }}
     >
      <div className='md:my-5 md:w-3/5'>
        <HText>Personal Trainig</HText>
        <p className='py-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a officiis facere porro fugiat repudiandae dicta, labore libero mollitia. Amet iure est non adipisci excepturi, ex illum temporibus ipsam expedita itaque recusandae sint. Optio, quo.
        </p>
      </div>

     </motion.div>
     <div className='mt-10 h-[300px] w-full overflow-x-auto overflow-y-hidden'>
      <ul className='w-[2800px] whitespace-nowrap'>
        {classes.map((item: ClassType, index) => (
          <Class
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </ul>
      </div>
   </motion.div>
  </section>
)}

export default Trainig;