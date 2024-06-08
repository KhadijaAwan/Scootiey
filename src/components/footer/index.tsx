import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { Box, Flex, Heading, Link, IconButton } from "@chakra-ui/react";
import { navItems } from "@/utils";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box
      width="100%"
      minHeight="70px"
      px={{ base: "6", lg: "12", xl: "36" }}
      py={4}
      bg="rgba(51, 58, 68, 1)"
    >
      <Flex
        width="100%"
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
      >
        <Heading
          size={{ base: "xl", lg: "lg" }}
          color="white"
          ml={{ base: "-20px", lg: "0" }}
        >
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

        <Flex
          direction={{ base: "column", md: "row" }}
          my={{ base: "8", md: "0" }}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          {navItems.map((n) => (
            <Link
              as={NextLink}
              href={n.link}
              key={n.id}
              color="gray.400"
              fontWeight="bold"
              fontFamily="monospace"
              fontSize={{ base: "14.5px", md: "13.5px" }}
              mb={{ base: "2", md: "0" }}
              mr={{ base: "0", md: "50px" }}
              _hover={{ textTransform: "none", color: "#FCB72B" }}
            >
              {n.title}
            </Link>
          ))}
        </Flex>

        <Flex direction="row">
          <Link
            as={NextLink}
            href="https://www.facebook.com/"
            color="white"
            _hover={{ bg: "inherit", color: "#FCB72B" }}
            fontSize="14.5px"
            mr="20px"
            isExternal
          >
            <FaSquareFacebook />
          </Link>
          <Link
            as={NextLink}
            href="https://twitter.com/"
            color="white"
            _hover={{ bg: "inherit", color: "#FCB72B" }}
            fontSize="14.5px"
            mr="20px"
            isExternal
          >
            <FaTwitter />
          </Link>
          <Link
            as={NextLink}
            href="https://www.instagram.com/"
            color="white"
            _hover={{ bg: "inherit", color: "#FCB72B" }}
            fontSize="14.5px"
            mr="20px"
            isExternal
          >
            <IoLogoInstagram />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
