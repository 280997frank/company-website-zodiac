import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

const PlayButton = (props: IconProps) => (
  <Icon viewBox="0 0 40 40" fill="none" {...props}>
    <path
      d="M8 32L31.9338 8.06619M31.9338 8.06619L32 8M31.9338 8.06619L31.9338 8.02204L13.9448 8.01101M31.9338 8.06619L31.9448 26.011"
      stroke="#081029"
      strokeWidth="2"
    />
  </Icon>
);

export default PlayButton;
