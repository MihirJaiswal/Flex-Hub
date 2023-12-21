import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/avatar02.png";



const benefits: Array<BenefitType>= [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "Facilities",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Facilities",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Pro Trainers",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

    }

];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <motion.div
             className="md:my-5 md:w-3/5"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
                 hidden: { opacity: 0, x: -50 },
                 visible: { opacity: 1, x: 0 },
             }}
             >
                <HText>
                    Our benefits
                </HText>
            
            <HText>Transform your body</HText>
            <p className="mt-5 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus expedita eos blanditiis quibusdam exercitationem autem. Quae, rerum illum sequi molestiae provident esse! Quae molestiae, libero nihil pariatur impedit rem officiis.
             </p> 
            </motion.div>
            <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            
            </motion.div>

        {/*graphics*/}

       <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

       <img className="mx-auto" src={BenefitsPageGraphic} />

            <div>
                {/*Title*/}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                  }}
                >
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-AbstractWaves">
                      <div>
                        <HText>
                        Epic Fitness Journeys Begin Here: 
                        <span className="text-primary-500"> FLEX-HUB</span>
                        </HText>
                      </div>
                    </div>
                 
                </motion.div>

                {/*Description*/}
                   <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                   >
                       <p className="my-5">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       </p>  
                       <p className="mb-5">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>  
                   </motion.div>
                {/*button*/}
                <div className="relative mt-16">
                    <motion.div className="before:absolute before:-bottom-20 before:right-10 before:z-[-1] before:content-AbstractWaves"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                      }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </motion.div>

                </div>
            </div>
       </div>

        </motion.div>

    </section>
  )
}

export default Benefits