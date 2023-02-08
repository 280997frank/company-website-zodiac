import { Box, Flex, FlexProps, Icon, Text } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";

interface BackButtonProps extends FlexProps {
  onClick: () => void;
  page: string;
  label: string;
}

const BackButton = ({ label, onClick, page, ...rest }: BackButtonProps) => {
  return (
    <Flex
      onClick={onClick}
      cursor="pointer"
      px="1rem"
      alignItems="center"
      {...rest}
    >
      <Icon as={BsArrowLeft} mr="1rem" fontSize="2rem" />
      <Box>
        <Text fontSize="sm">{page}</Text>
        <Text fontWeight="bold" fontSize="xl">
          {label}
        </Text>
      </Box>
    </Flex>
  );
};
export default BackButton;
