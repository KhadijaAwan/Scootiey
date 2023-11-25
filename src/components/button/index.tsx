"use client";
import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

export default function Btn({ btnText }: { btnText: string }) {
  const router = useRouter();
  return (
    <Button
      width="150px"
      fontWeight="bold"
      fontFamily="monospace"
      fontSize="14.5px"
      onClick={() => router.push("/careers")}
      bg="#FCB72B"
      color="white"
      _hover={{ bg: "black", color: "gray.50" }}
    >
      {btnText}
    </Button>
  );
}
