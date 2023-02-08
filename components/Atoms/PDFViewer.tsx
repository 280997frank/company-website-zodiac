import { Box, ButtonGroup, Icon } from "@chakra-ui/react";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import s from "shortid";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  isZoom: boolean;
  fileUrl: string;
}

const PDFViewer: FC<Props> = ({ fileUrl, isZoom }): ReactElement => {
  const pdfContainer = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [pointScale, setPointCale] = useState(1);

  useEffect(() => {
    if (numPages > 0) {
      setTimeout(
        () =>
          setPageWidth(
            pdfContainer.current != null
              ? pdfContainer.current.getBoundingClientRect().width
              : 0
          ),
        1000
      );
    }
  }, [numPages]);

  useEffect(() => {
    const modelContent = document.getElementById("pdf-box");
    if (modelContent !== null) {
      modelContent.scrollIntoView();
    }
  }, []);
  return (
    <Box id="pdf-box">
      {isZoom && (
        <ButtonGroup
          variant="outline"
          spacing="1"
          position="absolute"
          left={{
            base: "5",
            md: "5",
            xl: "5",
          }}
          top={{
            base: "59%",
            md: "20",
          }}
          zIndex="99"
        >
          <Icon
            as={AiOutlinePlusCircle}
            boxSize="12"
            fill="gray.400"
            onClick={() => {
              if (pointScale < 5) {
                setPointCale(pointScale + 1);
              } else {
                setPointCale(5);
              }
            }}
            cursor="pointer"
          />
          <Icon
            as={AiOutlineMinusCircle}
            boxSize="12"
            fill="gray.400"
            onClick={() => {
              if (pointScale < 2) {
                setPointCale(1);
              } else {
                setPointCale(pointScale - 1);
              }
            }}
            cursor="pointer"
          />
        </ButtonGroup>
      )}
      <Box ref={pdfContainer}>
        <Document
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
          externalLinkTarget="_blank"
          file={fileUrl}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
          }}
        >
          {Array.from(Array(numPages).keys()).map((index) => (
            <Page
              pageNumber={index + 1}
              width={pageWidth}
              key={s.generate()}
              scale={pointScale}
            />
          ))}
        </Document>
      </Box>
    </Box>
  );
};

export default PDFViewer;
