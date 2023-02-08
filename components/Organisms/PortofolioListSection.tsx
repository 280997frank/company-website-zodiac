import {
  PORTOFOLIO_COLORS,
  PORTOFOLIO_ROUTE_BASE,
} from "@/constants/portofolio";
import { TPortofolioListProps } from "@/types/portofolio";
import { Box, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { Fragment } from "react";
import CardImagePortfolioMenu from "../Molecules/CardImagePortfolioMenu";
const Fade = require("react-reveal/Fade");

const PortofolioListSection: TPortofolioListProps = ({ data, type }) => {
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  // const [isMobileLandscape] = useMediaQuery(
  //   "(min-width: 30em) and (max-width: 62em)"
  // );

  return (
    <Fragment>
      {/* one columns for desktop or mobile  */}
      <Fade bottom>
        <CardImagePortfolioMenu
          title={data[0].title}
          subTitle={data[0].category}
          color="#393939"
          banner={data[0].banner}
          backgroundButton={`${PORTOFOLIO_COLORS[type]} !important`}
          url={PORTOFOLIO_ROUTE_BASE[type]}
          itemId={data[0].id}
          ratio={16 / 6}
        />
      </Fade>

      {/* two columns for desktop or mobile */}
      <SimpleGrid
        alignItems="center"
        columns={isMobile ? 1 : 2}
        spacing={[0, 0, 2, 4]}
        mt={[0, 0, 2, 4]}
      >
        {data.map((item, index) => {
          const { title, category, banner, id } = item;
          if (index > 0) {
            return (
              <Fade
                key={id}
                bottom
                cascade
                delay={Math.round(((index + 1) % 2) * 100)}
              >
                <Box>
                  <CardImagePortfolioMenu
                    title={title}
                    subTitle={category}
                    color="#393939"
                    banner={banner}
                    backgroundButton={`${PORTOFOLIO_COLORS[type]} !important`}
                    url={PORTOFOLIO_ROUTE_BASE[type]}
                    itemId={id}
                    ratio={5 / 4}
                  />
                </Box>
              </Fade>
            );
          }
          return null;
        })}
      </SimpleGrid>

      {/* one columns for mobile potrait */}
      {/* two columns for mobile landscape */}
      {/* four columns for desktop  */}
      {/* <SimpleGrid
        mb="3rem"
        alignItems="center"
        mt={[0, 0, 2, 4]}
        spacing={[0, 0, 2, 4]}
        columns={isMobile ? 1 : isMobileLandscape ? 2 : 4}
      >
        {data.map((item, index) => {
          const { title, category, banner, id } = item;
          if (index >= 3) {
            return (
              <Fade
                key={id}
                bottom
                cascade
                delay={Math.round(((index + 1) % 4) * 100)}
              >
                <Box>
                  <CardImagePortfolioMenu
                    title={title}
                    subTitle={category}
                    color="#393939"
                    banner={banner}
                    backgroundButton={`${PORTOFOLIO_COLORS[type]} !important`}
                    url={PORTOFOLIO_ROUTE_BASE[type]}
                    itemId={id}
                    fontSizeTitle="18px"
                    fontSizeSubtitle={"16px"}
                  />
                </Box>
              </Fade>
            );
          }
          return null;
        })}
      </SimpleGrid> */}
    </Fragment>
  );
};

export default PortofolioListSection;
