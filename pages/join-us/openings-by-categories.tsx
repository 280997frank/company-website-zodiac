import React, { FC, useCallback, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  keyframes,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Center,
  Spinner,
  Select,
} from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

import Layout from "@/components/Templates/Layout";
import {
  useListJobOpenings,
  useGetDesignationById,
  useListLocations,
} from "@/hooks/jobOpenings";
import { IJobOpening } from "@/types/career";
import { useRouter } from "next/router";

const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const OpeningsByCategories: FC = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  // state
  const [isHoverMenuButton, setIsHoverMenuButton] = useState<number>(0);
  const [limitPerPage, setLimitPerPage] = useState<number>(10);
  const [jobType, setJobType] = useState<String>("");
  const [locationId, setLocationId] = useState<String>("");

  const {
    fetchListJobOpenings,
    data: dataListJobOpenings,
    loading: loadingJobOpenings,
  } = useListJobOpenings();
  const { fetchGetDesignationById, data: dataDesignationById } =
    useGetDesignationById();
  const { fetchListLocations, data: dataListLocations } = useListLocations();

  const loadMore = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement?.scrollHeight
    ) {
      if (dataListJobOpenings) {
        if (
          dataListJobOpenings?.listJobOpenings?.page <
          dataListJobOpenings?.listJobOpenings?.totalPage
        ) {
          setLimitPerPage(limitPerPage + 10);
        }
      }
    }
  }, [dataListJobOpenings, limitPerPage]);

  useEffect(() => {
    window.addEventListener("scroll", loadMore, false);
    fetchListJobOpenings({
      variables: {
        input: {
          page: 1,
          limit: limitPerPage,
          filter: {
            jobType: jobType || null,
            designationId: categoryId || null,
            locationId: locationId || null,
          },
        },
      },
    });

    return () => {
      window.removeEventListener("scroll", loadMore, false);
    };
  }, [
    fetchListJobOpenings,
    limitPerPage,
    loadMore,
    jobType,
    categoryId,
    locationId,
  ]);
  useEffect(() => {
    if (categoryId) {
      fetchGetDesignationById({
        variables: {
          id: categoryId,
        },
      });
    }
  }, [fetchGetDesignationById, categoryId]);
  useEffect(() => {
    fetchListLocations({
      variables: {
        input: {
          page: 1,
          limit: 25,
        },
      },
    });
  }, [fetchListLocations]);

  return (
    <Layout title="Openings by Categories" overflow="auto">
      <Box
        minH="100vh"
        display="flex"
        justifyContent="center"
        paddingBottom="10"
      >
        <Box
          width={{ base: "100%", lg: "80%", xl: "70%" }}
          px={{ base: "1.25rem", lg: 0 }}
          mt="7.5rem"
        >
          <Flex
            gap="1.25rem"
            align="center"
            transition="all 0.3s"
            cursor="pointer"
            _hover={{
              gap: "2.5rem",
            }}
            onClick={() => router.back()}
          >
            <BsArrowLeft style={{ fontSize: "2.125rem" }} color="white" />
            <Flex direction="column">
              <Text
                fontWeight="500"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                lineHeight={{ base: "0.875rem", lg: "1.1875rem" }}
                color="#ffffff"
              >
                CAREERS
              </Text>
              <Text
                fontFamily="Mark Pro"
                fontWeight="700"
                fontSize={{ base: "1rem", lg: "1.5rem" }}
                lineHeight={{ base: "1.25rem", lg: "1.875rem" }}
                color="#fff"
              >
                ALL OPENINGS
              </Text>
            </Flex>
          </Flex>

          <Text
            fontFamily="Mark Pro"
            fontWeight="700"
            fontSize={{ base: "2rem", md: "3rem", xl: "4rem" }}
            lineHeight={{ base: "2.5625rem", lg: "5.0625rem" }}
            color="brand.careers"
            animation={`0.5s ease-out ${slideInFromTop}`}
            mt={{ base: "1.25rem", lg: "2.5rem" }}
          >
            {startCase(
              toLower(dataDesignationById?.getDesignationById?.name?.toString())
            )}{" "}
            Job Openings
          </Text>

          <Flex gap="1rem" mt="2.5rem" wrap="wrap">
            <Select
              defaultValue=""
              backgroundColor="transparent"
              border="2px solid #F7FF7C !important"
              borderRadius="none"
              size="lg"
              fontFamily="Barlow"
              fontWeight="500"
              fontSize={{ base: "1rem", xl: "1.25rem" }}
              lineHeight="1.5rem"
              color="white"
              textTransform="uppercase"
              transition="all 0.3s"
              cursor="pointer"
              width="auto"
              _hover={{
                backgroundColor: "brand.zodiacStudios",
              }}
              iconColor={isHoverMenuButton === 2 ? "black" : "white"}
              iconSize="2rem"
              icon={
                isHoverMenuButton === 2 ? <BsArrowRight /> : <IoIosArrowDown />
              }
              h={{ base: "58px", md: "60px", xl: "74px" }}
              sx={{
                "&": {
                  paddingInlineEnd: "1rem !important",
                },
                "&:hover": {
                  paddingInlineEnd: "2rem !important",
                },
                "& option": {
                  color: "black",
                },
              }}
              onMouseEnter={() => setIsHoverMenuButton(2)}
              onMouseLeave={() => setIsHoverMenuButton(0)}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">JOB TYPE</option>
              <option value="FULL_TIME">FULL TIME</option>
              <option value="PART_TIME">PART TIME</option>
              <option value="FREELANCE">FREELANCE</option>
            </Select>
            <Select
              defaultValue="all"
              backgroundColor="transparent"
              border="2px solid #F7FF7C !important"
              borderRadius="none"
              fontFamily="Barlow"
              fontWeight="500"
              fontSize={{ base: "1rem", xl: "1.25rem" }}
              lineHeight="1.5rem"
              color="white"
              textTransform="uppercase"
              transition="all 0.3s"
              cursor="pointer"
              width="auto"
              _hover={{
                backgroundColor: "brand.zodiacStudios",
              }}
              iconColor={isHoverMenuButton === 3 ? "black" : "white"}
              iconSize="2rem"
              icon={
                isHoverMenuButton === 3 ? <BsArrowRight /> : <IoIosArrowDown />
              }
              h={{ base: "58px", md: "60px", xl: "74px" }}
              sx={{
                "&": {
                  paddingInlineEnd: "1rem !important",
                },
                "&:hover": {
                  paddingInlineEnd: "2rem !important",
                },
                "& option": {
                  color: "black",
                },
              }}
              onMouseEnter={() => setIsHoverMenuButton(3)}
              onMouseLeave={() => setIsHoverMenuButton(0)}
              onChange={(e) => setLocationId(e.target.value)}
            >
              <option value="all">LOCATION</option>
              {dataListLocations?.listLocations?.locations?.map(
                (location, index) => {
                  return (
                    <option key={index} value={location?.id?.toString()}>
                      {location?.cityName}
                    </option>
                  );
                }
              )}
            </Select>
          </Flex>

          <Accordion mt={{ base: "2.5rem", lg: "4rem" }} allowMultiple>
            {dataListJobOpenings?.listJobOpenings?.jobOpenings?.map(
              (job: IJobOpening, index: number) => (
                <Box key={index}>
                  <AccordionItem py="0.625rem">
                    <AccordionButton
                      display="flex"
                      justifyContent="space-between"
                      _focus={{}}
                    >
                      <Text
                        w="33%"
                        fontFamily="Mark Pro"
                        fontWeight="700"
                        fontSize={{ base: "1rem", lg: "2rem" }}
                        lineHeight={{ base: "1.25rem", lg: "2.5625rem" }}
                        color="brand.careers"
                        textAlign="left"
                      >
                        {job?.title}
                      </Text>
                      <Text
                        w="33%"
                        fontWeight="500"
                        fontSize={{ base: "1rem", lg: "1.5rem" }}
                        lineHeight={{ base: "1.1875rem", lg: "1.8125rem" }}
                        color="#fff"
                      >
                        {startCase(
                          toLower(job?.jobType?.toString().split("_").join(" "))
                        )}
                      </Text>
                      <Text
                        w="33%"
                        fontWeight="500"
                        fontSize={{ base: "1rem", lg: "1.5rem" }}
                        lineHeight={{ base: "1.1875rem", lg: "1.8125rem" }}
                        color="#fff"
                      >
                        {job?.location?.cityName}
                      </Text>
                      <AccordionIcon
                        color="#fff"
                        fontSize={{ base: "2.125rem", lg: "2.375rem" }}
                      />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text
                        color="white"
                        dangerouslySetInnerHTML={{ __html: job?.description }}
                      />

                      <Button
                        borderRadius={0}
                        backgroundColor="brand.careers"
                        size={{ base: "md", lg: "lg" }}
                        mt="2rem"
                        fontWeight="500"
                        fontSize="1.25rem"
                        lineHeight="1.5rem"
                        color="#081029"
                        sx={{
                          ".apply": {
                            fontSize: "1.75rem",
                            "@media screen and (max-width: 768px)": {
                              fontSize: "1.25rem",
                            },
                            transition: "all 0.5s ease",
                          },
                        }}
                        _hover={{
                          ".apply": {
                            transform: "rotate(45deg)",
                            marginLeft: "0.625rem",
                          },
                        }}
                        rightIcon={<BsArrowUpRight className="apply" />}
                        onClick={() => router.push(job?.applyUrl.toString())}
                      >
                        APPLY
                      </Button>
                    </AccordionPanel>
                  </AccordionItem>
                </Box>
              )
            )}
          </Accordion>
          <Center>{loadingJobOpenings && <Spinner color="white" />}</Center>
        </Box>
      </Box>
    </Layout>
  );
};

export default OpeningsByCategories;
