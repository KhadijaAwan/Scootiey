"use client";
import {
  Box,
  Flex,
  Heading,
  Link,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { navItems } from "@/utils";
import NextLink from "next/link";
import Btn from "../button";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width="100%"
      height="70px"
      px={{ base: "6", md: "10", lg: "16", xl: "36" }}
      py={4}
      bg="gray.50"
    >
      <Flex
        width="100%"
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        position="relative"
      >
        <Button
          onClick={onOpen}
          color="#FCB72B"
          bg="inherit"
          display={{ base: "block", md: "none" }}
          _hover={{ bg: "inherit" }}
          position="absolute"
          left="-10px"
        >
          <HamburgerIcon boxSize={6} />
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent
            w="200px"
            maxW="200px"
            bg="rgba(51, 58, 68, 1)"
            position="relative"
          >
            <DrawerBody>
              <DrawerCloseButton
                size="lg"
                color="#FCB72B"
                position="absolute"
                left={2}
                top={2}
              />

              <Flex direction="column" mt="32" width="100%">
                {navItems.map((n) => (
                  <Link
                    fontFamily="monospace"
                    as={NextLink}
                    href={n.link}
                    ml="10"
                    key={n.id}
                    color="gray.300"
                    fontSize="15.5px"
                    mb="6"
                    fontWeight="semibold"
                    _hover={{ textTransform: "none", color: "#FCB72B" }}
                  >
                    {n.title}
                  </Link>
                ))}
              </Flex>
            </DrawerBody>

            <DrawerFooter my={8}>
              <Btn btnText="Get Scootiey" />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Heading size={{ base: "md", md: "lg" }} color="gray.600">
          <Link
            as={NextLink}
            href="/"
            _hover={{ textTransform: "none" }}
            fontWeight="bold"
            fontFamily="monospace"
          >
            Scootiey
          </Link>
        </Heading>

        <Box display={{ base: "none", md: "block" }}>
          {navItems.map((n) => (
            <Link
              as={NextLink}
              href={n.link}
              key={n.id}
              fontSize="13.5px"
              color="gray.500"
              fontWeight="bold"
              fontFamily="monospace"
              mr="50px"
              _hover={{ textTransform: "none" }}
            >
              {n.title}
            </Link>
          ))}
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Btn btnText="Get Scootiey" />
        </Box>
      </Flex>
    </Box>
  );
}
