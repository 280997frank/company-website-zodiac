import {
  Box,
  Stack,
  Image,
  Text,
  AspectRatio,
  Link,
  Center,
} from "@chakra-ui/react";
import React, { FC, useState, useCallback } from "react";

// import imgContent from "@/assets/images/Image.png";
import { dataOurProcess } from "@/types/aboutUs";
interface TPropDesktop {
  data: dataOurProcess[];
}
const Mobile: FC<TPropDesktop> = ({ data }) => {
  // const newData = data.filter((item) => item.isActive === true);
  const [listHover, setListHover] = useState<string[]>([]);

  const handleClick = useCallback(
    (item: string) => {
      if (listHover.includes(item)) {
        const newArray = listHover.filter((e) => e !== item);
        setListHover(newArray);
      } else {
        setListHover((listHover) => [...listHover, item]);
      }
    },
    [listHover]
  );
  return (
    <Stack
      direction="column"
      align="center"
      width="100%"
      display={{
        base: "block",
        lg: "none",
      }}
      p="4"
    >
      <Center>
        <Stack
          direction="row"
          align="flex-start"
          justifyContent="flex-start"
          width="unset"
          overflowX="auto"
          overflowY="hidden"
          // minW="90vw"
          maxW="98vw"
          mb="1.75rem"
        >
          {data.map((item, index: number) => {
            return (
              <Link
                border="1px solid #FFA8FA"
                colorScheme="none"
                textTransform="uppercase"
                outline={"none"}
                _focus={{
                  outline: "none",
                  bgColor: "transparent",
                  textDecoration: "none",
                }}
                _active={{
                  boxShadow: "none",
                  bg: "transparent",
                  textDecoration: "none",
                }}
                _hover={{
                  boxShadow: "none",
                  bg: "transparent",
                  textDecoration: "none",
                }}
                key={index}
                bgColor="transparent"
                href={`#${item.title}`}
                p="2"
                textDecoration="none"
              >
                {item.title}
              </Link>
            );
          })}
        </Stack>
      </Center>

      {data.map((item, index: number) => {
        return (
          <Content
            key={index}
            title={item.title}
            subTitle={item.subtitle}
            imgUrl={item.imageUrl}
            desc={item.description}
            listHover={listHover}
            handleClick={(i) => handleClick(i)}
            // isActive={item.isActive}
          />
        );
      })}
    </Stack>
  );
};
interface TPropsContent {
  handleClick: (i: string) => void;
  listHover: string[];
  title: string;
  subTitle: string;
  desc: string;
  imgUrl: string;
  // isActive: boolean;
}
const Content: FC<TPropsContent> = ({
  handleClick,
  listHover,
  title,
  subTitle,
  desc,
  imgUrl,
  // isActive,
}) => {
  return (
    <Stack
      direction="column"
      align="center"
      width="100%"
      // display={isActive ? "flex" : "none"}
      mb="3rem !important"
      id={title}
    >
      <Box
        position="relative"
        onClick={() => handleClick(title)}
        w="100%"
        height="100%"
        mb="1rem"
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
          left="0"
          right="0"
          bgColor="#FFA8FA"
          overflow="hidden"
          width="100%"
          opacity={listHover.includes(title) ? ".5" : "0"}
          height={listHover.includes(title) ? "100%" : "0"}
          transition="0.4s ease-out"
          mixBlendMode="color"
        ></Box>
        <Text
          position="absolute"
          bottom={listHover.includes(title) ? "1rem" : "-1.5rem"}
          left="4%"
          transition="0.4s ease-out"
          fontSize="3rem"
          fontWeight="bold"
          textTransform="uppercase"
          color="#FFA8FA"
          fontFamily="Mark Pro"
          lineHeight="none"
        >
          {title}
        </Text>
      </Box>
      <Box width="100%" textAlign="left" pt="5">
        <Text
          color="#FFA8FA"
          fontWeight="bold"
          fontFamily="Mark Pro"
          mb="1rem"
          fontSize="1.5rem"
          lineHeight="normal"
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
    </Stack>
  );
};

export default Mobile;
