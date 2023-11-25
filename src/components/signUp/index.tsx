import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { appStore, play } from "../../../public";

export default function SignUp() {
  return (
    <Flex
      bg="rgba(73, 85, 103, 1)"
      width="100%"
      px={{ base: 10, md: 12, xl: 36 }}
      py={16}
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Heading
        size="xl"
        color="white"
        width={{ base: "100%", md: "300px" }}
        textAlign={{ base: "center", md: "start" }}
        mb={{ base: "8", md: "0" }}
        fontWeight="bold"
        fontFamily="monospace"
      >
        Sign up and Scoot off today
      </Heading>

      <Flex
        width={{ base: "300px", md: "320px" }}
        mx={{ base: "auto", md: "0" }}
        justifyContent="space-between"
        height="50px"
      >
        <Image
          src={appStore}
          alt="app store-image"
          style={{ borderRadius: "5px" }}
        />
        <Image src={play} alt="play-image" style={{ borderRadius: "5px" }} />
      </Flex>
    </Flex>
  );
}
