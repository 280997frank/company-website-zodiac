import { useListOurProcess, useOurProcess } from "@/hooks/aboutUs";
import { Box, Center, SkeletonText, Stack } from "@chakra-ui/react";
import isNil from "lodash/isNil";
import React, { FC, useEffect } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const AboutOurProcess: FC = () => {
  // const [PageProcess, setPageProcess]= useState(1);
  const {
    fetchGetOurProcess,
    data,
    loading: isLoadingMainData,
  } = useOurProcess();
  useEffect(() => {
    fetchGetOurProcess();
  }, [fetchGetOurProcess]);
  const {
    fetchgetListOurProcess,
    responseListOurProcess,
    // loading: isLoadingListData,
  } = useListOurProcess({
    input: {
      page: 1,
      limit: 10,
      order: {
        sortBy: "ASC",
        orderBy: "SEQUENCE",
      },
      filter: {
        isActive: true,
      },
    },
  });
  useEffect(() => {
    fetchgetListOurProcess();
  }, [fetchgetListOurProcess]);
  // console.log("responseListOurProcess", responseListOurProcess);
  return (
    <Stack
      direction={"column"}
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
        lg: "3rem",
        // "2xl": "5rem",
      }}
      align="center"
      height={{
        base: "auto",
        // lg: "100vh",
      }}
      display="flex"
      justifyContent="center"
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
          bottom: "-1rem",
        }}
        fontFamily="Mark Pro"
      >
        Our Process
      </Center>
      {isLoadingMainData ? (
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
          {!isNil(data) && !isNil(data.getOurProcessDescription) ? (
            <Box
              width={{
                base: "90%",
                lg: "80%",
              }}
              pt="1rem"
              textAlign={"center"}
              fontSize={{
                base: "1rem",
                lg: "1.25rem",
                // "2xl": "1.5rem",
              }}
              fontFamily="Barlow"
              dangerouslySetInnerHTML={{
                __html: data.getOurProcessDescription.description,
              }}
            ></Box>
          ) : (
            <Box
              width={{
                base: "90%",
                lg: "80%",
              }}
            >
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          )}
        </>
      )}

      <Desktop data={responseListOurProcess} />
      <Mobile data={responseListOurProcess} />
    </Stack>
  );
};

export default AboutOurProcess;
