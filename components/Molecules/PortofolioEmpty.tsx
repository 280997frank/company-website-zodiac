import { PORTOFOLIO_COLORS } from "@/constants/portofolio";
import { TPortofolioKeys } from "@/types/portofolio";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NavigationButton from "../Atoms/NavigationButton";

const PortofolioEmpty: React.FC<{ type: TPortofolioKeys }> = ({ type }) => {
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
            label="ALL PROJECTS"
            subLabel={`ZODIAC ${type.toUpperCase()}`}
            arrowPosition="left"
            onClick={() => router.push(`/zodiac-${type}`)}
          />
        </Box>
      </Fragment>
      <Flex height="100%" justifyContent="center" alignItems="center" mt={40}>
        <Text
          fontWeight="bold"
          color={PORTOFOLIO_COLORS[type]}
          fontSize={{ base: "48px", md: "54px" }}
        >
          Project not found
        </Text>
      </Flex>
    </Flex>
  );
};

export default PortofolioEmpty;
