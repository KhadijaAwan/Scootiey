import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Btn from "../button";
import Image from "next/image";

export default function LeftContent({
  photo,
  heading,
  content,
  leftButton,
}: {
  photo: any;
  heading: string;
  content: string;
  leftButton: string;
}) {
  return (
    <Box position="relative" width="100%">
      <Box
        position="absolute"
        top={14}
        right="0%"
        height="210px"
        width="100px"
        bg="gray.200"
        display={{ base: "none", lg: "block" }}
        borderLeftRadius="full"
      ></Box>

      <Flex
        width="100%"
        px={{ base: 10, md: 20, xl: 36 }}
        pb={{ base: 16, md: 20 }}
        pt={10}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          width="100%"
          color="gray.700"
          order={{ base: 2, md: 1 }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Heading
            size={{ base: "lg", md: "xl" }}
            textAlign={{ base: "center", md: "start" }}
            width={{ base: "100%", md: "310px" }}
            lineHeight={1.2}
            mb={4}
            fontWeight="bold"
            fontFamily="monospace"
          >
            {heading}
          </Heading>
          <Text
            fontSize="12px"
            mb={8}
            width={{ base: "100%", lg: "320px", xl: "450px" }}
            textAlign="justify"
            lineHeight={1.6}
            color="gray.600"
          >
            {content}
          </Text>
          <Btn btnText={leftButton} />
        </Box>

        <Flex
          width="100%"
          justifyContent={{ base: "center", md: "end" }}
          mr={{ lg: "40px", xl: "0" }}
          order={{ base: 1, md: 2 }}
          mb={{ base: "6", md: "0" }}
        >
          <Box
            mt={32}
            mr="-5px"
            width="200px"
            height="20px"
            bg="#FCB72B"
            borderLeftRadius="10px"
            display={{ base: "none", lg: "block" }}
          ></Box>
          <Image
            src={photo}
            width={250}
            height={250}
            alt="Easy to Use Image"
            style={{ borderRadius: "50%" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
