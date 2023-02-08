import VideoPlayer from "@/components/Atoms/VideoPlayer";
import { useVideo } from "@/utils/videos";
import { ReactElement } from "react";

interface RenderVideoPlayerProps {
  videoURL: string;
}

const RenderVideoPlayer = ({
  videoURL,
}: RenderVideoPlayerProps): ReactElement => {
  const convertedVideo = useVideo(videoURL);

  return (
    <VideoPlayer
      videoId={convertedVideo.id}
      platform={convertedVideo.platform}
      htmlVideos={convertedVideo.htmlVideos}
      controls={false}
      autoPlay
      muted
    />
  );
};

export default RenderVideoPlayer;
