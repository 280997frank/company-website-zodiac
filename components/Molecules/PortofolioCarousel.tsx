import { EBasicModalContent, IBasicContentModalProps } from "@/types/modal";
import { IThumbnail } from "@/types/portofolio";
import { Box, Image } from "@chakra-ui/react";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Fragment, useState } from "react";
import BasicModal from "./BasicModal";

const PortofolioCarousel: React.FC<{
  slides: IThumbnail[];
}> = ({ slides }) => {
  const [selectedData, setSelectedData] = useState<IBasicContentModalProps>({
    contentType: undefined,
    urlFile: "",
  });

  const handleOnClose = () => {
    setSelectedData({
      contentType: undefined,
      urlFile: "",
    });
  };

  return (
    <Fragment>
      <CarouselProvider
        naturalSlideWidth={350}
        naturalSlideHeight={197}
        totalSlides={slides.length}
        visibleSlides={3.2}
      >
        <Slider>
          {slides.map((item, index) => (
            <Slide index={index} key={index}>
              <Box
                p={2}
                onClick={() =>
                  setSelectedData({
                    contentType: EBasicModalContent.image,
                    urlFile: item.url,
                  })
                }
              >
                <Image
                  src={item.url}
                  alt="portofolio"
                  transition="opacity 1s ease-in-out"
                  h="100%"
                  w="100%"
                  cursor="pointer"
                  // filter="grayscale(100%)"
                  // _hover={{ filter: "grayscale(0%)" }}
                />
              </Box>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
      <BasicModal onClose={handleOnClose} {...selectedData} />
    </Fragment>
  );
};

export default PortofolioCarousel;
