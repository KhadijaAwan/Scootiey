import { Flex, Heading, Box } from "@chakra-ui/react";

export default function Caption({
  backImage,
  pageCaption,
}: {
  backImage: any;
  pageCaption: string;
}) {
  return (
    <Flex
      width="100%"
      backgroundImage={backImage}
      backgroundPosition={{ base: "right 0 bottom 0%", lg: "center" }}
      backgroundSize="cover"
      alignItems="center"
      justifyContent="space-between"
      height={{ base: "120px", lg: "160px" }}
      bg="rgba(47, 59, 89, 1)"
      position="relative"
      px={{ base: "10", lg: "16", xl: "36" }}
    >
      <Heading size="xl" color="white" fontFamily="monospace">
        {pageCaption}
      </Heading>

      <Box
        display="block"
        height="40px"
        width="40px"
        borderRadius="full"
        border="2px"
        borderColor="gray.200"
        position="absolute"
        bottom="35%"
        right={{ base: "21%", md: "14%", lg: "10%", xl: "7.5%" }}
      ></Box>

      <Box
        display="block"
        height="40px"
        width="40px"
        borderRadius="full"
        border="2px"
        borderColor="gray.200"
        position="absolute"
        bottom="35%"
        right={{ base: "7.5%", md: "5.5%", lg: "4%", xl: "3%" }}
      ></Box>

      <Box
        display="block"
        height="40px"
        width="20px"
        borderLeftRadius="full"
        bg="gray.200"
        position="absolute"
        bottom="35%"
        right="0"
      ></Box>
    </Flex>
  );
}
