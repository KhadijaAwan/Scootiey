import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Btn from "../button";
import Image from "next/image";

export default function RightContent({
  photo,
  heading,
  content,
}: {
  photo: any;
  heading: string;
  content: string;
}) {
  return (
    <Box position="relative" width="100%">
      <Box
        position="absolute"
        top={14}
        left="0%"
        height="210px"
        width="100px"
        bg="gray.200"
        display={{ base: "none", lg: "block" }}
        borderRightRadius="full"
      ></Box>

      <Flex
        width="100%"
        px={{ base: 10, md: 20, xl: 36 }}
        pb={{ base: 16, md: 20 }}
        pt={10}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          width="100%"
          justifyContent={{ base: "center", md: "start" }}
          ml={{ lg: "40px", xl: "0" }}
          mb={{ base: "6", md: "0" }}
        >
          <Image
            src={photo}
            width={250}
            height={250}
            alt="Easy to Use Image"
            style={{ borderRadius: "50%", zIndex: 4 }}
          />
          <Box
            mt={32}
            ml="-3px"
            width="200px"
            height="20px"
            bg="#FCB72B"
            borderRightRadius="10px"
            display={{ base: "none", lg: "block" }}
          ></Box>
        </Flex>

        <Box
          width="100%"
          color="gray.700"
          ml={{ base: "0", lg: "40" }}
          mr={{ base: "0", md: "-8", lg: "0" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Heading
            size={{ base: "lg", md: "xl" }}
            textAlign={{ base: "center", md: "start" }}
            width={{ base: "100%", md: "290px" }}
            lineHeight={1.3}
            mb={4}
            fontWeight="bold"
            fontFamily="monospace"
          >
            {heading}
          </Heading>
          <Text
            fontSize="12px"
            lineHeight={1.8}
            mb={8}
            width={{ base: "100%", lg: "320px", xl: "450px" }}
            textAlign="justify"
          >
            {content}
          </Text>
          <Btn btnText="Learn More" />
        </Box>
      </Flex>
    </Box>
  );
}
