export enum EBasicModalContent {
  pdf = "pdf",
  image = "image",
  video = "video",
}

export interface IBasicContentModalProps {
  contentType: EBasicModalContent | undefined;
  urlFile: string;
}

interface IBasicModalProps extends IBasicContentModalProps {
  onClose: () => void;
}

export type TBasicModal = React.FC<IBasicModalProps>;
