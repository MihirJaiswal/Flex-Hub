import { SelectedPage } from "@/shared/types"
import Logo from "../../assets/Logo.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-2 md:py-16">
        <div className="justify-contnent mx-auto w-5/6 gap-80 md:flex">
            <div className="flex gap-[70px] md:gap-[200px]">
            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Instagram</p>
            <p className="my-5">Facebook</p>
            <p>Youtube</p>

            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
            <p>(+91)6969696969</p>
            </div>
            </div>
            <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
            </p>
            <p>© Made by Mihir Jaiswal, All Rights Reserved.</p>
            </div>

        </div>

    </footer>
  )
}

export default Footer