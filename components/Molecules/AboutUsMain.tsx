import {
  AspectRatio,
  Stack,
  Image,
  Box,
  Text,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
// import imgContent from "@/assets/images/Project Showcase.png";
import { useAboutUs } from "@/hooks/aboutUs";
import isNil from "lodash/isNil";
// const data = {
//   id: "1",
//   title: "Attention-grabbing one-liner.",
//   description:
//     "Follow-up to the one-liner above. May contain phrases like “At Zodiac, we...”, “We do [things]”, etc. Arcu eget mattis gravida tellus amet nibh purus dolor. Cum fermentum ut augue elit, in. Hendrerit orci, nullam elementum aliquet faucibus quam iaculis felis. Etiam blandit nisl feugiat venenatis ornare amet quis porttitor.",
//   imageUrl: imgContent.src,
// };
const AboutUsMain: FC = () => {
  const { fetchGetAboutUS, data, loading: isLoading, error } = useAboutUs();
  // console.log("newData", newData);
  console.log("error", error);
  useEffect(() => {
    fetchGetAboutUS();
  }, [fetchGetAboutUS]);

  return (
    <>
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        pb={{
          base: "1.5rem",
          lg: "3rem",
          // "2xl": "5rem",
        }}
        spacing="12"
        height="auto"
        width={{
          base: "100%",
          lg: "80vw",
          "2xl": "70vw",
        }}
      >
        {isLoading ? (
          <Skeleton height="100px" />
        ) : (
          <AspectRatio
            ratio={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            width={{
              base: "100%",
              lg: "50%",
            }}
          >
            <Image
              src={!isNil(data) ? data.getAbout.imageUrl : ""}
              // src={imgContent.src}
              alt={!isNil(data) ? data.getAbout.title : "Title Image"}
              fallback={
                <Text color={"white"} fontWeight="bold">
                  loading...
                </Text>
              }
              display="block"
              width="100%"
              h="auto"
            />
          </AspectRatio>
        )}

        <Box
          width={{
            base: "100%",
            lg: "45%",
          }}
          flex="1"
          // bgColor="gray"
          color={"white"}
          display="flex"
          // alignItems="center"
          justifyContent="center"
          alignContent="center"
          flexDir="column"
          p={{
            base: "5",
            lg: "0",
          }}
          position="relative"
        >
          {isLoading ? (
            <>
              <SkeletonText mt="4" noOfLines={1} spacing="4" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </>
          ) : (
            <Box
              position={{
                base: "relative",
                lg: "absolute",
              }}
              left="0"
              right="0"
              top="0"
              bottom="0"
              overflowY="auto"
              display="flex"
              // alignItems="center"
              justifyContent="center"
              alignContent="center"
              flexDir="column"
              pt="10px"
            >
              <Text
                fontWeight="bold"
                fontSize={{
                  base: "2rem",
                  lg: "2.75rem",
                  "2xl": "4rem",
                }}
                lineHeight="none"
                fontFamily="Mark Pro"
              >
                {!isNil(data) ? data.getAbout.title : "Title"}
              </Text>
              <Box
                mt="1.5rem"
                mb="1.5rem"
                height={"5px"}
                w="40px"
                bgColor="#FFA8FA"
              ></Box>
              {!isNil(data) ? (
                <Box
                  fontSize={{
                    base: "1.25rem",
                    lg: "1.25rem",
                    // "2xl": "1.5rem",
                  }}
                  fontFamily="Barlow"
                  dangerouslySetInnerHTML={{
                    __html: data.getAbout.description,
                  }}
                ></Box>
              ) : (
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              )}
            </Box>
          )}
        </Box>
      </Stack>
      <Stack
        pt={{
          base: "1.5rem",
          lg: "4rem",
          // "2xl": "5rem",
        }}
        pb={{
          base: "1.5rem",
          lg: "4rem",
          // "2xl": "5rem",
        }}
        height="auto"
        width="100vw"
      >
        <AspectRatio ratio={16 / 9}>
          <video
            className="landing-video"
            autoPlay
            loop
            muted
            playsInline
            src={data?.getAbout.videoUrl}
            // controlsList="nodownload"
          />
        </AspectRatio>
      </Stack>
    </>
  );
};

export default AboutUsMain;
