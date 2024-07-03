import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"54px"}></Image>
        <Text>NavBar</Text>
      </HStack>
    </>
  );
}

export default NavBar;
