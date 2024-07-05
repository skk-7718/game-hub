import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      justifySelf={"center"}
      width="360px"
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
