import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Img,
  Heading,
  Text,
  Button,
  Link,
  AspectRatio,
  Fade,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import fbIcon from "@/assets/svg/fb-icon.svg";
import igIcon from "@/assets/svg/ig-icon.svg";
import youtubeIcon from "@/assets/svg/youtube-icon.svg";
import linkedinIcon from "@/assets/svg/linkedin-icon.svg";
import wechatIcon from "@/assets/svg/wechat-icon.svg";

interface ContactCardProps {
  title: string;
  thumbnail: string;
  address: string;
  phoneNumber: string;
  email: string;
  map: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  wechat?: string;
  facebookActive?: boolean;
  instagramActive?: boolean;
  youtubeActive?: boolean;
  linkedinActive?: boolean;
  wechatActive?: boolean;
  whatsappActive?: boolean;
}

export default function ContactCard({
  title,
  thumbnail,
  address,
  phoneNumber,
  email,
  map,
  facebook,
  instagram,
  linkedin,
  youtube,
  wechat,
  facebookActive,
  instagramActive,
  youtubeActive,
  linkedinActive,
  wechatActive,
}: ContactCardProps) {
  const [imageHeight, setImageHeight] = useState(0);
  const [isMapShown, setMapShown] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageHeight(imgRef.current.clientHeight);
    }
  }, []);

  return (
    <Flex
      as="article"
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      w="full"
      h="100%"
    >
      <Box
        pos="relative"
        h={{ base: `calc(${imageHeight}px + 1.5rem)`, lg: "auto" }}
        flex={{ base: "1", lg: "1 0 15vw" }}
        role="group"
        sx={{
          "& iframe": {
            bgColor: "white",
            maxW: "40rem",
          },
        }}
      >
        <AspectRatio
          ratio={16 / 9}
          w={{ lg: "30rem", xl: "40rem", "2xl": "47rem" }}
          maxW={{ lg: "30rem", xl: "40rem", "2xl": "47rem" }}
          pos="relative"
        >
          <>
            <Fade in={isMapShown} unmountOnExit>
              <iframe
                src={map}
                frameBorder="0"
                width="1920"
                height="1080"
                allowFullScreen
              ></iframe>
            </Fade>
            <Fade in={!isMapShown} unmountOnExit>
              <Box
                pos="relative"
                width="100%"
                _groupHover={{
                  ":after": {
                    width: "100%",
                  },
                }}
                _after={{
                  content: `""`,
                  width: "0%",
                  bg: "rgba(161, 0, 53, .4)",
                  pos: "absolute",
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  transition: ".4s",
                }}
              >
                <Img
                  ref={imgRef}
                  src={thumbnail}
                  alt=""
                  htmlWidth="1920"
                  htmlHeight="1080"
                />
              </Box>
              {/* <Box
                pos="absolute"
                left={0}
                top={0}
                bottom={0}
                w={0}
                h={imageHeight}
                bgColor="rgba(161, 0, 53, .4)"
                transition=".5s ease"
                zIndex="2"
                sx={{
                  "div:hover > &": {
                    w: "100%",
                  },
                }}
                _groupHover={{
                  w: "100%",
                  right: 0
                }}
              /> */}
            </Fade>
          </>
        </AspectRatio>
        <Fade in={!isMapShown}>
          <Heading
            fontSize={{ base: "4xl", md: "4rem", "2xl": "6rem" }}
            color="brand.contactUs"
            textTransform="uppercase"
            pos="relative"
            transform="translateX(0%) translateY(-50%)"
            // bottom={{ base: 6, lg: "3.75rem" }}
            left={0}
            transition=".5s ease"
            w="fit-content"
            lineHeight="1"
            // sx={{
            //   "div:hover > div > &": {
            //     left: "100%",
            //     transform: "translateX(-100%) translateY(-50%)",
            //   },
            // }}
            _groupHover={{
              left: "100%",
              transform: "translateX(-100%) translateY(-50%)",
            }}
          >
            {title}
          </Heading>
        </Fade>
      </Box>
      <Box
        display="flex"
        pl={{ lg: 6 }}
        mt="-5px"
        flexDir="column"
        pos={{ lg: "relative" }}
        // justifyContent="space-between"
        // pt={{ base: 0, xl: 6 }}
      >
        <Box as="address" fontStyle="normal">
          <Text color="white" fontWeight="500" mb={{ base: 3, xl: 5 }}>
            {address}
          </Text>
          <Text color="white" fontWeight="500" mb={{ base: 2, xl: 5 }}>
            {phoneNumber}
          </Text>
          <Text color="white" fontWeight="500" mb={{ base: 3, xl: 6 }}>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Text>

          <HStack gap={{ base: 6, lg: 4 }} pl={2} mb={{ base: 8, xl: 10 }}>
            {facebookActive && (
              <Link href={`${facebook}`} isExternal>
                <Img src={fbIcon.src} alt="Facebook" color="white" />
              </Link>
            )}
            {instagramActive && (
              <Link href={`${instagram}`} isExternal>
                <Img src={igIcon.src} alt="Instagram" />
              </Link>
            )}
            {linkedinActive && (
              <Link href={`${linkedin}`} isExternal>
                <Img src={linkedinIcon.src} alt="LinkedIn" />
              </Link>
            )}
            {youtubeActive && (
              <Link href={`${youtube}`} isExternal>
                <Img src={youtubeIcon.src} alt="Youtube" />
              </Link>
            )}
            {wechatActive && (
              <Link href={`${wechat}`} isExternal>
                <Img src={wechatIcon.src} alt="WeChat" />
              </Link>
            )}
          </HStack>
        </Box>
        <Button
          pos={{ lg: "absolute" }}
          bottom={0}
          _hover={{
            textDecoration: "none",
          }}
          bgColor="brand.contactUs"
          borderRadius={0}
          color="#081029"
          fontSize={{ base: "xl", lg: "md", xl: "xl" }}
          fontWeight="500"
          display="flex"
          alignItems="center"
          h={{ base: 14, xl: 16 }}
          py={3}
          px={4}
          textTransform="uppercase"
          onClick={() => setMapShown((prevState) => !prevState)}
          mb={{ lg: "2%", xl: "2%" }}
          mt={{ base: "3vh", lg: 0 }}
          transform="translateX(0%) translateY(-50%)"
          w={
            isMapShown
              ? { base: "50%", lg: "70%", xl: "50%" }
              : { base: "60%", lg: "90%", xl: "70%" }
          }
          transition=".5s"
        >
          {isMapShown ? "CLOSE MAP" : "SHOW ON MAP"}
          <Text
            as="span"
            fontSize={isMapShown ? "1.75rem" : "2.5rem"}
            color="#081029"
            ml={3}
            transition="0.5s"
            sx={
              !isMapShown
                ? {
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
                  }
                : undefined
            }
          >
            {isMapShown ? <GrClose /> : <BsArrowRight />}
          </Text>
        </Button>
      </Box>
    </Flex>
  );
}
