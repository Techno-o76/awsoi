
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logoImage from "./logo.jpg"
export default function Component() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div >
            <img src={logoImage}></img>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <FooterTitle title="ABOUT" />
              
            </div>
            <div>
              <FooterTitle title="Join US "/>
              
            </div>
            <div>
              <FooterTitle title="Contact US" />
            </div>

            <div>
              <FooterTitle title="Donate" />
            </div>
          </div>

        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-evenly">
          <FooterCopyright href="#" by="AWSOI™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center" style= {{padding: 40 +'px'}}   >
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
