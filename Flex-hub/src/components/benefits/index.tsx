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


const benefits: Array<BenefitType>= [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "Facilities",
        description: "fjghe ir ogh lkgjo ir ehg iljg gjeg no ihk rett"

    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Facilities",
        description: "fjghe ir ogh lkgjo ir ehg iljg gjeg no ihk rett"

    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Pro Trainers",
        description: "fjghe ir ogh lkgjo ir ehg iljg gjeg no ihk rett"

    }

]

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
            <div className="md:my-5 md:w-3/5">
            <HText>Transform your body</HText>
            <p className="mt-5 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus expedita eos blanditiis quibusdam exercitationem autem. Quae, rerum illum sequi molestiae provident esse! Quae molestiae, libero nihil pariatur impedit rem officiis.
             </p> 
            </div>
            <div className="mt-5 items-center justify-between gap-8 md:flex">
                {benefits.map((benefit: BenefitType) => (
                <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </div>
        </motion.div>

    </section>
  )
}

export default Benefits