import { Box, VStack } from "@chakra-ui/react";
import { FC } from "react";

import NavigationButton from "@/components/Atoms/NavigationButton";
import AboutMeetTeam from "@/components/Molecules/AboutMeetTeam";
import AboutOurProcess from "@/components/Molecules/AboutOurProsess";
import AboutUsMain from "@/components/Molecules/AboutUsMain";
import AboutWhatWeDo from "@/components/Molecules/AboutWhatWeDo";
import Layout from "@/components/Templates/Layout";
import { useRouter } from "next/router";
const AboutUs: FC = () => {
  const router = useRouter();

  return (
    <Layout title="Our Story" overflow="auto">
      <VStack
        id="aboutUs-page"
        direction="column"
        align="center"
        height={"auto"}
        width="100%"
        p="0"
        m="0"
        overflowX="hidden"
      >
        <Box
          width={{
            base: "100%",
            lg: "80vw",
            "2xl": "70vw",
          }}
          mt={{
            base: "4.5rem",
            lg: "4.5rem",
            "2xl": "5rem",
          }}
          mb="1rem"
        >
          <NavigationButton
            label="HOME"
            subLabel="BACK"
            arrowPosition="left"
            onClick={() => router.push("/home")}
          />
        </Box>

        <AboutUsMain />
        <AboutWhatWeDo />
        <AboutOurProcess />
        <AboutMeetTeam />
      </VStack>
    </Layout>
  );
};

export default AboutUs;
