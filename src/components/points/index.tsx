import { pointItems } from "@/utils";
import Image from "next/image";
import { Box, SimpleGrid, Text, Card, Flex, Heading } from "@chakra-ui/react";

export default function PointListings({ title }: { title: string }) {
  return (
    <Box
      width="100%"
      px={{ base: 16, md: 20, xl: 36 }}
      pt={6}
      pb={{ base: 10, md: 20 }}
    >
      <Heading
        size="xl"
        textAlign="center"
        mb={{ base: "10", md: "16" }}
        color="gray.600"
        fontWeight="bold"
        fontFamily="monospace"
      >
        {title}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 12, md: 20 }}
      >
        {pointItems.map((h) => (
          <Card
            key={h.id}
            shadow="none"
            bg="inherit"
            textAlign="center"
            color="gray.600"
          >
            <Flex
              alignSelf="center"
              width="160px"
              height="160px"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={h.photo}
                width={160}
                height={160}
                alt="Point Image"
                style={{ borderRadius: "50%" }}
              />
            </Flex>

            <Flex
              alignSelf="center"
              bg="#FCB72B"
              width="50px"
              height="50px"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              mt="-20px"
              mb={2}
              fontSize="15px"
              fontWeight="bold"
            fontFamily="monospace"
            >
              {h.count}
            </Flex>
            <Text my={3} fontWeight="bold" fontFamily="monospace" fontSize="18px">
              {h.title}
            </Text>
            <Text fontSize="xs" px={{ base: "2", md: "4" }} lineHeight={1.6}>
              {h.content}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
