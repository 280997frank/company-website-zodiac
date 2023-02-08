import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

const BurgerIcon = (props: IconProps) => (
  <Icon viewBox="0 0 50 50" fill="none" {...props}>
    <path d="M8 16H32" stroke="white" strokeWidth="2" />
    <path d="M8 24H32" stroke="white" strokeWidth="2" />
  </Icon>
);

export default BurgerIcon;
