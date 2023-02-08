import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";

import type { ReactNode } from "react";
import type { BoxProps } from "@chakra-ui/react";

interface BounceProps extends BoxProps {
  children: ReactNode;
}

export default function Bounce({ children, sx, ...props }: BounceProps) {
  const bounceInterval = useMemo(
    () => Math.abs(Math.random() * (2 - 2.5) + 2.5).toFixed(2),
    []
  );

  return (
    <Box
      width="fit-content"
      {...props}
      animation={`bounce ${bounceInterval}s infinite alternate`}
      _hover={{
        animation: `bounce 0.25s infinite alternate`,
      }}
      sx={{
        ...sx,
        "@keyframes bounce": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-0.5rem)",
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
