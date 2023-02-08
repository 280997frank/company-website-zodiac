import defaultStarsBgPng from "@/assets/images/default-stars-background.png";
import defaultStarsBgWebp from "@/assets/images/default-stars-background.webp";
import exploreEvent from "@/assets/images/events/explore-icon.png";
import NavigationButton from "@/components/Atoms/NavigationButton";
import HeaderPortfolioMenu from "@/components/Molecules/HeaderPortfolioMenu";
import PortofolioListSection from "@/components/Organisms/PortofolioListSection";
import Layout from "@/components/Templates/Layout";
import { PORTOFOLIO_KEYS } from "@/constants/portofolio";
import { useEvent, useEventZodiacExploler } from "@/hooks/events";
import { Box, Button, Center, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ZodiacEventsExplore() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const { fetchListEventZodiacExploler, data, totalPage } =
    useEventZodiacExploler({
      input: {
        page: currentPage,
        limit: 10,
      },
    });
  const { fetchEvent, data: eventData } = useEvent();

  useEffect(() => {
    fetchListEventZodiacExploler();
    fetchEvent();
  }, [fetchListEventZodiacExploler, fetchEvent]);

  const dataEvent = data || [];
  return (
    <Layout title="Digital and Event" overflow="auto">
      <Box
        width={["100vw", "90vw", "70vw"]}
        minH="100vh"
        mx="auto"
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
          <source srcSet={defaultStarsBgWebp.src} type="image/webp" />
          <Img
            src={defaultStarsBgPng.src}
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
          imgUrl={exploreEvent.src}
          title={eventData?.getVirtualEvent.title || ""}
          description={eventData?.getVirtualEvent.descriptionOne || ""}
          color="brand.zodiacEvents"
        />
        {dataEvent.length > 0 && (
          <PortofolioListSection
            data={dataEvent}
            type={PORTOFOLIO_KEYS.events}
          />
        )}
        {currentPage < totalPage && (
          <Center>
            <Button
              backgroundColor="brand.zodiacEvents"
              colorScheme="brand.zodiacEvents"
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
