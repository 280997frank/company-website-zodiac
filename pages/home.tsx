import { Fade, Flex, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";

import HomeSection from "@/components/Organisms/HomeSection";
import MenuSection from "@/components/Organisms/MenuSection";
import Layout from "@/components/Templates/Layout";

import { menus } from "@/constants/menu";

import type { RootState } from "@/states/store";
import { MenuName } from "@/types/homepage";

export default function Homepage() {
  const { pageMode } = useSelector(
    (state: RootState) => ({
      pageMode: state.homepage.pageMode,
    }),
    shallowEqual
  );
  const layoutRef = useRef<HTMLDivElement>(null);
  const [isPortrait] = useMediaQuery("(orientation: portrait)");

  useEffect(() => {
    if (layoutRef.current) {
      layoutRef.current.scrollLeft = 0;
      layoutRef.current.scrollTop = 0;
    }
    // `pageMode` dependency is by design
  }, [pageMode]);

  return (
    <Layout
      containerRef={layoutRef}
      title="Home"
      overflow={{
        base: isPortrait
          ? pageMode !== MenuName.Home
            ? "hidden"
            : "auto hidden"
          : "hidden auto",
        md: "hidden auto",
        xl: "hidden",
      }}
      sx={{
        "@media (orientation: portrait) and (min-width: 48em)": {
          overflow: pageMode === MenuName.Home ? "auto hidden" : "hidden auto",
        },
        "@media (orientation: portrait) and (min-width: 62em)": {
          overflowX: pageMode === MenuName.Home ? "auto" : "hidden",
        },
      }}
    >
      <Flex
        alignItems={{ base: "center", xl: "flex-end" }}
        h="100vh"
        maxH="-webkit-fill-available"
      >
        <Fade in={pageMode === MenuName.Home} unmountOnExit>
          <HomeSection containerRef={layoutRef} />
        </Fade>
        <Fade in={pageMode === MenuName.AboutUs} unmountOnExit>
          <MenuSection components={menus[MenuName.AboutUs]} />
        </Fade>
        <Fade in={pageMode === MenuName.Careers} unmountOnExit>
          <MenuSection components={menus[MenuName.Careers]} />
        </Fade>
        <Fade in={pageMode === MenuName.Clients} unmountOnExit>
          <MenuSection components={menus[MenuName.Clients]} />
        </Fade>
        <Fade in={pageMode === MenuName.ContactUs} unmountOnExit>
          <MenuSection components={menus[MenuName.ContactUs]} />
        </Fade>
        <Fade in={pageMode === MenuName.ZodiacEvents} unmountOnExit>
          <MenuSection components={menus[MenuName.ZodiacEvents]} />
        </Fade>
        <Fade in={pageMode === MenuName.ZodiacLabs} unmountOnExit>
          <MenuSection components={menus[MenuName.ZodiacLabs]} />
        </Fade>
        <Fade in={pageMode === MenuName.ZodiacSolutions} unmountOnExit>
          <MenuSection
            components={menus[MenuName.ZodiacSolutions]}
            alignment={isPortrait ? "left" : "right"}
          />
        </Fade>
        <Fade in={pageMode === MenuName.ZodiacStudios} unmountOnExit>
          <MenuSection components={menus[MenuName.ZodiacStudios]} />
        </Fade>
      </Flex>
    </Layout>
  );
}
