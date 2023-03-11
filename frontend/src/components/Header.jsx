import { NavLink } from "react-router-dom";
import { HStack, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack
      bgColor="blue.400"
      color="white"
      justifyContent="space-between"
      w="100%"
      py="4"
      px="10"
    >
      <Heading>TYPINGDEN</Heading>
      <HStack spacing="10">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/hiscores">HISCORES</NavLink>
      </HStack>
    </HStack>
  );
}
