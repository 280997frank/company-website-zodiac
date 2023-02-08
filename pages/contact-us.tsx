import { Box, Center, Fade, Heading, Spinner, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import ContactCard from "@/components/Molecules/ContactCard";
import Layout from "@/components/Templates/Layout";

import { useLocations, LocationOrderBy, SortByType } from "@/hooks/contactUs";
import { useWindowSize } from "@/hooks/utils";

import NavigationButton from "@/components/Atoms/NavigationButton";
import type { GetLocationsResponse } from "@/hooks/contactUs";

export default function ContactUs() {
  const { innerHeight } = useWindowSize();
  const { fetchLocations, loading } = useLocations();
  const pageTrackerRef = useRef(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [locations, setLocations] = useState<
    GetLocationsResponse["listLocations"]["locations"]
  >([]);
  const router = useRouter();

  useEffect(() => {
    if (pageNumber >= pageTrackerRef.current) {
      fetchLocations({
        variables: {
          input: {
            page: pageNumber,
            limit: 5,
            filter: { isActive: true },
            order: {
              orderBy: LocationOrderBy.SEQUENCE,
              sortBy: SortByType.ASC,
            },
          },
        },
      })
        .then(({ data }) => {
          if (data) {
            if (data.listLocations.locations.length) {
              setLocations((prevLocations) => [
                ...prevLocations,
                ...data.listLocations.locations,
              ]);
            } else {
              // No items in the next page so we return to the previous page
              setPageNumber((prevPageNumber) => prevPageNumber - 1);
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [fetchLocations, pageNumber]);

  return (
    <Layout title="Contact Us">
      <Box
        h={innerHeight}
        overflowY="auto"
        pt={{ base: "10vh", lg: "13vh" }}
        px={{ base: "2%", lg: "15vw" }}
        onScroll={(e) => {
          const hasReachedBottom =
            e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
            e.currentTarget.clientHeight;

          if (hasReachedBottom && !loading) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
            pageTrackerRef.current = pageTrackerRef.current + 1;
          }
        }}
      >
        <NavigationButton
          label="HOME"
          subLabel="BACK"
          arrowPosition="left"
          onClick={() => router.push("/home")}
        />
        <Heading
          textAlign={{ base: "center", lg: "left" }}
          my={10}
          fontSize={{ base: "2xl", lg: "5xl" }}
          color="brand.contactUs"
        >
          ZODIAC IS NOW IN:
        </Heading>
        <Fade in={!!locations.length} unmountOnExit>
          <VStack gap={{ base: 12, lg: 4 }} mb={4}>
            {locations
              .filter((value, index, self) => {
                return self.findIndex((v) => v.id === value.id) === index;
              })
              .map(
                ({
                  id,
                  address,
                  cityName,
                  email,
                  phoneNumber,
                  image,
                  facebook,
                  instagram,
                  linkedin,
                  youtube,
                  wechat,
                  urlMap,
                  facebookActive,
                  instagramActive,
                  youtubeActive,
                  linkedinActive,
                  wechatActive,
                  whatsappActive,
                }) => (
                  <ContactCard
                    key={id}
                    title={cityName}
                    thumbnail={image}
                    address={address}
                    phoneNumber={phoneNumber}
                    email={email}
                    facebook={facebook}
                    instagram={instagram}
                    linkedin={linkedin}
                    youtube={youtube}
                    wechat={wechat}
                    map={urlMap}
                    facebookActive={facebookActive}
                    instagramActive={instagramActive}
                    youtubeActive={youtubeActive}
                    linkedinActive={linkedinActive}
                    wechatActive={wechatActive}
                    whatsappActive={whatsappActive}
                  />
                )
              )}
          </VStack>
        </Fade>
        <Fade in={loading} unmountOnExit>
          <Center>
            <Spinner color="white" size="xl" />
          </Center>
        </Fade>
      </Box>
    </Layout>
  );
}
