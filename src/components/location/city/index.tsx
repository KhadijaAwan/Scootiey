import Btn from "@/components/button";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <Flex
      width="100%"
      direction={{ base: "column", md: "row" }}
      py={10}
      mt={{ base: "4", md: "10" }}
      px={{ base: "0", lg: "2", xl: "10" }}
      alignItems="center"
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Heading
        size={{ base: "md", xl: "xl" }}
        color="gray.600"
        width={{ base: "100%", md: "180px", lg: "220px" }}
        textAlign={{ base: "center", xl: "start" }}
        fontWeight="bold"
        fontFamily="monospace"
      >
        Your City Not Listed?
      </Heading>
      <Text
        my={{ base: "6", md: "0" }}
        fontSize="xs"
        width={{ base: "100%", md: "280px", lg: "400px" }}
        ml={{ base: "0", lg: "-30px" }}
        textAlign="justify"
        color="gray.600"
        lineHeight={1.8}
      >
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </Text>
      <Btn btnText="Message Us" />
    </Flex>
  );
}
