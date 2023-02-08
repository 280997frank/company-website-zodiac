import { TPortofolioKeys } from "@/types/portofolio";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NavigationButton from "../Atoms/NavigationButton";

const PortofolioSkeleton: React.FC<{ type: TPortofolioKeys }> = ({ type }) => {
  const router = useRouter();
  return (
    <Flex
      h="100%"
      w="100%"
      minHeight="100vh"
      flexDir="column"
      alignItems="center"
      pt={20}
    >
      <Fragment>
        <Box
          pb={6}
          width={{ base: "100%", md: "75vw" }}
          backgroundColor="transparent"
        >
          <NavigationButton
            arrowPosition="left"
            label="ALL PROJECTS"
            subLabel={`ZODIAC ${type.toUpperCase()}`}
            onClick={() => router.push(`/zodiac-${type}`)}
          />
        </Box>
      </Fragment>
      <Flex height="100%" justifyContent="center" alignItems="center" mt={40}>
        <Spinner color="white" />
      </Flex>
    </Flex>
  );
};

export default PortofolioSkeleton;
