import Image from "next/image";
import BannerSection from "./Components/Home_component/BannerSection";
import Collection_section from "./Components/Home_component/Collection_section";
import Product from "./Product/page";

export const metadata = {
  // title: "Home page",
  // description: "Home page description by create next app",
};

export default function Home() {
  //API Data Props child

  //API Home  ->Data Get
  metadata.title="Api Home title"
  metadata.description="API Home description"
  return (
      <>
      <BannerSection/>
      <Collection_section/>
      <Product/>
      </>
  );
}
