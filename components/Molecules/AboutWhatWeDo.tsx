import {
  Box,
  Center,
  SimpleGrid,
  Stack,
  // Text,
  Image,
  Button,
  useMediaQuery,
  // SkeletonText,
  // Skeleton,
} from "@chakra-ui/react";
import React, {
  FC,
  /* Fragment,*/ useCallback,
  /*useEffect,*/ useState,
} from "react";
// import imgContent from "@/assets/images/Project Showcase.png";
import { BsArrowUpRight } from "react-icons/bs";
// import { useWhatWeDo } from "@/hooks/aboutUs";
// import isNil from "lodash/isNil";
// import { useListWhatWeDo } from "@/hooks/aboutUs";
import { whatWeMain, whatWeData } from "@/constants/whatWeDo";

const AboutWhatWeDo: FC = () => {
  const [isHover, setHover] = useState(0);
  const [listHover, setListHover] = useState<number[]>([]);
  // const [PageWhatWeDo, setPageWhatWeDo] = useState(1);
  // const [newTotalPage, setnewTotalPage] = useState(1);
  const [isDesktop] = useMediaQuery(
    "(min-width: 1200px) and (orientation: landscape)"
  );

  const handleClick = useCallback(
    (item: number) => {
      if (listHover.includes(item)) {
        const newArray = listHover.filter((e) => e !== item);
        setListHover(newArray);
      } else {
        setListHover((listHover) => [...listHover, item]);
      }
    },
    [listHover]
  );
  // const {
  //   fetchWhatWeDo,
  //   responseListWhatWeDo,
  //   totalPageWhatWeDo,
  //   loading: isLoadingDatalist,
  // } = useListWhatWeDo({
  //   input: {
  //     page: PageWhatWeDo,
  //     limit: 8,
  //     order: {
  //       sortBy: "ASC",
  //       orderBy: "SEQUENCE",
  //     },
  //   },
  // });
  // useEffect(() => {
  //   fetchWhatWeDo();
  // }, [fetchWhatWeDo]);
  // useEffect(() => {
  //   if (!isNil(totalPageWhatWeDo)) {
  //     setnewTotalPage(totalPageWhatWeDo);
  //   }
  // }, [totalPageWhatWeDo, PageWhatWeDo]);

  // // console.log("data what We DO", totalPageWhatWeDo);
  // const {
  //   fetchGetWhatWeDo,
  //   data: mainData,
  //   loading: isLoadingMainData,
  // } = useWhatWeDo();
  // useEffect(() => {
  //   fetchGetWhatWeDo();
  // }, [fetchGetWhatWeDo]);
  // console.log("responseListWhatWeDo", responseListWhatWeDo);
  // console.log("mainData", mainData);
  return (
    <Stack
      direction={"column"}
      align="center"
      width={{
        base: "100%",
        lg: "80vw",
        "2xl": "70vw",
      }}
      color={"white"}
      // pt={{
      //   base: "1.5rem",
      //   lg: "3rem",
      //   // "2xl": "5rem",
      // }}
      pb={{
        base: "1.5rem",
        lg: "4rem",
        // "2xl": "5rem",
      }}
      height={{
        base: "auto",
        // lg: "100vh",
      }}
      display="flex"
      // justifyContent="center"
      alignItems="center"
      alignContent="center"
      alignSelf="center"
    >
      <Center
        mb="1rem"
        fontSize={{
          base: "2rem",
          lg: "2.75rem",
          "2xl": "4rem",
        }}
        fontWeight="bold"
        pos="relative"
        _after={{
          content: '" "',
          position: "absolute",
          w: "40px",
          h: "5px",
          bgColor: "#FFA8FA",
          zIndex: "2",
          bottom: "-1.5rem",
        }}
        fontFamily="Mark Pro"
      >
        What We Do
      </Center>

      {/* {isLoadingMainData ? (
        <Box
          width={{
            base: "90%",
            lg: "80%",
          }}
        >
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      ) : (
        <>
          {!isNil(mainData) && !isNil(mainData.getWhatWeDo) ? ( */}
      <Box
        width={{
          base: "90%",
          lg: "80%",
        }}
        pt="1.5rem"
        textAlign={"center"}
        fontSize={{
          base: "1rem",
          lg: "1.25rem",
          // "2xl": "1.5rem",
        }}
        fontFamily="Barlow"
        dangerouslySetInnerHTML={{
          __html: whatWeMain.description,
        }}
      ></Box>

      {/*      ) : (
         <SkeletonText
           mt="4"
            noOfLines={4}
            spacing="4"
       width={{
            base: "90%",
            lg: "80%",
             }}
            />
          )}
        </>
     )} */}

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
        spacing="8"
        pt={{
          base: "3rem",
          lg: "3rem",
          // "2xl": "5rem",
        }}
        width={{
          base: "auto",
          lg: "80vw",
          "2xl": "70vw",
        }}
        // p="5"
      >
        {/* {isLoadingDatalist ? (
          <Fragment>
            <Skeleton height={"100px"}></Skeleton>
            <Skeleton height={"100px"}></Skeleton>
            <Skeleton height={"100px"}></Skeleton>
            <Skeleton height={"100px"}></Skeleton>
          </Fragment>
        ) : (
          <> */}
        {whatWeData.map((item, index: number) => {
          // console.log("listHover111", listHover);
          return (
            <Box
              key={index}
              position="relative"
              onMouseOver={() =>
                isDesktop ? setHover(index + 1) : console.log("")
              }
              onMouseOut={() => (isDesktop ? setHover(0) : console.log(""))}
              onClick={() =>
                isDesktop ? console.log("") : handleClick(index + 1)
              }
            >
              <Image
                src={item.image}
                // src={imgContent.src}
                alt={item.title}
                fallback={<p>loading...</p>}
                display="block"
                w="100%"
                h="auto"
                objectFit="cover"
              />

              <Box
                position="absolute"
                bottom="0"
                top="0"
                left="0"
                right="0"
                bgColor="#FFA8FA"
                overflow="hidden"
                width={{
                  base: listHover.includes(index + 1) ? "100%" : "0",
                  lg: isHover === index + 1 ? "100%" : "0",
                }}
                opacity={{
                  base: listHover.includes(index + 1) ? ".6" : "0",
                  lg: isHover === index + 1 ? ".6" : "0",
                }}
                mixBlendMode="color"
                height="100%"
                transition="0.4s ease"
                overflowY="auto"
              ></Box>
              <Box
                position="absolute"
                bottom="0"
                top="0"
                left="0"
                right="0"
                p="3"
                height="100%"
                overflowY="auto"
                color="white"
                fontWeight="bold"
                transition="1s ease"
                fontSize={{
                  base: "1rem",
                  lg: "1.2rem",
                  // "2xl": "1.25rem",
                }}
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
                fontFamily="Barlow"
                display={{
                  base: listHover.includes(index + 1) ? "block" : "none",
                  lg: isHover === index + 1 ? "block" : "none",
                }}
              ></Box>
              <Button
                position="absolute"
                bottom="3%"
                p="0"
                left={{
                  base: listHover.includes(index + 1) ? "40%" : "-3%",
                  lg: isHover === index + 1 ? "-12%" : "-9%",
                }}
                transition="1s ease"
                fontSize={{
                  base: "2rem",
                  lg: "2rem",
                  "2xl": "3rem",
                }}
                fontWeight="bold"
                color="#FFA8FA"
                colorScheme="none"
                fontFamily="Barlow"
                textTransform="uppercase"
                variant="solid"
                outline={"none"}
                _focus={{
                  outline: "none",
                }}
                rightIcon={
                  <BsArrowUpRight
                    color="white"
                    size={
                      listHover.includes(index + 1) || isHover === index + 1
                        ? "1.6rem"
                        : "0"
                    }
                  />
                }
              >
                {item.title}
              </Button>
            </Box>
          );
        })}
        {/* </>
 )} */}
      </SimpleGrid>
      {/* {PageWhatWeDo < newTotalPage && (
        <Button
          bgColor="#FFA8FA"
          outline={"none"}
          _focus={{
            outline: "none",
          }}
          fontWeight="bold"
          color="white"
          colorScheme="none"
          onClick={() => setPageWhatWeDo(PageWhatWeDo + 1)}
        >
          Load More
        </Button>
      )} */}
    </Stack>
  );
};

export default AboutWhatWeDo;
