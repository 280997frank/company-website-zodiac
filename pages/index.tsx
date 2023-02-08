import React from "react";
import Head from "next/head";
import { Box, Button, Image, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ComingSoon from "@/components/Organisms/ComingSoon";

import bgLanding from "@/assets/images/landing-background-blur.png";
import bgDefault from "@/assets/images/default-background.png";
import logoDefault from "@/assets/images/default-logo.png";
import ArrowLandingIcon from "@/assets/icons/PlayButton";

// const lightKeyframes = keyframes`
//   100% {
//     transform: scale(4);
//     transition: 5s;
//   }
// `;
// const loadingKeyFrames = keyframes`
//   100% {
//     transform: translateY(70px);
//     opacity: 0;
//     transition: 5s;
//   }
// `;
// const animationLight = `${lightKeyframes} 2s ease-in-out infinite`;
// const animationLoading = `${loadingKeyFrames} 2s ease-in-out infinite`;

const showComingSoon: boolean = JSON.parse(
  process.env.NEXT_PUBLIC_SHOW_COMING_SOON || "false"
);

export default function Landing() {
  // const [isLoading, setIsLoading] = useState(false);
  const [isDesktop] = useMediaQuery(
    "(min-width: 62em) and (orientation: landscape)"
  );
  const router = useRouter();

  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       router.push("/home");
  //     }, 1500);
  //   }
  // }, [isLoading, router]);

  if (showComingSoon) {
    return <ComingSoon />;
  }

  return (
    <>
      <Head>
        <title>Welcome | Zodiac Solutions</title>
        <meta name="description" content="Welcome!" />
        <link rel="shortcut icon" href="/favicon.png"></link>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Box
        height="100vh"
        width="100vw"
        bgImage={bgLanding.src}
        bgSize="auto 100%"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          "@media (min-width: 48em) and (orientation: landscape)": {
            bgSize: "100% 100%",
          },
        }}
      >
        <Box
          height={isDesktop ? "70%" : "70%"}
          width={isDesktop ? "70%" : "90%"}
          maxW="896px"
          maxH={{ base: "90vh", lg: "640px" }}
          bgImage={bgDefault.src}
          bgSize="100% 100%"
          bgRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          alignItems="center"
          alignContent="center"
          justifyContent="space-around"
          padding={isDesktop ? "40px" : "20px"}
        >
          <Image
            alt="ZODIAC"
            src={logoDefault.src}
            w={isDesktop ? "264px" : "174px"}
            h="auto"
            htmlWidth={logoDefault.width}
            htmlHeight={logoDefault.height}
          />
          <Box
            fontSize={isDesktop ? "48px" : "32px"}
            fontWeight="700"
            color="#00FFDA"
            textAlign="center"
          >
            You’re about to enter the ever-expanding world of Zodiac.
          </Box>
          <Button
            borderRadius={0}
            p="0 30px"
            _hover={{ background: "#00FFDA" }}
            role="group"
            background="#00FFDA"
            w="auto"
            h="74px"
            onClick={() => {
              router.push("/home");
            }}
          >
            {" "}
            ENTER AND EXPLORE
            <ArrowLandingIcon
              transition="0.5s"
              _groupHover={{
                transition: "0.5s",
                transform: "rotate(43deg)",
                marginLeft: "10px",
              }}
              ml="5px"
              width="30px"
              height="30px"
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}
