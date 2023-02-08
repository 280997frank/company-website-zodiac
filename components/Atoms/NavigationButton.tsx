import ArrowLeft from "@/assets/svg/arrow-left.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";
import { TNavigationProps } from "@/types/navigation";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Arrow: React.FC<{ position: "left" | "right" }> = ({ position }) => {
  return (
    <Box height="24px" mr={2}>
      <Image
        alt="back"
        width="24px"
        src={position === "left" ? ArrowLeft.src : ArrowRight.src}
      />
    </Box>
  );
};

/*
  Not only used for back button but for navigation next/prev, et cetera
*/
const NavigationButton: TNavigationProps = ({
  label,
  subLabel,
  arrowPosition,
  onClick,
  navigationWidth = {
    base: "90%",
    lg: "95%",
    xl: "82%",
    "2xl": "100%",
  },
  ...props
}) => {
  const router = useRouter();
  const [isDesktop] = useMediaQuery(
    "(min-width: 48em) and (orientation: landscape)"
  );
  const [spaceTransition, setSpaceTransition] = useState<string>("0");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="docked"
      mb="4"
      {...props}
    >
      <Box width={navigationWidth}>
        <Button
          zIndex={10}
          padding="0"
          bgColor="transparent"
          onClick={onClick ? onClick : () => onClick ?? router.back()}
          onMouseEnter={() => {
            if (isDesktop) {
              setSpaceTransition("2rem");
            }
          }}
          onMouseLeave={() => {
            if (isDesktop) {
              setSpaceTransition("0");
            }
          }}
          leftIcon={
            arrowPosition === "left" ? <Arrow position="left" /> : undefined
          }
          rightIcon={
            arrowPosition === "right" ? <Arrow position="right" /> : undefined
          }
          _active={{
            boxShadow: "none",
            bg: "transparent",
          }}
          _hover={{
            bg: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
        >
          <Flex
            flexDir="column"
            transition="1s"
            alignItems={arrowPosition === "left" ? "start" : "end"}
            marginLeft={arrowPosition === "left" ? spaceTransition : 0}
            marginRight={arrowPosition === "right" ? spaceTransition : 0}
          >
            <Text
              color="white"
              fontWeight="500"
              fontSize={{ base: "12px", md: "14px", xl: "16px" }}
            >
              {subLabel}
            </Text>
            <Text
              color="white"
              fontWeight="700"
              fontFamily="Mark Pro"
              fontSize={{ base: "16px", sm: "16px", md: "20px", xl: "24px" }}
              whiteSpace="normal"
              textAlign={arrowPosition === "left" ? "left" : "right"}
            >
              {label}
            </Text>
          </Flex>
        </Button>
      </Box>
    </Box>
  );
};

export default NavigationButton;
