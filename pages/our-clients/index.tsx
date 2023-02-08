import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

import { useListClients } from "@/hooks/clients";
import { useWindowSize } from "@/hooks/utils";

import Layout from "@/components/Templates/Layout";
import { useEffect, useState } from "react";
import NavigationButton from "@/components/Atoms/NavigationButton";
import { useRouter } from "next/router";

export default function Clients() {
  const router = useRouter();
  const [isDesktop] = useMediaQuery(
    "(min-width: 62em) and (orientation: landscape)"
  );
  const [isMobileLandscape] = useMediaQuery(
    "(min-width: 30em) and (max-width: 62em)"
  );
  const { innerHeight } = useWindowSize();
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(0);

  const { fetchListClient, data } = useListClients({
    input: {
      page: 1,
      filter: {
        isActive: true,
      },
      limit: limit,
      order: {
        sortBy: "ASC",
        orderBy: "NAME",
      },
    },
  });

  useEffect(() => {
    fetchListClient();
  }, [fetchListClient]);

  useEffect(() => {
    if (isDesktop) {
      if (showAll) {
        setLimit(25);
      } else {
        setLimit(15);
      }
    } else if (isMobileLandscape) {
      if (showAll) {
        setLimit(25);
      } else {
        setLimit(9);
      }
    } else {
      if (showAll) {
        setLimit(25);
      } else {
        setLimit(9);
      }
    }
  }, [isDesktop, showAll, isMobileLandscape]);

  return (
    <Layout title="Our Clients">
      <VStack h={innerHeight} px={4} justifyContent="center">
        <VStack
          h={{ base: "70vh", md: "90vh" }}
          overflowY="auto"
          scrollBehavior="auto"
          pt={{ base: "5", md: "35", lg: "16" }}
        >
          <Flex
            w={{ base: "full" }}
            display={{ base: "flex", md: "none" }}
            justifyContent="flex-start"
          >
            <NavigationButton
              label="HOME"
              subLabel="BACK"
              arrowPosition="left"
              onClick={() => router.push("/home")}
            />
          </Flex>

          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            color="#FFBB84"
            fontWeight="700"
            textAlign="center"
            fontFamily="Mark Pro"
          >
            OUR VALUED CLIENTS
          </Text>

          <Box h="100%">
            <Grid
              w="90vw"
              templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
              gap={{ base: 4, lg: 0 }}
              justifyContent="center"
              alignItems="center"
              display="inline-grid"
              height="100%"
            >
              {data?.listClients.clients.map((item, index) => (
                <GridItem
                  key={index}
                  maxWidth={{ base: "6.25em", md: "9.375em", xl: "12.5em" }}
                  maxHeight={{ base: "6.25em", md: "9.375em", lg: "12.5em" }}
                  h="100%"
                  pl={{ base: 0, md: "10", lg: 0 }}
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    alt="ZODIAC"
                    src={item.logoUrl}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>

          {!showAll && (
            <Text
              fontSize={{ base: "2xl", lg: "1.5rem" }}
              fontWeight="700"
              fontFamily="Mark Pro"
              color="#FFBB84"
              pt="10"
              onClick={() => setShowAll(true)}
            >
              ...and the list goes on!
            </Text>
          )}
        </VStack>
      </VStack>
    </Layout>
  );
}
