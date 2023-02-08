import ArrowLandingIcon from "@/assets/icons/PlayButton";
import { TCardImagePortfolioMenu } from "@/types/portofolio";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const CardImagePortfolioMenu: TCardImagePortfolioMenu = ({
  title,
  subTitle,
  color,
  banner,
  backgroundButton,
  url,
  itemId,
  fontSizeTitle = 24,
  fontSizeSubtitle = 18,
  ratio = 11 / 12,
}) => {
  const router = useRouter();
  const [isHover, setHover] = useState(false);

  return (
    <Box position="relative">
      <Button
        borderRadius={0}
        fontSize="24px"
        background={backgroundButton}
        fontWeight={700}
        role="group"
        position="absolute"
        bottom={{ base: "0%", lg: "9%" }}
        width={{ base: "80%", lg: "3rem" }}
        p={{ base: "2rem", lg: "2.5rem" }}
        color={color}
        transition="0.5s"
        _hover={{ width: "80%" }}
        onClick={() => router.push(`${url}/${itemId}`)}
        zIndex={10}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Box
          position="relative"
          transition="0.5s"
          w={{ base: "100%", lg: "unset" }}
          _groupHover={{ transition: "2s", width: "100%" }}
        >
          <Flex>
            <VStack alignItems="baseline" w="100%" spacing={0}>
              <Heading
                fontWeight="bold"
                float="left"
                fontSize={{ base: "18px", lg: fontSizeTitle }}
                textTransform="uppercase"
                display={{ base: "block", lg: "none" }}
                transition="2s"
                _groupHover={{ transition: "2s", display: "block" }}
                textOverflow="ellipsis"
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                width="100%"
                textAlign="left"
              >
                {title}
              </Heading>
              <Text
                display={{ base: "block", lg: "none" }}
                fontSize={{ base: "16px", lg: fontSizeSubtitle }}
                fontWeight="normal"
                overflow="hidden"
                transition="2s"
                width="100%"
                _groupHover={{
                  transition: "2s",
                  display: "block",
                  overflow: "hidden",
                }}
                textOverflow="ellipsis"
                whiteSpace={"nowrap"}
                textAlign="left"
                textTransform="uppercase"
              >
                {subTitle}
              </Text>
            </VStack>
            <Spacer
              display="none"
              transition="2s"
              _groupHover={{ transition: "2s", display: "block" }}
            />
            <Box alignSelf="center">
              <ArrowLandingIcon
                transition="0.5s"
                transform={{ base: "rotate(43deg)", lg: "rotate(0deg)" }}
                _groupHover={{
                  transition: "0.5s",
                  transform: "rotate(43deg)",
                  marginLeft: "10px",
                  float: "right",
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Button>
      <AspectRatio
        ratio={{
          base: 4 / 3,
          lg: ratio,
        }}
      >
        <Image
          src={banner}
          alt="explore"
          w="100%"
          height="auto"
          fallback={
            <Text color={"white"} fontWeight="bold">
              loading...
            </Text>
          }
        />
      </AspectRatio>
      <Box
        position="absolute"
        bottom="0"
        top="0"
        left="0"
        right="0"
        overflow="hidden"
        width="100%"
        height="100%"
        overflowY="auto"
        bgColor={isHover ? backgroundButton : "transparent"}
        // _hover={{
        //   transition: "1s ease",
        //   opacity: ".7",
        //   mixBlendMode: "color",
        //   bgColor: backgroundButton,
        // }}
        transition="1s"
        opacity={isHover ? ".8" : "0"}
        mixBlendMode="color"
        zIndex={9}
      ></Box>
    </Box>
  );
};

export default CardImagePortfolioMenu;
