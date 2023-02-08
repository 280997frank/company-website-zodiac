import { MenuName } from "@/types/homepage";
import { Box, Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import type { SectionProps } from "@/types/homepage";
import type { BoxProps } from "@chakra-ui/react";

interface MenuSectionProps extends SectionProps {
  name: MenuName;
  description: string;
  ctaLabel: string;
  href: string;
  color: BoxProps["color"];
  setPageMode: any;
}

export default function MenuSection({
  setPageMode,
  name,
  description,
  ctaLabel,
  href,
  color,
}: MenuSectionProps) {
  return (
    <VStack gap={4} alignItems="flex-start">
      <Button
        h="auto"
        onClick={() => setPageMode(MenuName.Home)}
        variant="unstyled"
        display="flex"
        color="white"
        leftIcon={<BsArrowLeft />}
        sx={{
          "& svg": {
            width: "2.5rem",
            height: "auto",
          },
        }}
      >
        <Box
          textAlign="left"
          ml="1rem"
          transition="1s"
          _hover={{ marginLeft: "3rem" }}
          sx={{
            "button:focus > &": {
              marginLeft: "3rem",
            },
          }}
        >
          <Text as="span" fontFamily="Barlow" fontWeight="500">
            BACK
          </Text>
          <br />
          <Text as="span" fontSize="2xl" fontFamily="Mark Pro">
            HOME
          </Text>
        </Box>
      </Button>
      <Heading color={color} textTransform="uppercase" fontSize="4rem">
        {name.replace(/-/g, " ")}
      </Heading>
      <Text color="white" fontSize="xl" fontWeight="500">
        {description}
      </Text>
      <NextLink href={href} passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
          bgColor={color}
          fontSize="xl"
          fontWeight="500"
          display="flex"
          p={4}
        >
          {ctaLabel}
          <BsArrowRight />
        </Link>
      </NextLink>
    </VStack>
  );
}
