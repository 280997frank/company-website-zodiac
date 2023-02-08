import CategoryTag from "@/components/Atoms/CategoryTag";
import NavigationButton from "@/components/Atoms/NavigationButton";
import Layout from "@/components/Templates/Layout";
import { useRndByPostId } from "@/hooks/getRnDPostById";
import { isValidUrl } from "@/utils";
import {
  AspectRatio,
  Box,
  chakra,
  // Grid,
  // GridItem,
  Heading,
  Image,
  // Img,
  Text,
  // useMediaQuery,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { colorCategory } from "@/utils";

const GLOW =
  "https://firebasestorage.googleapis.com/v0/b/dummy-48d01.appspot.com/o/Glow-min.png?alt=media&token=ff56726a-c943-4812-b2a8-9cdf727a3eef";
const ORBIT =
  "https://firebasestorage.googleapis.com/v0/b/dummy-48d01.appspot.com/o/Orbit.png?alt=media&token=0d0d5fff-fd5f-49ee-9d3b-ebbf071ee13c";

const BlogDetail = () => {
  const router = useRouter();
  // const [isDesktop] = useMediaQuery("(min-width: 62em)");
  const [tags, setTags] = useState<string[]>([]);

  const { fetchRndPostById, data } = useRndByPostId();

  useMemo(() => {
    const { slug } = router.query;
    fetchRndPostById({
      variables: {
        id: slug as string,
      },
    });
  }, [router, fetchRndPostById]);

  useEffect(() => {
    if (data) {
      const tempTags = data.getRndPostById.tags.split("|");
      setTags(tempTags);
    }
  }, [data]);

  return (
    <Layout title="Blog Detail">
      <Box
        background={`url(${GLOW}), url(${ORBIT})`}
        backgroundRepeat="no-repeat, no-repeat"
        backgroundPosition="left center, top left"
        backgroundSize="100%, 100%"
        minH="100vh"
        px={{ base: "1rem", md: "5rem", lg: "10rem", xl: "20rem" }}
        color="white"
        py={{ base: "4rem", md: "2rem" }}
      >
        <Box mb="1rem" mt={{ base: "1rem", md: "3rem", lg: "3rem" }}>
          <NavigationButton
            label="RESEARCH AND DEVELOPMENT"
            subLabel="ALL POSTS"
            arrowPosition="left"
            navigationWidth={{
              base: "100%",
            }}
            onClick={() => router.push("/research-and-development")}
          />
        </Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={
              isValidUrl(data?.getRndPostById.headerImage)
                ? data?.getRndPostById.headerImage
                : "https://via.placeholder.com/720"
            }
            fallback={<Text>Loading...</Text>}
            alt="header"
          />
        </AspectRatio>

        <CategoryTag
          color={colorCategory(
            data ? data.getRndPostById.RndCategory.title : "Unknown Category"
          )}
          label={
            data ? data.getRndPostById.RndCategory.title : "Unknown Category"
          }
          my="2rem"
        />
        <Heading fontSize={{ base: "2rem", xl: "3rem" }}>
          {data?.getRndPostById.title}
        </Heading>
        <Text fontSize={{ base: "1rem", xl: "1.25rem" }} my="1rem">
          {dayjs(data?.getRndPostById.createdAt).format("DD MMMM YYYY")}
        </Text>
        <Text
          fontSize={{ base: "1.25rem", xl: "1.5rem" }}
          mb="1rem"
          fontWeight="bold"
          dangerouslySetInnerHTML={{
            __html: data?.getRndPostById.synopsis as string,
          }}
        />
        <Text
          fontSize={{ base: "1rem", xl: "1.25rem" }}
          dangerouslySetInnerHTML={{
            __html: data?.getRndPostById.content as string,
          }}
          sx={{
            p: {
              paddingBottom: "1rem",
              color: "white !important",
            },
          }}
        />

        {tags[0] !== "" && (
          <Box mt="2rem">
            {tags.map((tag, index) => {
              return (
                <Text
                  display="inline-block"
                  mr="1rem"
                  px="2rem"
                  py="5px"
                  border="1px solid white"
                  key={index}
                >
                  {tag}
                </Text>
              );
            })}
          </Box>
        )}

        <chakra.hr h="2px" mb="1rem" mt="3rem" />

        {/*data?.getRndPostById.RndCategory.id && (
          <>
            <Heading fontSize="2rem" color="#ED8041">
              Other posts you may like
            </Heading>

            <Grid
              templateRows={{ base: "1", md: "repeat(1, 1fr)" }}
              templateColumns={{ base: "5", md: "repeat(5, 1fr)" }}
              my="2rem"
              columnGap="1rem"
            >
              <GridItem rowSpan={2} colSpan={{ base: 5, md: 1 }}>
                {isDesktop ? (
                  <Img src={THUMBNAIL1} alt="HEADER" />
                ) : (
                  <Img src={THUMBNAIL_MOBILE_1} alt="HEADER" w="100%" />
                )}
              </GridItem>
              <GridItem colSpan={4}>
                <CategoryTag
                  color="#00FFDA"
                  label="Blog Post/Article Category"
                  mt={{ base: "1rem", md: 0 }}
                />
                <Heading fontSize="1.75rem" py="1rem">
                  {data?.getRndPostById.RndCategory.title}
                </Heading>
                <Text fontSize="1.25rem" pb="1rem">
                  13 July 2022
                </Text>
                <Text fontSize="1.25rem">
                  Short synopsis of the post to tease reader to click. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
                  sed congue viverra volutpat ridiculus amet. Congue eget diam
                  velit ornare dictum.
                </Text>
              </GridItem>
            </Grid>
          </>
        )*/}
      </Box>
    </Layout>
  );
};

export default BlogDetail;
