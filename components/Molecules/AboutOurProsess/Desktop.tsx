import {
  AspectRatio,
  Box,
  // Center,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
// import imgContent from "@/assets/images/Image.png";
// import { isNil, isNull } from "lodash";
import { dataOurProcess } from "@/types/aboutUs";
interface TPropsTab {
  title: string;
  isActive: boolean;
}
interface TPropstabPanel {
  title: string;
  subTitle: string;
  desc: string;
  setHover: (i: string) => void;
  isHover: string;
  imgUrl: string;
}

interface TPropDesktop {
  data: dataOurProcess[];
}
const Desktop: FC<TPropDesktop> = ({ data }) => {
  const [isHover, setHover] = useState("");
  // const newData = data.filter((item) => item.isActive === true);
  // console.log("data desktop", isHover);

  return (
    <Tabs
      variant="unstyled"
      align="center"
      pt={{
        lg: "1.5rem",
        "2xl": "2rem",
      }}
      display={{
        base: "none",
        lg: "block",
      }}
    >
      <TabList
        gap={"3"}
        maxW="60vw"
        overflowX="auto"
        justifyContent="flex-start"
        width="min-content"
        pb="5px"
        css={{
          "&::-webkit-scrollbar": {
            width: "1px !important",
            height: "5px",
          },
          "&::-webkit-scrollbar-track": {
            width: "1px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#FFA8FA",
            borderRadius: "50px",
          },
        }}
      >
        {data.map((item, index: number) => {
          return (
            <TabCustom
              key={index}
              title={item.title}
              isActive={item.isActive}
            />
          );
        })}
      </TabList>
      <TabPanels>
        {data.map((item, index: number) => {
          return (
            <TabPanel
              key={index}
              p="0"
              pt={{
                lg: "2.5rem",
                "2xl": "3rem",
              }}
            >
              <TabPanelCustom
                title={item.title}
                subTitle={item.subtitle}
                imgUrl={item.imageUrl}
                desc={item.description}
                isHover={isHover}
                setHover={(i) => setHover(i)}
              />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};
// Tab Custom
const TabCustom: FC<TPropsTab> = ({ title, isActive }) => {
  return (
    <Tab
      border="1px solid #FFA8FA"
      _selected={{ color: "black", bg: "#FFA8FA" }}
      textTransform="uppercase"
      outline={"none"}
      _focus={{
        outline: "none",
      }}
      display={isActive ? "flex" : "none"}
    >
      {title}
    </Tab>
  );
};
// Tab Panel Custom
const TabPanelCustom: FC<TPropstabPanel> = ({
  title,
  subTitle,
  desc,
  setHover,
  isHover,
  imgUrl,
}) => {
  return (
    <Stack
      direction="row"
      height="auto"
      width={{
        lg: "80vw",
        "2xl": "70vw",
      }}
      spacing="10"
    >
      <Box
        position="relative"
        onMouseOver={() => setHover(title)}
        onMouseOut={() => setHover("")}
        w="50%"
        flex="1"
        minH="100px"
      >
        <AspectRatio
          ratio={16 / 9}
          display="flex"
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          width="100%"
        >
          <Image
            src={imgUrl}
            alt={title}
            fallback={<p>loading...</p>}
            display="block"
            w="100%"
            h="auto"
            objectFit="cover"
          />
        </AspectRatio>

        <Box
          position="absolute"
          bottom="0"
          top="0"
          left="0"
          right="0"
          bgColor="#FFA8FA"
          overflow="hidden"
          width={isHover === title ? "100%" : "0"}
          opacity={isHover === title ? ".6" : "0"}
          mixBlendMode="color"
          height="100%"
          transition="0.4s ease-out"
        ></Box>
        <Text
          position="absolute"
          bottom="-9.5%"
          left={isHover === title ? "55%" : "-5%"}
          transition="0.4s ease-out"
          fontSize={{
            lg: "2rem",
            "2xl": "3rem",
          }}
          fontWeight="bold"
          textTransform="uppercase"
          color="#FFA8FA"
          fontFamily="Mark Pro"
        >
          {title}
        </Text>
      </Box>
      <Box
        width={"50%"}
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="left"
        alignContent="flex-start"
        flexDir="column"
        textAlign="left"
        position="relative"
      >
        <Box
          position="absolute"
          left="0"
          right="0"
          top="0"
          bottom="0"
          overflowY="auto"
        >
          <Text
            color="#FFA8FA"
            fontWeight="bold"
            mb="1rem"
            fontSize={{
              lg: "1.25rem",
              // "2xl": "1.5rem",
            }}
            fontFamily="Mark Pro"
          >
            {subTitle}
          </Text>
          <Text
            fontFamily="Barlow"
            fontSize="1rem"
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          ></Text>
        </Box>
      </Box>
    </Stack>
  );
};
export default Desktop;
