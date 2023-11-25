"use client";

import heroImage from "../../../public/locationImage.png";
import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import { location1 } from "../../../public";
import City from "@/components/location/city";
import Caption from "@/components/caption";

export default function Location() {
  const backgroundImageUrl = `url(${heroImage.src})`;

  return (
    <>
      <Caption pageCaption="Locations" backImage={backgroundImageUrl}/>
      <Box width="100%" px={{ base: 10, md: 12, xl: 36 }} pt={10} pb={6}>
        <Center>
          <Image
            src={location1}
            sizes="(max-width: 500px) 300px, (max-width: 960px) 450px, 800px"
            alt="Map Image"
          />
        </Center>
        <City />
      </Box>
    </>
  );
}
