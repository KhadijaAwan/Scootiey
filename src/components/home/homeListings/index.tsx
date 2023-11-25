import { homeItems } from "@/utils";
import Image from "next/image";
import { Box, SimpleGrid, Text, Card, Flex } from "@chakra-ui/react";

export default function HomeListings() {
  return (
    <Box position="relative" width="100%">
      <Box
        position="absolute"
        top="30%"
        height="16px"
        width={{ lg: "70%", xl: "67.3%" }}
        display={{ base: "none", lg: "block" }}
        bg="gray.200"
      ></Box>

      <Box
        width="100%"
        px={{ base: 16, md: 20, xl: 36 }}
        py={{ base: 16, md: 20 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 12, md: 20 }}
        >
          {homeItems.map((h) => (
            <Card
              key={h.id}
              shadow="none"
              bg="inherit"
              textAlign={{ base: "center", md: "start" }}
            >
              <Flex
                alignSelf={{ base: "center", md: "start" }}
                bg="#FCB72B"
                width="60px"
                height="60px"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
                mb={2}
              >
                <Image
                  src={h.photo}
                  width={25}
                  height={25}
                  alt="listing Image"
                />
              </Flex>
              <Text my={3} fontSize="20px" color="gray.600" fontWeight="bold" fontFamily="monospace">
                {h.title}
              </Text>
              <Text fontSize="xs" textAlign="justify" color="gray.600" lineHeight={1.8}>
                {h.content}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
