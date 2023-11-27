export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "Ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
