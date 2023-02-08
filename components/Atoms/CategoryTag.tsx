import { Text, TextProps } from "@chakra-ui/react";

interface CategoryTabProps extends TextProps {
  label: string;
  color: string;
}

const CategoryTag = ({ label, color, ...rest }: CategoryTabProps) => {
  return (
    <Text
      {...rest}
      fontSize={{ base: "md", md: "md" }}
      background={color}
      color="black"
      p={{ base: "0.5rem", md: "1rem", lg: "1rem" }}
      display="inline-block"
      textTransform="uppercase"
    >
      {label}
    </Text>
  );
};
export default CategoryTag;
