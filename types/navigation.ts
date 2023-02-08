import { BoxProps } from "@chakra-ui/react";

interface INavigationProps extends BoxProps {
  label: string;
  subLabel: string;
  onClick?: () => void;
  arrowPosition: "left" | "right";
  navigationWidth?: {
    base?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
  };
}

export type TNavigationProps = React.FC<INavigationProps>;
