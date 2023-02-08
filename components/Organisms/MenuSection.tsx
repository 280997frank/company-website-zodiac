import { Flex, Img, useMediaQuery } from "@chakra-ui/react";

import MenuText from "@/components/Molecules/MenuText";

import type { ImageComponent, TextComponent } from "@/constants/menu";
import type { SectionProps } from "@/types/homepage";

interface MenuSectionProps extends SectionProps {
  components: (ImageComponent | TextComponent)[];
  alignment?: "right" | "left";
}

export default function MenuSection({
  components,
  alignment = "left",
}: MenuSectionProps) {
  const [isPortrait] = useMediaQuery("(orientation: portrait)");

  return (
    <Flex
      h={{ base: "95vh", lg: "100vh" }}
      maxH="-webkit-fill-available"
      flexDir="column"
      justifyContent="flex-end"
    >
      {components.map((component) => {
        if (["logo", "astronaut"].includes(component.type)) {
          const img = component as ImageComponent;

          return (
            <picture key={component.type} id={component.type}>
              <source srcSet={img.image.webp.src} type="image/webp" />
              <Img
                pos="absolute"
                top={
                  isPortrait
                    ? img.top?.portrait
                    : img.top?.landscape ?? img.top?.portrait
                }
                left={
                  isPortrait
                    ? img.left?.portrait
                    : img.left?.landscape ?? img.left?.portrait
                }
                w={
                  isPortrait
                    ? img.width?.portrait
                    : img.width?.landscape ?? img.width?.portrait
                }
                maxW={img.maxWidth}
                src={img.image.png.src}
                htmlHeight={img.image.png.height}
                htmlWidth={img.image.png.width}
                mixBlendMode={img.mixBlendMode}
                alt=""
              />
            </picture>
          );
        } else if (component.type === "orbit") {
          const img = component as ImageComponent;

          if (isPortrait && img.mobileImage) {
            return (
              <picture key={component.type} id={component.type}>
                <source srcSet={img.mobileImage.webp.src} type="image/webp" />
                <Img
                  position="absolute"
                  top={
                    isPortrait
                      ? img.top?.portrait
                      : img.top?.landscape ?? img.top?.portrait
                  }
                  left={
                    isPortrait
                      ? img.left?.portrait
                      : img.left?.landscape ?? img.left?.portrait
                  }
                  w={img.width?.portrait}
                  src={img.image.png.src}
                  htmlHeight={img.mobileImage.png.height}
                  htmlWidth={img.mobileImage.png.width}
                  mixBlendMode="color-dodge"
                  alt=""
                />
              </picture>
            );
          }

          return (
            <picture key={component.type} id={component.type}>
              <source srcSet={img.image.webp.src} type="image/webp" />
              <Img
                top={
                  isPortrait
                    ? img.top?.portrait
                    : img.top?.landscape ?? img.top?.portrait
                }
                left={
                  isPortrait
                    ? img.left?.portrait
                    : img.left?.landscape ?? img.left?.portrait
                }
                w={img.width?.portrait}
                src={img.image.png.src}
                htmlHeight={img.image.png.height}
                htmlWidth={img.image.png.width}
                mixBlendMode="color-dodge"
                alt=""
              />
            </picture>
          );
        }

        const text = component as TextComponent;

        return (
          <MenuText
            key={component.type}
            name={text.name}
            description={text.description}
            ctaLabel={text.ctaLabel}
            href={text.href}
            color={text.color}
            pos={{
              base: isPortrait ? "initial" : "absolute",
              md: isPortrait ? "initial" : "absolute",
              lg: "absolute",
            }}
            top={text.top}
            left={
              isPortrait
                ? text.left.portrait
                : text.left.landscape ?? text.left.portrait
            }
            alignment={alignment}
            label={text.label}
          />
        );
      })}
    </Flex>
  );
}
