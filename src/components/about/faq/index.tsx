import { faqItems } from "@/utils";
import {
  Box,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Box width="100%" px={{ base: 10, md: 20, xl: 36 }} pt={6} pb={20}>
      <Heading
        size="xl"
        textAlign="center"
        mb={{ base: "4", lg: "16" }}
        color="gray.600"
        fontWeight="bold"
        fontFamily="monospace"
      >
        FAQS
      </Heading>

      {faqItems.map((f) => (
        <Flex direction={{ base: "column", lg: "row" }} key={f.id}>
          <Box
            width={{ base: "100%", lg: "50%" }}
            textAlign="center"
            fontWeight="bold"
            fontFamily="monospace"
            fontSize={{ base: "xl", md: "3xl" }}
            color="gray.600"
            p={6}
          >
            {f.title}
          </Box>

          <Accordion allowToggle width="100%">
            {f.options.map((o) => (
              <AccordionItem
                key={o.id}
                mb={4}
                border="none"
                bg={o.back}
                borderRadius="lg"
                p={{ base: "2", md: "4" }}
              >
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize={{ base: "14.5px", md: "18.5px" }}
                    textAlign="left"
                    fontWeight="bold"
                    fontFamily="monospace"
                    color="gray.600"
                  >
                    {o.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  py={4}
                  fontSize="xs"
                  textAlign="justify"
                  color="gray.600"
                >
                  {o.content}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      ))}
    </Box>
  );
}
