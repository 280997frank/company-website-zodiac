import React from "react";
import Head from "next/head";

import { Flex, Center, Img, Heading, Link } from "@chakra-ui/react";

import { useWindowSize } from "@/hooks/utils";

import defaultStarsBgWebp from "@/assets/images/default-stars-background.webp";
import defaultStarsBgPng from "@/assets/images/default-stars-background.png";
import zodiacSolutionsPng from "@/assets/images/menus/zodiac-solutions-logo.png";
import zodiacSolutionsWebp from "@/assets/images/menus/zodiac-solutions-logo.webp";
import zodiacEventsPng from "@/assets/images/menus/zodiac-events-logo.png";
import zodiacEventsWebp from "@/assets/images/menus/zodiac-events-logo.webp";

import zodiacLabsPng from "@/assets/images/menus/zodiac-labs-logo.png";
import zodiacLabsWebp from "@/assets/images/menus/zodiac-labs-logo.webp";
import zodiacStudiosPng from "@/assets/images/menus/zodiac-studios-logo.png";
import zodiacStudiosWebp from "@/assets/images/menus/zodiac-studios-logo.webp";

import logo from "@/assets/images/default-logo.png";

export default function ComingSoon() {
  const { innerHeight } = useWindowSize();

  return (
    <>
      <Head>
        <title>Coming Soon | Zodiac Solutions</title>
        <meta name="description" content="Coming soon!" />
        <link rel="shortcut icon" href="/favicon.png"></link>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Center
        h={innerHeight}
        overflow="hidden"
        pos="relative"
        bgSize="auto 100%"
        bgPos="center"
        bgColor="#050e27"
        sx={{
          ".webp &": {
            bgImage: defaultStarsBgWebp.src,
          },
          ".no-webp &": {
            bgImage: defaultStarsBgPng.src,
          },
        }}
      >
        <picture>
          <source srcSet={zodiacSolutionsWebp.src} type="image/webp" />
          <Img
            src={zodiacSolutionsPng.src}
            htmlHeight={zodiacSolutionsPng.height}
            htmlWidth={zodiacSolutionsPng.width}
            alt=""
            pos="absolute"
            left={{ base: "55%", lg: "50%" }}
            top="0"
            transform={{
              base: "translate(-50%, -60%) rotate(90deg)",
              lg: "translate(-50%, -40%) rotate(90deg)",
            }}
            w={{ lg: "15rem", xl: "25rem" }}
            sx={{
              "@media (orientation: landscape)": {
                width: "25rem",
                left: "53%",
              },
              "@media (orientation: landscape) and (pointer: coarse) and (min-width: 48em)":
                {
                  width: "20rem",
                },
            }}
          />
        </picture>
        <picture>
          <source srcSet={zodiacEventsWebp.src} type="image/webp" />
          <Img
            src={zodiacEventsPng.src}
            htmlHeight={zodiacEventsPng.height}
            htmlWidth={zodiacEventsPng.width}
            alt=""
            pos="absolute"
            left="50%"
            bottom="0"
            transform={{
              base: "translate(-50%, 41%)",
              lg: "translate(-50%, 32%)",
            }}
            w={{ lg: "30rem", xl: "40rem" }}
            sx={{
              "@media (orientation: landscape)": {
                width: "20rem",
              },
              "@media (orientation: landscape) and (pointer: coarse) and (min-width: 48em)":
                {
                  width: "15rem",
                },
            }}
          />
        </picture>
        <picture>
          <source srcSet={zodiacStudiosWebp.src} type="image/webp" />
          <Img
            src={zodiacStudiosPng.src}
            htmlWidth={zodiacStudiosPng.width}
            alt=""
            pos="absolute"
            right="0"
            top="50%"
            display={{ lg: "block" }}
            transform="translate(35%, -50%)"
            w={{ base: "20rem", lg: "30rem", xl: "32rem", "2xl": "40rem" }}
            sx={{
              "@media (orientation: portrait)": {
                display: "none",
              },
              "@media (orientation: landscape) and (pointer: coarse) and (min-width: 48em)":
                {
                  width: "15rem",
                },
            }}
          />
        </picture>
        <picture>
          <source srcSet={zodiacLabsWebp.src} type="image/webp" />
          <Img
            src={zodiacLabsPng.src}
            htmlWidth={zodiacLabsPng.width}
            alt=""
            pos="absolute"
            left="0"
            top="50%"
            display={{ lg: "block" }}
            transform="translate(-10%, -50%)"
            w={{ base: "12rem", lg: "20rem", xl: "22rem", "2xl": "30rem" }}
            sx={{
              "@media (orientation: portrait)": {
                display: "none",
              },
              "@media (orientation: landscape) and (pointer: coarse) and (min-width: 48em)":
                {
                  width: "10rem",
                },
            }}
          />
        </picture>
        <Flex flexDir="column" alignItems="center">
          <Img
            src={logo.src}
            htmlHeight={logo.height}
            htmlWidth={logo.width}
            alt="ZODIAC"
            w="50vw"
            maxW="25rem"
          />
          <Heading
            color="brand.grey10"
            mixBlendMode="color-dodge"
            letterSpacing="0.5em"
            mr="-0.5em"
            fontSize={{ base: "2rem", lg: "4rem" }}
            textAlign="center"
            fontFamily="Barlow"
            my={{ base: 6, lg: 12 }}
          >
            COMING SOON
          </Heading>
          <Link
            href="mailto:contact@zodiacsolutions.sg"
            color="white"
            fontFamily="Barlow"
            fontSize="xl"
            textTransform="uppercase"
            zIndex="1"
          >
            contact@zodiacsolutions.sg
          </Link>
        </Flex>
      </Center>
    </>
  );
}
