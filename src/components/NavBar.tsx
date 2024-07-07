import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: String) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <>
      <HStack padding={"14px"}>
        <Image src={logo} boxSize={"54px"}></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavBar;
