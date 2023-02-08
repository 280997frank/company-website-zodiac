import React, { FC, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image, Fade, useMediaQuery } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import Menus from "@/components/Organisms/Menus";

import { actions as homepageActions } from "@/states/homepage/slices";

import { MenuName } from "@/types/homepage";

import logoDefault from "@/assets/images/default-logo.png";
import bgWebp from "@/assets/images/default-stars-background.webp";
import bgPng from "@/assets/images/default-stars-background.png";

import type { TLayout } from "@/types/layout";

const gradient =
  "radial-gradient(50% 50% at 50% 50%, #0D2251 0%, #060E24 100%)";
const gradient2 =
  "radial-gradient(71.57% 71.57% at 50% 50%, #0D2251 0%, #060E24 100%)";

const Layout: FC<TLayout> = ({
  title,
  description,
  children = null,
  overflow,
  containerRef,
  sx,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop] = useMediaQuery(
    "(min-width: 48em) and (orientation: landscape)"
  );
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(homepageActions.setPageMode(MenuName.Home));
    };
  }, [dispatch]);

  useEffect(() => {
    if (showMenu) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
    }
  }, [showMenu]);

  return (
    <>
      <Head>
        <title>{title} | Zodiac Solutions</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.png"></link>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Box
        ref={containerRef}
        as="main"
        height="100%"
        // maxH="-webkit-fill-available" // → bug(safari) on labs list, portofolio.
        // maxH="fill"
        // bgSize="100% auto"
        bgSize={{ base: "auto 100%", lg: "cover" }}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgAttachment="local"
        overflow={overflow}
        position="relative"
        sx={{
          ".no-webp &": {
            backgroundImage: `url(${bgPng.src}), ${gradient}, ${gradient2}`,
          },
          ".webp &": {
            backgroundSize: "cover",
            backgroundImage: `url(${bgWebp.src}), ${gradient}, ${gradient2}`,
          },
          ...sx,
          /* "@media (orientation: portrait)": {
          overflowX: "auto",
          bgSize: "auto 100%",
        }, */
        }}
      >
        <Box
          w="100%"
          bgColor={isDesktop || showMenu ? "transparent" : "rgb(0 0 0 / 25%)"}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          position="fixed"
          h="4rem"
          alignItems="center"
          p="2vw 2vw 0"
          zIndex="11"
        >
          <Image
            alt="ZODIAC"
            src={logoDefault.src}
            h={{ base: "2rem", md: "2.5rem" }}
            // top={6}
            // left={6}
            zIndex="1"
            cursor="pointer"
            onClick={() => {
              router.push("/home");
            }}
            visibility={showMenu ? "hidden" : "visible"}
          />
          <Button
            variant="unstyled"
            background="transparent"
            _hover={{ background: "transparent" }}
            onClick={() => {
              setShowMenu((prevState) => !prevState);
            }}
            zIndex="11"
          >
            <Box
              width="2.5rem"
              h="2.5rem"
              position="relative"
              // margin="50px auto"
              transform="rotate(0deg)"
              transition=".5s ease-in-out"
              cursor="pointer"
              className={showMenu ? "open" : ""}
              sx={{
                "& span": {
                  display: "block",
                  position: "absolute",
                  height: "0.25rem",
                  width: "100%",
                  background: "white",
                  opacity: 1,
                  left: 0,
                  transform: "rotate(0deg)",
                  transition: ".25s ease-in-out",
                  "@media (max-width: 48em)": {
                    height: "0.2rem",
                  },
                },
                "& span:nth-of-type(1)": {
                  top: "10px",
                  transformOrigin: "left center",
                },

                "& span:nth-of-type(2)": {
                  top: "24px",
                  transformOrigin: "left center",
                },
                "&.open span:nth-of-type(1)": {
                  transform: "rotate(45deg)",
                  top: "3px",
                  left: "6px",
                },
                "&.open span:nth-of-type(2)": {
                  transform: "rotate(-45deg)",
                  top: "32px",
                  left: "5px",
                },
              }}
            >
              <span />
              <span />
            </Box>
          </Button>
        </Box>
        {children}
      </Box>
      <Fade in={showMenu} unmountOnExit>
        <Box
          w="100%"
          h="100%"
          overflow="auto"
          color="white"
          position="absolute"
          top={0}
          bgColor="rgba(0,0,0,0.9)"
          zIndex="10"
        >
          <Menus onClose={setShowMenu}></Menus>
        </Box>
      </Fade>
    </>
  );
};

export default Layout;
