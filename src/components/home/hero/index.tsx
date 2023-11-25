import { Box, Stack, Heading, Text, HStack } from "@chakra-ui/react";
import heroImage from "../../../../public/background.jpg";
import Btn from "../../button";

export default function Hero() {
  const backgroundImageUrl = `url(${heroImage.src})`;

  return (
    <Box
      width="100%"
      backgroundImage={backgroundImageUrl}
      backgroundPosition={{ base: "right 0 bottom 0%", lg: "center" }}
      backgroundSize="cover"
      minH={{ base: "max-content", xl: "90vh" }}
      maxHeight="89vh"
      position="relative"
    >
      <Stack py={{ base: "12", md: "20" }} color="gray.50">
        <Heading
          size={{ base: "xl", md: "2xl" }}
          ml={{ base: 12, md: 32 }}
          textAlign={{ base: "center", lg: "start" }}
          width={{ base: "300px", md: "400px" }}
          lineHeight={1.2}
          fontWeight="bold"
          fontFamily="monospace"
        >
          Scooter sharing made simple
        </Heading>

        <HStack width={{ base: "100%", lg: "70%" }}>
          <Box
            height="12px"
            bg="#FCB72B"
            width={{ base: "80px", md: "160px" }}
            mr="20px"
          ></Box>
          <Text
            fontSize="13px"
            my={8}
            width={{ base: "220px", md: "310px" }}
            textAlign="justify"
            lineHeight={1.8}
          >
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away! Scoot takes
            the hassle out of urban mobility. Our bikes are placed in convenient
            locations in each of our cities. Use our app to locate the nearest
            bike, unlock it with a tap, and you’re away!
          </Text>
          <Box
            height="12px"
            bg="#FCB72B"
            width={{ base: "80px", md: "260px" }}
            ml="20px"
          ></Box>
        </HStack>

        <Box
          ml={{ base: 0, md: 48 }}
          width={{ base: "100%", md: "200px" }}
          textAlign={{ base: "center", lg: "start" }}
        >
          <Btn btnText="Get Scootin" />
        </Box>
      </Stack>

      <Box
        display={{ base: "none", lg: "block" }}
        height="60px"
        width="60px"
        borderRadius="full"
        border="2px"
        borderColor="gray.200"
        position="absolute"
        bottom="22%"
        right={{ lg: "16%", xl: "12%" }}
      ></Box>

      <Box
        display={{ base: "none", lg: "block" }}
        height="60px"
        width="60px"
        borderRadius="full"
        border="2px"
        borderColor="gray.200"
        position="absolute"
        bottom="22%"
        right={{ lg: "6%", xl: "4.5%" }}
      ></Box>

      <Box
        display={{ base: "none", lg: "block" }}
        height="60px"
        width="30px"
        borderLeftRadius="full"
        bg="gray.200"
        position="absolute"
        bottom="22%"
        right="0"
      ></Box>
    </Box>
  );
}
