import NavigationButton from "@/components/Atoms/NavigationButton";
import Layout from "@/components/Templates/Layout";
import { useListDesignation, useMainDescDesignation } from "@/hooks/getCareers";
// import { useWindowSize } from "@/hooks/utils";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  Spinner,
  AspectRatio,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Careers() {
  const [limitPerPage, setLimitPerPage] = useState(10);
  const router = useRouter();
  const imageRef = useRef<HTMLDivElement[]>([]);
  // const copyrightRef = useRef<HTMLDivElement[]>([]);
  // const { innerWidth } = useWindowSize();

  const { fetchMainDesDesignation, data: mainDesc } = useMainDescDesignation();
  const { fetchListDesignation, data, loading } = useListDesignation();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  // const [isTab] = useMediaQuery("(max-width: 1210px)");

  // console.log("data", data, mainDesc);
  const loadMore = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement?.scrollHeight
    ) {
      if (data) {
        if (data?.listDesignations.page < data?.listDesignations.totalPage) {
          setLimitPerPage(limitPerPage + 10);
        }
      }
    }
  }, [data, limitPerPage]);

  useEffect(() => {
    window.addEventListener("scroll", loadMore, false);
    fetchMainDesDesignation();
    fetchListDesignation({
      variables: { input: { page: 1, limit: limitPerPage } },
    });
    return () => window.removeEventListener("scroll", loadMore, false);
  }, [fetchListDesignation, fetchMainDesDesignation, limitPerPage, loadMore]);
  return (
    <Layout title="Join Us" overflow="auto">
      <Box
        position="absolute"
        width="100vw"
        height="100vh"
        _after={{
          content: `" "`,
          width: ["100vw", "100vw", "55vw"],
          height: ["70vh", "70vh", "90vh"],
          backgroundColor: "transparent",
          background:
            "radial-gradient(50% 50%, rgba(240, 229, 36, 0.2) 0%, transparent)",
          position: "absolute",
          left: ["-35vw", "-35vw", "-25vw"],
          bottom: ["-35vw", "-35vw", "-20vw"],
        }}
      />
      <Box
        width={["90vw", "90vw", "70vw"]}
        minH="100vh"
        margin="auto"
        py="10vh"
        pos="relative"
        sx={{
          "@media (min-width: 30em) and (orientation: landscape)": {
            paddingTop: "20vh",
          },
        }}
      >
        <VStack align="flex-start">
          <NavigationButton
            label="HOME"
            subLabel="BACK"
            arrowPosition="left"
            onClick={() => router.push("/home")}
          />
          <Flex
            flexDir="column"
            gap="10px"
            textAlign={["center", "center", "left"]}
            style={{ marginBottom: "50px", marginTop: "30px" }}
          >
            <Heading
              fontFamily="Mark Pro"
              color="brand.careers"
              fontSize={["8vw", "8vw", "3vw"]}
              dangerouslySetInnerHTML={{
                __html: mainDesc?.getCareer.title || "",
              }}
            />
            <Text
              color="#fff"
              fontFamily="Barlow"
              dangerouslySetInnerHTML={{
                __html: mainDesc?.getCareer.description || "",
              }}
            />
            <Text
              color="#fff"
              fontFamily="Barlow"
              dangerouslySetInnerHTML={{
                __html: mainDesc?.getCareer.description2 || "",
              }}
            />
          </Flex>
          <Flex flexDir="column" gap="3vw" width="100%">
            {data?.listDesignations.designations.map((item, i) => {
              return (
                <Flex key={i} flexDir={{ base: "column", lg: "row" }}>
                  <Box
                    ref={(ref: HTMLDivElement) => (imageRef.current[i] = ref)}
                    w="100%"
                    role="group"
                    pos="relative"
                    cursor="pointer"
                    height="fit-content"
                  >
                    <Box
                      pos="relative"
                      filter="none"
                      width="100%"
                      _groupHover={{
                        ":after": {
                          width: "100%",
                        },
                      }}
                      _after={{
                        content: `""`,
                        width: "0%",
                        bg: "brand.careers",
                        pos: "absolute",
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                        transition: ".4s",
                        opacity: ".15",
                      }}
                    >
                      <AspectRatio
                        ratio={16 / 9}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        alignContent="center"
                        width="100%"
                      >
                        <Img
                          src={item.imageUrl}
                          width="100%"
                          _groupHover={{
                            transition: ".4s",
                            WebkitTransition: "-webkit-filter .5s",
                            filter: "brightness(110%) saturate(150%)",
                            // filter: "grayscale(100%) sepia(43%) hue-rotate(43deg) saturate(200%)",
                            // filter: "sepia(38%) brightness(125%) hue-rotate(28deg) saturate(419%)",
                          }}
                        />
                      </AspectRatio>
                    </Box>
                    <Heading
                      ml="-3px"
                      color="brand.careers"
                      width="0%"
                      transform="translateY(-53%)"
                      textAlign="right"
                      whiteSpace="nowrap"
                      textTransform="uppercase"
                      zIndex="auto"
                      _groupHover={{ transition: ".4s", width: "100%" }}
                      fontSize={["2.5rem", "10vw", "3vw"]}
                      fontFamily="Mark Pro"
                      fontWeight="700"
                    >
                      {item.name}
                    </Heading>
                  </Box>
                  <Box
                    role="copyright"
                    transform={[
                      isMobile ? "translateY(-13%)" : "translateY(-20%)",
                      isMobile ? "translateY(-13%)" : "translateY(-20%)",
                      "translateY(0)",
                    ]}
                    /* p={
                      isMobile || isTab
                        ? ["0 0 0 0"]
                        : ["0 0 1.5rem 0", "1.5rem"]
                    }
                    w={["100%", "100%", "60%"]}
                    mt="-10px" */
                    // p={[
                    //   "0 0 1.5rem 0",
                    //   innerWidth > 480 &&
                    //   copyrightRef.current[i]?.clientHeight >
                    //     imageRef.current[i]?.clientHeight
                    //     ? "0 1.5rem 1.5rem 1.5rem"
                    //     : "1.5rem",
                    // ]}
                    pl={{ base: 0, lg: "2vw" }}
                    w={["100%", "100%", "60%"]}
                    // height="fit-content"
                    display="flex"
                    flexDirection="column"
                    pos={{ lg: "relative" }}
                    // justifyContent="space-between"
                  >
                    <Box
                      overflowY={window.innerHeight < 500 ? "auto" : "hidden"}
                      h="70%"
                    >
                      <Text
                        mt="-5px"
                        mb="1rem"
                        color="brand.careers"
                        textAlign="justify"
                        fontWeight="bold"
                        fontFamily="Mark Pro"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    </Box>
                    <Button
                      pos={{ lg: "absolute" }}
                      bottom={0}
                      borderRadius="0"
                      background="brand.careers"
                      textTransform="uppercase"
                      fontFamily="Barlow"
                      rightIcon={<BsArrowRight />}
                      sx={{
                        "& svg": {
                          width: "1.7rem",
                          height: "auto",
                          transition: ".4s",
                          transform: "rotate(-50deg)",
                        },
                      }}
                      _hover={{
                        "& svg": {
                          transform: "rotate(0deg)",
                          marginLeft: "10px",
                        },
                      }}
                      transform={{ xl: "translateY(-53%)" }}
                      mb={{ lg: "7%", xl: "2%" }}
                      onClick={() =>
                        router.push(
                          `join-us/openings-by-categories?categoryId=${item.id}`
                        )
                      }
                    >
                      View {item.totalJobOpening} Opening
                    </Button>
                  </Box>
                </Flex>
              );
            })}
            <Center>{loading && <Spinner color="white" />}</Center>
          </Flex>
        </VStack>
      </Box>
    </Layout>
  );
}
