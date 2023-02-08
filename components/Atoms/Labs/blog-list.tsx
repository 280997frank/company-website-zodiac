import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  AspectRatio,
  Skeleton,
} from "@chakra-ui/react";
import { IRndPost } from "@/types/researchAndDevelopment";
import dayjs from "dayjs";
import { useRouter } from "next/router";

interface Blog {
  item: IRndPost;
  color: string;
}

export default function BlogList({ item, color }: Blog) {
  const router = useRouter();
  const date = dayjs(item.createdAt).format("DD MMMM YYYY");

  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      mt={10}
      gap={5}
      p={1}
      minH={{ lg: "33vh" }}
      maxH={{ lg: "33vh", xl: "40vh" }}
      cursor="pointer"
      onClick={() => {
        router.push(`/research-and-development/${item.id}`);
      }}
    >
      <AspectRatio
        ratio={{ base: 16 / 9, lg: 1 }}
        maxW={{ base: "100%" }}
        minW={{ base: "100%", md: "25%" }}
      >
        <Image src={item.thumbnail} alt="" fallback={<Skeleton />} />
      </AspectRatio>
      <Flex flexDir="column" gap={2} maxW={{ base: "100vw", lg: "50vw" }}>
        <Box
          textAlign="center"
          bgColor={color}
          borderRadius="none"
          w={{ base: "70%", md: "40%" }}
          py="10px"
        >
          <Text fontSize="1rem" textTransform="uppercase" fontWeight="500">
            {item.RndCategory.title}
          </Text>
        </Box>
        <Text
          color="white"
          fontSize={{ base: "1.5rem", md: "1.75rem" }}
          w="90vw"
          fontWeight="700"
          fontFamily="Mark Pro"
        >
          {item.title}
        </Text>
        <Text color="white" fontSize={{ base: "1rem", md: "1.25rem" }}>
          {date}
        </Text>
        <Text
          color="white"
          fontSize={{ base: "1rem", md: "1.25rem" }}
          mt={3}
          dangerouslySetInnerHTML={{ __html: item.synopsis }}
        />
      </Flex>
    </Flex>
  );
}
