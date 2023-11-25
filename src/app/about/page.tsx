"use client";

import heroImage from "../../../public/aboutImage.png";
import FAQ from "@/components/about/faq";
import Mobility from "@/components/about/mobility";
import UrbanLiving from "@/components/about/urbanLiving";
import Caption from "@/components/caption";
import PointListings from "@/components/points";

export default function About() {
  const backgroundImageUrl = `url(${heroImage.src})`;

  return (
    <>
      <Caption pageCaption="About" backImage={backgroundImageUrl}/>
      <Mobility />
      <UrbanLiving />
      <PointListings title="Our values" />
      <FAQ />
    </>
  );
}
