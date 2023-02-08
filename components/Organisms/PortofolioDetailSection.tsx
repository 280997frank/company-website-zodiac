import {
  PORTOFOLIO_COLORS as COLORS,
  PORTOFOLIO_TITLES,
} from "@/constants/portofolio";
import { TPortofolioDetailProps } from "@/types/portofolio";
import {
  Box,
  Divider,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NavigationButton from "../Atoms/NavigationButton";
import PortofolioCarousel from "../Molecules/PortofolioCarousel";
import RenderVideoPlayer from "../Molecules/RenderVideoPlayer";

const PortofolioDetailSection: TPortofolioDetailProps = ({
  type,
  currentProject,
  prevProject,
  nextProject,
}) => {
  const router = useRouter();
  const [isDesktop] = useMediaQuery(
    "(min-width: 48em) and (orientation: landscape)"
  );
  let sublabel = "";
  let link = "";

  switch (type) {
    case "events":
      sublabel = "Digital & Event";
      link = "/digital-and-event";
      break;
    case "solutions":
      sublabel = "Interactive & Multimedia";
      link = "/interactive-and-multimedia";
      break;
    case "studios":
      sublabel = "Design & Animation";
      link = "/design-and-animation";
      break;
  }

  return (
    <Flex
      h="100%"
      w="100%"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      pt={20}
    >
      <Fragment>
        <Box
          pb={6}
          width={{ base: "100%", md: "75vw" }}
          backgroundColor="transparent"
        >
          <NavigationButton
            arrowPosition="left"
            label="ALL PROJECTS"
            subLabel={sublabel.toUpperCase()}
            onClick={() => router.push(link)}
          />
        </Box>
        <Box width="100%">
          {currentProject.heroVideoUrl ? (
            <RenderVideoPlayer videoURL={currentProject.heroVideoUrl} />
          ) : (
            <Image
              src={currentProject.banner}
              fallback={<p>loading...</p>}
              alt="baner-image.png"
              top="0"
              transition="opacity 1s ease-in-out"
              h="100%"
              w="100%"
            />
          )}
        </Box>
        <Flex
          pt={{ base: 8, lg: 16 }}
          pb={16}
          px={{ base: "1rem", md: 0 }}
          gridGap={2}
          width={{ base: "100%", md: "75vw" }}
          flexDir={{ base: "column", md: "row" }}
          backgroundColor="transparent"
        >
          <Box width={{ md: "15vw" }}>
            <Text
              color="white"
              fontSize={{ base: "16px", md: "24px" }}
              lineHeight={{ md: "28px" }}
            >
              {currentProject.projectYear}
            </Text>
            <Text
              fontWeight="bold"
              color={COLORS[type]}
              fontSize={{ base: "24px", md: "24px" }}
              lineHeight={{ md: "40px" }}
              fontFamily="Mark Pro"
            >
              {currentProject.clientName}
            </Text>
          </Box>
          <Box flex="1">
            <Text
              mb={8}
              fontWeight="bold"
              fontFamily="Mark Pro"
              color={COLORS[type]}
              fontSize={{ base: "48px", md: "48px" }}
              lineHeight={{ base: "60px", md: "81px" }}
            >
              {currentProject.title}
            </Text>
            <Text
              color="white"
              fontWeight="bold"
              fontFamily="Mark Pro"
              fontSize={{ base: "24px", md: "28px" }}
              lineHeight={{ base: "30px", md: "35px" }}
            >
              {currentProject.subTitle}
            </Text>
            <Spacer bgColor={COLORS[type]} height="8px" width="40px" my={8} />
            <Text
              color="white"
              fontSize={{ base: "16px", md: "20px" }}
              lineHeight={{ base: "32px", md: "40px" }}
              dangerouslySetInnerHTML={{
                __html: currentProject.description,
              }}
            />
          </Box>
        </Flex>

        <Flex
          backgroundColor="transparent"
          py={4}
          width="100%"
          flexDir="column"
        >
          {isDesktop ? (
            <PortofolioCarousel slides={currentProject.thumbnails} />
          ) : (
            currentProject.thumbnails.map((item, index) => (
              <Box p={2} key={index}>
                <Image
                  src={item.url}
                  alt="portofolio"
                  transition="opacity 1s ease-in-out"
                  h="100%"
                  w="100%"
                  cursor="pointer"
                  // filter="grayscale(100%)"
                  // _hover={{ filter: "grayscale(0%)" }}
                />
              </Box>
            ))
          )}
        </Flex>
        <Flex width="100%" mb={32} alignItems="center" flexDir="column">
          <Divider />
          <Flex
            py={4}
            width="98vw"
            backgroundColor="transparent"
            justifyContent="space-between"
            alignItems="center"
            height="110px"
          >
            <Box flex={1} textAlign="left">
              {prevProject && (
                <NavigationButton
                  label={prevProject.title}
                  arrowPosition="left"
                  subLabel="PREVIOUS PROJECT"
                  onClick={() => router.push(`${link}/${prevProject.id}`)}
                />
              )}
            </Box>
            {isDesktop && (
              <Box width="auto">
                <Text
                  color={COLORS[type]}
                  fontSize="32px"
                  fontWeight="bold"
                  fontFamily="Mark Pro"
                >
                  {PORTOFOLIO_TITLES[type]}
                </Text>
              </Box>
            )}
            <Box flex={1} textAlign="right">
              {nextProject && (
                <NavigationButton
                  label={nextProject.title}
                  arrowPosition="right"
                  subLabel="NEXT PROJECTS"
                  onClick={() => router.push(`${link}/${nextProject.id}`)}
                />
              )}
            </Box>
          </Flex>
          <Divider />
        </Flex>
      </Fragment>
    </Flex>
  );
};

export default PortofolioDetailSection;
