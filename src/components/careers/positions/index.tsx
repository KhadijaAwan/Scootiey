import Btn from "@/components/button";
import { positionItems } from "@/utils";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function Positions() {
  return (
    <Box width="100%" px={{ base: 6, md: 20, xl: 36 }} pt={6} pb={16}>
      <SimpleGrid columns={1} spacing={6}>
        {positionItems.map((p) => (
          <Flex
            key={p.id}
            width="100%"
            shadow="none"
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent={{ base: "center", md: "space-between" }}
            bg="gray.50"
            borderRadius="lg"
            py={6}
            px={8}
          >
            <Stack
              color="gray.600"
              mb={{ base: "6", md: "0" }}
              fontWeight="bold"
              fontFamily="monospace"
            >
              <Heading
                fontSize={{ base: "20px", md: "24px" }}
                textAlign="center"
                fontWeight="bold"
                fontFamily="monospace"
              >
                {p.designation}
              </Heading>
              <Text fontSize="13px" textAlign={{ base: "center", md: "start" }}>
                {p.location}
              </Text>
            </Stack>

            <Btn btnText="Apply" />
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
