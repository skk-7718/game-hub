import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <>
      <HStack padding={"14px"}>
        <Image src={logo} boxSize={"54px"}></Image>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
