import zodiacSolution from "@/assets/images/events/zodiacSolution.png";
import zodiacStudiosFullPng from "@/assets/images/full-logos/zodiac-studios-full-logo.png";
import zodiacStudiosFullWebp from "@/assets/images/full-logos/zodiac-studios-full-logo.webp";
import NavigationButton from "@/components/Atoms/NavigationButton";
import HeaderPortfolioMenu from "@/components/Molecules/HeaderPortfolioMenu";
import PortofolioListSection from "@/components/Organisms/PortofolioListSection";
import Layout from "@/components/Templates/Layout";
import { PORTOFOLIO_KEYS } from "@/constants/portofolio";
import { useGetSolution, useZodiacSolutions } from "@/hooks/solutions";
import { Box, Button, Center, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ZodiacSolution() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchListZodiacSolutions, data, totalPage } = useZodiacSolutions({
    input: {
      page: currentPage,
      limit: 10,
    },
  });
  const { fetchGetSolution, data: dataSolution } = useGetSolution();

  useEffect(() => {
    fetchListZodiacSolutions();
    fetchGetSolution();
  }, [fetchListZodiacSolutions, fetchGetSolution]);

  const dataEvent = data || [];
  return (
    <Layout title="Interactive and Multimedia" overflow="auto">
      <Box
        width={["100vw", "90vw", "70vw"]}
        minH="100vh"
        margin="auto"
        pt={20}
        pos="relative"
        pb="7rem"
      >
        <NavigationButton
          label="HOME"
          subLabel="BACK"
          arrowPosition="left"
          onClick={() => router.push("/home")}
        />
        <picture>
          <source srcSet={zodiacStudiosFullWebp.src} type="image/webp" />
          <Img
            src={zodiacStudiosFullPng.src}
            width="100%"
            height="100%"
            objectPosition="center"
            objectFit="cover"
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            alt=""
            zIndex="-1"
          />
        </picture>
        <HeaderPortfolioMenu
          imgUrl={zodiacSolution.src}
          title={dataSolution?.getSolution?.title || ""}
          description={dataSolution?.getSolution.descriptionOne || ""}
          color="brand.zodiacSolutions"
        />
        {dataEvent.length > 0 && (
          <PortofolioListSection
            data={dataEvent}
            type={PORTOFOLIO_KEYS.solutions}
          />
        )}
        {currentPage < totalPage && (
          <Center>
            <Button
              backgroundColor="brand.zodiacSolutions"
              colorScheme="brand.zodiacSolutions"
              color="black"
              outline={"none"}
              _focus={{
                outline: "none",
              }}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Load More
            </Button>
          </Center>
        )}
      </Box>
    </Layout>
  );
}
