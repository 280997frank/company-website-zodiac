import React, { Icon, IconProps } from "@chakra-ui/react";

const CloseIcon = (props: IconProps) => (
  <Icon viewBox="0 0 50 50" fill="none" {...props}>
    <path d="M8 32L32 8M8 8L32 32" stroke="white" strokeWidth="2" />
  </Icon>
);

export default CloseIcon;
