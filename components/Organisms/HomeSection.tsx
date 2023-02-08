import React, { RefObject, useRef, useEffect } from "react";
import { Box, Img, Button, Text, useMediaQuery } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import Bounce from "@/components/Atoms/Bounce";

import orbitsWebp from "@/assets/images/orbits.webp";
import orbitsPng from "@/assets/images/orbits.png";
import mobileOrbitsWebp from "@/assets/images/orbits/mobile-home-orbits.webp";
import mobileOrbitsPng from "@/assets/images/orbits/mobile-home-orbits.png";
import astronautWebp from "@/assets/images/astronaut.webp";
import astronautPng from "@/assets/images/astronaut.png";

import { actions as homepageActions } from "@/states/homepage/slices";

import { homepageMenus } from "@/constants/menu";

interface HomeSectionProps {
  containerRef: RefObject<HTMLDivElement>;
}

export default function HomeSection({ containerRef }: HomeSectionProps) {
  const [isPortrait] = useMediaQuery("(orientation: portrait)");
  const dispatch = useDispatch();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPortrait && containerRef.current && boxRef.current) {
      containerRef.current.scrollBy(
        (boxRef.current.clientWidth - window.innerWidth) / 2,
        0
      );
    }
  }, [isPortrait, containerRef]);

  return (
    <Box ref={boxRef}>
      <picture>
        <source
          srcSet={isPortrait ? mobileOrbitsWebp.src : orbitsWebp.src}
          type="image/webp"
        />
        <Img
          src={isPortrait ? mobileOrbitsPng.src : orbitsPng.src}
          htmlHeight={isPortrait ? mobileOrbitsPng.height : orbitsPng.height}
          htmlWidth={isPortrait ? mobileOrbitsPng.width : orbitsPng.width}
          mixBlendMode="color-dodge"
          alt=""
          sx={{
            "@media (orientation: portrait)": {
              w: "100vh",
              h: "auto",
              maxW: "unset",
            },
          }}
        />
      </picture>
      <Bounce
        pos="absolute"
        top={{ base: "25%", sm: "25%", lg: "31%" }}
        left={{ base: "47vh", sm: "40vh", lg: "50%" }}
        w={{ base: "12.5rem", sm: "50%", lg: "17%" }}
      >
        <picture>
          <source srcSet={astronautWebp.src} type="image/webp" />
          <Img
            src={astronautPng.src}
            htmlHeight={astronautPng.height}
            htmlWidth={astronautPng.width}
            alt=""
          />
        </picture>
      </Bounce>
      {homepageMenus.map(
        ({ png, webp, top, left, width, flexDir, name, color, label, sx }) => (
          <Bounce
            key={name}
            pos="absolute"
            top={isPortrait ? top.portrait : top.landscape}
            left={isPortrait ? left.portrait : left.landscape}
            sx={sx}
          >
            <Button
              bgColor="transparent"
              p={0}
              h="auto"
              w={{ base: "max-content", lg: "auto" }}
              display="flex"
              flexDir={flexDir}
              _hover={{ bgColor: "transparent" }}
              _active={{ bgColor: "transparent" }}
              onClick={() => dispatch(homepageActions.setPageMode(name))}
            >
              <picture>
                <source srcSet={webp.src} type="image/webp" />
                <Img
                  src={png.src}
                  htmlHeight={png.height}
                  htmlWidth={png.width}
                  w={width}
                  alt=""
                />
              </picture>
              <Text
                as="span"
                textTransform="uppercase"
                fontFamily="Mark Pro"
                fontSize={{ lg: "1.5rem", "2xl": "2rem" }}
                fontWeight="bold"
                color={color}
                textAlign={flexDir === "row-reverse" ? "right" : "left"}
                mr={flexDir === "row-reverse" ? "-1rem" : 0}
                ml={flexDir === "row" ? "-1rem" : 0}
              >
                {label ?? name.replace(/-/g, " ")}
              </Text>
            </Button>
          </Bounce>
        )
      )}
    </Box>
  );
}
