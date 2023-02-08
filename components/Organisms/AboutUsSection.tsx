import React from "react";
import { Img } from "@chakra-ui/react";

import MenuSection from "@/components/Molecules/MenuSection";

import orbitsWebp from "@/assets/images/orbits/about-us-orbits.webp";
import orbitsPng from "@/assets/images/orbits/about-us-orbits.png";
// import astronautWebp from "@/assets/images/astronaut.webp";
// import astronautPng from "@/assets/images/astronaut.png";
import aboutUsWebp from "@/assets/images/menus/about-us-logo.webp";
import aboutUsPng from "@/assets/images/menus/about-us-logo.png";

import { MenuName } from "@/types/homepage";

// import type { SectionProps } from "@/types/homepage";

export default function AboutUsSection({ setPageMode }: any) {
  return (
    <>
      <picture>
        <source srcSet={orbitsWebp.src} type="image/webp" />
        <Img
          src={orbitsPng.src}
          htmlHeight={orbitsPng.height}
          htmlWidth={orbitsPng.width}
          alt=""
        />
      </picture>
      <picture>
        <source srcSet={aboutUsWebp.src} type="image/webp" />
        <Img
          pos="absolute"
          top="0"
          left="0"
          src={aboutUsPng.src}
          htmlHeight={aboutUsPng.height}
          htmlWidth={aboutUsPng.width}
          alt=""
        />
      </picture>
      <MenuSection
        setPageMode={setPageMode}
        name={MenuName.AboutUs}
        description="Zodiac Solutions was established in 2017 and is a local company within the Singapore Information Technology industry. We specialise in business solutions that caters to every business ranging from start ups to MNCs."
        ctaLabel="MORE ABOUT ZODIAC"
        href="/our-story"
        color="brand.aboutUs"
      />
    </>
  );
}
