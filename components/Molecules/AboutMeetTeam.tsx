import {
  Box,
  Center,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Button,
  Link,
  Skeleton,
  SkeletonText,
  AspectRatio,
} from "@chakra-ui/react";
import React, { FC, Fragment, useEffect, useState } from "react";
// import imgPerson from "@/assets/images/Person.png";
import { BsLinkedin } from "react-icons/bs";
import { useListMeetTheTeam, useMeetTheTeam } from "@/hooks/aboutUs";
import isNil from "lodash/isNil";
interface TProfilePerson {
  imgUrl: string;
  name: string;
  designation: string;
  subDesignation: string;
  linked: string;
  // isActive: boolean;
}

// const dataMain = {
//   id: "1",
//   title: "Meet the Team",
//   description:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit laborum, repellendus quidem est molestias perferendis ut sit porro impedit, delectus nam aperiam et exercitationem culpa animi similique corporis pariatur!",
// };
const AboutMeetTeam: FC = () => {
  const [PageTeam, setPageTeam] = useState(1);
  const [newTotalPage, setnewTotalPage] = useState(1);

  const {
    fetchGetMeetTheTeam,
    data: mainData,
    loading: isLoadingMainData,
  } = useMeetTheTeam();

  const {
    fetchgetListMeetheTeam,
    responseListTeamMembers,
    totalPageTeamMembers,
    loading: isLoadinglistData,
  } = useListMeetTheTeam({
    input: {
      page: PageTeam,
      limit: 10,
      order: {
        orderBy: "SEQUENCE",
        sortBy: "ASC",
      },
      filter: {
        isActive: true,
      },
    },
  });

  useEffect(() => {
    fetchgetListMeetheTeam();
  }, [fetchgetListMeetheTeam]);
  useEffect(() => {
    if (!isNil(totalPageTeamMembers)) {
      setnewTotalPage(totalPageTeamMembers);
    }
  }, [totalPageTeamMembers, PageTeam]);
  useEffect(() => {
    fetchGetMeetTheTeam();
  }, [fetchGetMeetTheTeam]);

  // console.log("data listOurTeamMembers", listData?.listOurTeamMembers);
  return (
    <Stack
      direction={"column"}
      width={{
        base: "100%",
        lg: "80vw",
        "2xl": "70vw",
      }}
      color={"white"}
      pt={{
        base: "1.5rem",
        lg: "3rem",
        // "2xl": "5rem",
      }}
      pb={{
        base: "1.5rem",
        lg: "3rem",
        // "2xl": "5rem",
      }}
      align="center"
    >
      <Center
        mb="1rem"
        fontSize={{
          base: "2rem",
          lg: "3rem",
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
        Meet the Team
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
          {" "}
          {!isNil(mainData) && !isNil(mainData.getOurTeam) ? (
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
                __html: mainData.getOurTeam.description,
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

      <SimpleGrid
        columns={{ base: 1, sm: 3, md: 3, lg: 5 }}
        spacing={{
          base: "10",
          sm: "5",
          md: "5",
          lg: "5",
        }}
        pt={{
          base: "3rem",
          lg: "3rem",
          // "2xl": "5rem",
        }}
        width={{
          base: "auto",
          sm: "90vw",
          md: "90vw",
          lg: "80vw",
          "2xl": "70vw",
        }}
      >
        {isLoadinglistData ? (
          <Fragment>
            <Skeleton height={"200px"}></Skeleton>
            <Skeleton height={"200px"}></Skeleton>
            <Skeleton height={"200px"}></Skeleton>
            <Skeleton height={"200px"}></Skeleton>
            <Skeleton height={"200px"}></Skeleton>
          </Fragment>
        ) : (
          <>
            {!isNil(responseListTeamMembers) &&
              responseListTeamMembers.map((item, index: number) => {
                return (
                  <ProfilePerson
                    key={index}
                    imgUrl={item.imageUrl}
                    name={item.name}
                    designation={item.designation}
                    subDesignation={item.subDesignation}
                    linked={item.linkedInUrl}
                    // isActive={item.isActive}
                  />
                );
              })}
          </>
        )}
      </SimpleGrid>

      {PageTeam < newTotalPage && (
        <Button
          bgColor="#FFA8FA"
          outline={"none"}
          _focus={{
            outline: "none",
          }}
          fontWeight="bold"
          color="white"
          colorScheme="none"
          onClick={() => setPageTeam(PageTeam + 1)}
        >
          Load More
        </Button>
      )}
    </Stack>
  );
};

const ProfilePerson: FC<TProfilePerson> = ({
  imgUrl,
  name,
  designation,
  subDesignation,
  linked,
  // isActive,
}) => {
  return (
    <Stack
      direction="column"
      align="flex-start"
      // display={isActive ? "flex" : "none"}
    >
      <Box position="relative" height="auto" w={"100%"}>
        <AspectRatio
          ratio={4 / 4}
          width={{
            base: "70vw",
            sd: "auto",
            lg: "auto",
          }}
        >
          <Image
            src={imgUrl}
            // src={imgPerson.src}
            alt={name}
            fallback={<p>loading...</p>}
            display="block"
            w="100%"
            h="auto"
            // objectFit="cover"
          />
        </AspectRatio>

        <Link
          href={linked}
          target="_blank"
          rel="noopener noreferrer"
          position="absolute"
          width="unset"
          right="5%"
          bottom="5%"
          cursor="pointer"
        >
          <BsLinkedin size="1.5rem" />
        </Link>
      </Box>
      <Box lineHeight="7">
        <Box height={"5px"} w="40px" bgColor="#FFA8FA" mt="3" mb="2"></Box>
        <Text
          fontWeight="bold"
          fontSize={{
            base: "1.25rem",
            lg: "1.5rem",
            // "2xl": "1.5rem",
          }}
          fontFamily="Mark Pro"
        >
          {name}
        </Text>
        <Text
          fontSize={{
            base: "1rem",
            lg: "1.25rem",
            // "2xl": "1.25rem",
          }}
          fontFamily="Barlow"
        >
          {designation}
        </Text>
        <Text
          fontSize={{
            base: "1rem",
            lg: "1.25rem",
            // "2xl": "1.25rem",
          }}
          fontFamily="Barlow"
        >
          {subDesignation}
        </Text>
      </Box>
    </Stack>
  );
};

export default AboutMeetTeam;
