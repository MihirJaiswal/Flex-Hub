export enum SelectedPage {
    Home = "home",
    About = "about",
    Benefits = "benefits",
    Training = "training",
    ContactUs = "contactus",
  }

  export interface BenefitType{
    icon: JSX.Element;
    title: string;
    description: string;
  }