import { ResponsiveValue } from "@chakra-ui/react";

declare global {
  interface Window {
    dacast: (
      videoId: string,
      elementId: string,
      options: any
    ) => {
      onPause: Function;
      onPlay: Function;
      onComplete: Function;
    };
  }
}

export interface HtmlVideo {
  src: string;
  type: string;
}

export interface VideoPlayerProps {
  onStateChange: (playState: boolean) => void;
  videoId: string;
  htmlVideos?: HtmlVideo[];
  platform: string;
  autoPlay: boolean;
  controls: boolean;
  width?: string;
  height?: string;
  loop?: boolean;
  muted?: boolean;
  isPlayVideo?: boolean;
  aspectRatio?: ResponsiveValue<number> | undefined;
}
