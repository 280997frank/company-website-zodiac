import { TBasicModal } from "@/types/modal";
import {
  AspectRatio,
  Image,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

const BasicModal: TBasicModal = (props) => {
  const { contentType, onClose, urlFile } = props;

  return (
    <ChakraModal
      isOpen={contentType !== undefined}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        bgColor={{
          base: "transparent",
        }}
        minWidth={{
          base: "100%",
          md: "70vw",
        }}
        maxWidth={{
          base: "100%",
          md: "70vw",
        }}
        p="0"
        borderRadius="none"
      >
        <ModalBody overflowY="auto">
          {contentType === "image" && urlFile !== "" && (
            <AspectRatio
              maxW="100vw"
              ratio={16 / 9}
              sx={{
                "& img": {
                  objectFit: "contain",
                },
              }}
            >
              <Image src={urlFile} alt="image-modal" />
            </AspectRatio>
          )}

          {contentType === "video" && urlFile !== "" && (
            <AspectRatio maxW="100vw" ratio={16 / 9}>
              <ReactPlayer
                url={urlFile}
                id="streamplayer"
                width="100%"
                height="100%"
              />
            </AspectRatio>
          )}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default BasicModal;
