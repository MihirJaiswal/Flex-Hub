export enum SelectedPage {
    Home = "home",
    AboutUs = "about",
    Benefits = "benefits",
    Training = "training",
    ContactUs = "contactus",
  }

  export interface BenefitType{
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType{
    name: string,
    description?: string,
    image: string
  }