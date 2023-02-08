import NavigationButton from "@/components/Atoms/NavigationButton";
import { actions as homepageActions } from "@/states/homepage/slices";
import type { SectionProps } from "@/types/homepage";
import { MenuName } from "@/types/homepage";
import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  Heading,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";

interface MenuTextProps extends SectionProps, BoxProps {
  name: MenuName;
  description: string;
  ctaLabel: string;
  href: string;
  alignment: "right" | "left";
  color: BoxProps["color"];
  label?: ReactNode;
}

export default function MenuText({
  name,
  description,
  ctaLabel,
  href,
  color,
  alignment,
  label,
  ...rest
}: MenuTextProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPortrait] = useMediaQuery("(orientation: portrait)");

  return (
    <VStack
      {...rest}
      gap={2}
      alignItems={alignment === "left" ? "flex-start" : "flex-end"}
      w={{ lg: "45%", "2xl": "30%" }}
      maxW={{
        base: isPortrait ? "32rem" : "26rem",
        md: isPortrait ? "32rem" : "26rem",
        lg: "36rem",
        "2xl": "30rem",
      }}
      px={{ base: "5%", lg: 0 }}
      pb={{ base: "9%", lg: 0 }}
    >
      <NavigationButton
        label="HOME"
        subLabel="BACK"
        arrowPosition="left"
        onClick={() => dispatch(homepageActions.setPageMode(MenuName.Home))}
      />
      <Heading
        color={color}
        textTransform="uppercase"
        fontSize={{ base: "2rem", lg: "3rem", xl: "4rem" }}
        textAlign={alignment}
      >
        {label ?? name.replace(/-/g, " ")}
      </Heading>
      <Text
        color="white"
        fontSize={{ lg: "lg", xl: "xl" }}
        fontWeight="500"
        textAlign={alignment}
        lineHeight="1.1"
      >
        {description}
      </Text>
      <Button
        _hover={{
          textDecoration: "none",
        }}
        borderRadius={0}
        bgColor={color}
        color="#081029"
        fontSize={{ xl: "xl" }}
        fontWeight="500"
        display="flex"
        alignItems="center"
        h="3.5rem"
        py={3}
        px={4}
        textTransform="uppercase"
        onClick={() => router.push(href)}
      >
        {ctaLabel}
        <Box
          as="span"
          fontSize={{ base: "1.5rem", xl: "2.5rem" }}
          color="#081029"
          ml={3}
          transition="0.5s"
          sx={{
            "button:hover > &": {
              marginLeft: "1.5rem",
            },
            "button:focus > &": {
              marginLeft: "1.5rem",
            },
            "button > & > svg": {
              transform: "rotate(-45deg)",
              transition: "0.5s",
            },
            "button:hover > & > svg": {
              transform: "rotate(0deg)",
            },
            "button:focus > & > svg": {
              transform: "rotate(0deg)",
            },
          }}
        >
          <BsArrowRight />
        </Box>
      </Button>
    </VStack>
  );
}
