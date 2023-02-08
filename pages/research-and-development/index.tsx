import sectionThumbnails from "@/assets/images/section-thumbnails.png";
import BlogList from "@/components/Atoms/Labs/blog-list";
import NavigationButton from "@/components/Atoms/NavigationButton";
import Layout from "@/components/Templates/Layout";
import { useListCategory, useListRndPost } from "@/hooks/getListRndPost";
import { useGetRnd } from "@/hooks/getRnDPostById";
import { IRndPost, RndCategory } from "@/types/researchAndDevelopment";
import HeaderPortfolioMenu from "@/components/Molecules/HeaderPortfolioMenu";
import {
  Box,
  Center,
  Spinner,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { colorCategory } from "@/utils";

// const skeletonIds: string[] = [];
//
// for (let i = 0; i < 10; i++) {
//   skeletonIds.push(nanoid());
// }

const LabsPage: FC = () => {
  // const GLOW =
  //   "https://firebasestorage.googleapis.com/v0/b/dummy-48d01.appspot.com/o/Glow-min.png?alt=media&token=ff56726a-c943-4812-b2a8-9cdf727a3eef";
  // const ORBIT =
  //   "https://firebasestorage.googleapis.com/v0/b/dummy-48d01.appspot.com/o/Orbit.png?alt=media&token=0d0d5fff-fd5f-49ee-9d3b-ebbf071ee13c";

  const [limitPerPage, setLimitPerPage] = useState(10);
  const [blog, setBlog] = useState<IRndPost[]>();
  const [tabsList, setTabsList] = useState<RndCategory[]>([]);
  /* const [isDesktop] = useMediaQuery(
    "(min-width: 48em) and (orientation: landscape)"
  ); */
  const tabListRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(tabListRef, {
    applyRubberBandEffect: true,
  });
  const router = useRouter();

  const { fetchRnd, data: rndData } = useGetRnd();
  const { fetchListRndPost, data, loading } = useListRndPost();
  const { fetchListCategory, data: categoryList } = useListCategory();

  const handleCategory = (category: string) => {
    setBlog(
      data?.listRndPost.rndPost.filter(
        (item) => item.RndCategory.title === category
      )
    );
  };

  const loadMore = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement?.scrollHeight
    ) {
      if (data) {
        if (data?.listRndPost.page < data?.listRndPost.totalPage) {
          setLimitPerPage(limitPerPage + 10);
        }
      }
    }
  }, [data, limitPerPage]);

  useEffect(() => {
    fetchRnd();
    window.addEventListener("scroll", loadMore, false);
    fetchListRndPost({
      variables: { input: { page: 1, limit: limitPerPage } },
    });
    fetchListCategory({
      variables: { input: { page: 1, limit: limitPerPage } },
    });
    setBlog(
      data?.listRndPost.rndPost.filter(
        (item) =>
          item.RndCategory.title ===
          categoryList?.listRndCategory.rndCategory[0].title
      )
    );
    return () => window.removeEventListener("scroll", loadMore, false);
  }, [
    fetchListRndPost,
    fetchListCategory,
    fetchRnd,
    limitPerPage,
    loadMore,
    data?.listRndPost.rndPost,
    categoryList?.listRndCategory,
  ]);

  useEffect(() => {
    const categoryWithPosts =
      data?.listRndPost.rndPost
        .map((post) => post.RndCategory.title)
        .filter((categoryTitle, index, array) => {
          return array.indexOf(categoryTitle) === index;
        }) || [];

    if (categoryWithPosts.length) {
      setTabsList(
        categoryList?.listRndCategory.rndCategory.filter((category) => {
          return categoryWithPosts.includes(category.title);
        }) || []
      );
    }
  }, [data?.listRndPost.rndPost, categoryList?.listRndCategory.rndCategory]);

  return (
    <Layout title="Research and Development" overflow="hidden">
      <Box
        width={["100vw", "90vw", "70vw"]}
        minH="100vh"
        margin="auto"
        pt={20}
        pos="relative"
        pb="7rem"
        px="4"
      >
        <NavigationButton
          label="HOME"
          subLabel="BACK"
          arrowPosition="left"
          onClick={() => router.push("/home")}
        />
        <HeaderPortfolioMenu
          imgUrl={sectionThumbnails.src}
          title={rndData?.getRnd.title || ""}
          description={rndData ? rndData.getRnd.descriptionOne : ""}
          color="#ED8041"
        />
        <Tabs zIndex="2" mt={5} mx={{ base: "0", md: "2rem" }} isManual>
          <TabList
            borderBottom="none"
            gap={4}
            overflowX="auto"
            overflowY="hidden"
            p={1}
            pb={5}
            ref={tabListRef}
            sx={{
              "::-webkit-scrollbar": {
                display: "block",
              },
            }}
            // css={{
            //   "&::-webkit-scrollbar": {
            //     width: "1px !important",
            //     height: "10px",
            //   },
            //   "&::-webkit-scrollbar-track": {
            //     width: "1px",
            //   },
            //   "&::-webkit-scrollbar-thumb": {
            //     background: isDesktop ? "#ED8041" : "transparent",
            //     borderRadius: "50px",
            //   },
            // }}
            {...events}
          >
            {/* {categoryList?.listRndCategory.rndCategory.map((item) => { */}
            {tabsList.map((item) => {
              return (
                <Tab
                  key={item.id}
                  border={`1px solid ${colorCategory(item.title)}`}
                  color="white"
                  _focus={{}}
                  _hover={{
                    backgroundColor: colorCategory(item.title),
                    color: "black",
                  }}
                  _active={{ borderBottom: "none" }}
                  // _hover={{
                  //   backgroundColor: "#00FFDA",
                  // }}
                  _selected={{
                    color: "black",
                    backgroundColor: colorCategory(item.title),
                    _hover: {
                      backgroundColor: colorCategory(item.title),
                    },
                  }}
                  onClick={() => {
                    handleCategory(item.title);
                  }}
                  minW={{ base: "45%", md: "30%", lg: "18%" }}
                  // maxH="7vh"
                  // maxW="20%"
                  px="2rem"
                  textTransform="uppercase"
                >
                  <Text
                    fontWeight="500"
                    fontSize={{ base: "1.25rem", lg: "1.25rem" }}
                    lineHeight="1.5rem"
                  >
                    {item.title}
                  </Text>
                </Tab>
              );
            })}
          </TabList>
        </Tabs>
        <Box zIndex="100" mx={{ base: "0", md: "2rem" }}>
          {blog?.map((item) => {
            return (
              <Box zIndex="100" key={item.id}>
                <BlogList
                  key={item.id}
                  item={item}
                  color={colorCategory(item.RndCategory.title)}
                />
              </Box>
            );
          })}
          <Center>{loading && <Spinner color="white" />}</Center>
        </Box>
      </Box>
    </Layout>
  );
};

export default LabsPage;
