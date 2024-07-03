import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"54px"}></Image>
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
