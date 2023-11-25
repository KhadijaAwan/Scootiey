"use client";

import heroImage from "../../../public/careerImage.png";
import Mission from "@/components/careers/mission";
import Positions from "@/components/careers/positions";
import PointListings from "@/components/points";
import Caption from "@/components/caption";

export default function Careers() {
  const backgroundImageUrl = `url(${heroImage.src})`;

  return (
    <>
      <Caption pageCaption="Careers" backImage={backgroundImageUrl}/>
      <Mission />
      <PointListings title="Why join us?" />
      <Positions />
    </>
  );
}
