import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platform: Platform[];
}

function PlatformIconList({ platform }: Props) {
  const iconMap: { [key: string]: React.ElementType } = {
    xbox: FaXbox,
    playstation: FaPlaystation,
    windows: FaWindows,
    apple: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    iphone: MdPhoneIphone,
    nintendo: SiNintendo,
    Web: BsGlobe,
  };

  return (
    <HStack marginY={"14px"}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
