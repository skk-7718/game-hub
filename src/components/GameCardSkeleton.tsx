import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <>
      <Card
        justifySelf={"center"}
        width="360px"
        height="352.8px"
        borderRadius={10}
        overflow={"hidden"}
      >
        <Skeleton height={"200px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCardSkeleton;
