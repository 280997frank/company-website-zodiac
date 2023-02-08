import { THeaderIndexPortfolio } from "@/types/portofolio";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const HeaderPortfolioMenu: THeaderIndexPortfolio = (props) => {
  const { imgUrl, title, description, color } = props;
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  return (
    <SimpleGrid
      columns={isMobile ? 1 : 2}
      spacing={{ base: 7, md: 4, lg: 7 }}
      alignItems="center"
      mb="1.5rem"
      px={{ base: "1rem", md: "0" }}
    >
      {isMobile ? (
        <Box textAlign="center">
          <Box sx={{ textAlign: "-webkit-center" }} mb="2">
            <Image src={imgUrl} alt="explore Events" w="12rem" />
          </Box>
          <Heading color={color} textTransform="uppercase">
            {title}
          </Heading>
        </Box>
      ) : (
        <Flex alignItems="center">
          <Box>
            <Image src={imgUrl} alt="explore Events" w="16rem" />
          </Box>
          <Heading
            color={color}
            textTransform="uppercase"
            fontFamily="Mark Pro"
            fontSize={{ base: "36px", md: "22px", lg: "35px" }}
          >
            {title}
          </Heading>
        </Flex>
      )}

      <Text
        color="#fff"
        fontFamily="Barlow"
        fontSize={{ base: "16px", md: "14px", lg: "16px" }}
        textAlign={{ base: "center", md: "left" }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </SimpleGrid>
  );
};

export default HeaderPortfolioMenu;
