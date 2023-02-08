import { Box, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { burgerMenu } from "@/constants/menu";

import { actions as homepageActions } from "@/states/homepage/slices";

import { createRef, FC, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

interface MenusProps {
  onClose: (i: boolean) => void;
}

const Menus: FC<MenusProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const ref = createRef<any>();
  const [isOverflow, setIsOverflow] = useState(false);

  useLayoutEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [ref]);

  return (
    <Box
      p="20px"
      position="fixed"
      w="100%"
      overflowY="auto"
      maxH="full"
      h="-webkit-fill-available"
      display="flex"
      alignItems={isOverflow ? "baseline" : "center"}
      ref={ref}
    >
      {/* <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        padding="0 15px"
      >
        <CloseIcon
          w="50px"
          h="50px"
          cursor="pointer"
          onClick={() => {
            onClose(false);
          }}
        />
      </Box> */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1.5rem"
        flex="1"
        w="full"
      >
        <Box
          background="white"
          color="black"
          padding="0 1.5rem"
          fontSize="32px"
          fontWeight={700}
          fontFamily="'Mark Pro'"
        >
          MENU
        </Box>
        {burgerMenu.map((item) => {
          const activeStyle = {
            color: "#081029",
            fontSize: "32px",
            transition: "0.5s",
            background: item.color,
            padding: "5px 30px",
            height: "50px",
          };

          return (
            <Button
              key={item.label}
              borderRadius={0}
              fontSize="24px"
              background="transparent"
              fontWeight={700}
              fontFamily="'Mark Pro'"
              alignItems="flex-end"
              color="white"
              onClick={() => {
                if (router.pathname == "/home") {
                  dispatch(homepageActions.setPageMode(item.name));
                } else {
                  router.push(item.url);
                }

                onClose(false);
                // console.log("ini");
              }}
              transition="0.5s"
              _hover={activeStyle}
              _focus={activeStyle}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default Menus;
