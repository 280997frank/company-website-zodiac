import { VideoPlayerProps } from "@/types/video";
import { AspectRatio, Box, Spinner } from "@chakra-ui/react";
import Vimeo from "@u-wave/react-vimeo";
import { ReactElement, useEffect, useRef, useState } from "react";
import s from "shortid";

const VideoPlayer = ({
  onStateChange,
  videoId,
  htmlVideos,
  platform,
  autoPlay,
  controls,
  width,
  height,
  loop,
  muted,
  isPlayVideo,
  aspectRatio = 16 / 9,
}: VideoPlayerProps): ReactElement => {
  let videoPlayer = null;
  const videoRef = useRef<HTMLElement>(null);
  const [updateHeight, setUpdateHeight] = useState(0);

  useEffect(() => {
    if (platform === "dacast" && videoId !== "") {
      const myPlayer = window.dacast(videoId, "dacast", {
        player: "theo",
      });
      myPlayer.onPause(() => {
        onStateChange(false);
      });
      myPlayer.onPlay(() => {
        onStateChange(true);
      });
      myPlayer.onComplete(() => {
        onStateChange(false);
      });
    }
  }, [videoId, onStateChange, platform]);

  useEffect(() => {
    if (isPlayVideo) {
      const marioVideo = document.getElementById(
        "streamplayer"
      ) as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
        webkitRequestFullScreen(): Promise<void>;
      };

      if (marioVideo?.requestFullscreen) {
        marioVideo.requestFullscreen();
      } else if (marioVideo?.msRequestFullscreen) {
        marioVideo.msRequestFullscreen();
      } else if (marioVideo?.mozRequestFullScreen) {
        marioVideo.mozRequestFullScreen();
      } else if (marioVideo?.webkitRequestFullScreen) {
        marioVideo.webkitRequestFullScreen();
        /*
         *Kept here for reference: keyboard support in full screen
         * marioVideo.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
         */
      }
    }
  }, [isPlayVideo]);

  switch (platform) {
    case "dacast":
      videoPlayer = (
        <Box
          id="streamplayer"
          style={{ width: width ?? "unset", height: height ?? "unset" }}
        >
          {videoId.length > 0 ? (
            <AspectRatio ratio={aspectRatio} bgColor="black">
              <figure ref={videoRef}>
                <div id="dacast" className="dacast-video" />
              </figure>
            </AspectRatio>
          ) : (
            <Spinner />
          )}
        </Box>
      );
      break;
    case "youtube":
      videoPlayer = (
        <Box
          id="streamplayer"
          style={{ width: width ?? "unset", height: height ?? "unset" }}
        >
          {videoId.length > 0 ? (
            <figure ref={videoRef}>
              <AspectRatio ratio={aspectRatio}>
                <iframe
                  src={videoId}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </AspectRatio>
            </figure>
          ) : (
            <Spinner />
          )}
        </Box>
      );
      break;
    case "vimeo":
      videoPlayer = (
        <Box
          id="streamplayer"
          style={{ width: width ?? "unset", height: height ?? "unset" }}
        >
          {videoId.length > 0 ? (
            <figure ref={videoRef}>
              <AspectRatio ratio={aspectRatio} bgColor="black">
                <Vimeo
                  video={videoId}
                  onPlay={() => onStateChange(true)}
                  onEnd={() => {
                    onStateChange(false);
                  }}
                  controls={controls}
                  muted={muted}
                  loop={loop}
                  onPause={() => onStateChange(false)}
                  autoplay={autoPlay}
                  onReady={() => setUpdateHeight(updateHeight + 1)}
                />
              </AspectRatio>
            </figure>
          ) : (
            <Spinner />
          )}
        </Box>
      );
      break;
    default:
      videoPlayer = (
        <Box
          id="streamplayer"
          style={{ width: width ?? "unset", height: height ?? "unset" }}
        >
          {Array.isArray(htmlVideos) && htmlVideos.length > 0 ? (
            <figure ref={videoRef}>
              <AspectRatio ratio={aspectRatio}>
                <video
                  autoPlay={true}
                  preload=""
                  playsInline
                  controls={controls}
                  controlsList="nodownload"
                  disablePictureInPicture
                  disableRemotePlayback
                  muted={muted}
                  onEnded={() => onStateChange(false)}
                  onLoadedData={() => {
                    setUpdateHeight(updateHeight + 1);
                  }}
                >
                  {Array.isArray(htmlVideos) &&
                    htmlVideos.map(({ src, type }) => (
                      <source key={s.generate()} src={src} type={type} />
                    ))}
                  <h1>{`Your browser doesn't support HTML native videos.`}</h1>
                </video>
              </AspectRatio>
            </figure>
          ) : (
            <Spinner />
          )}
        </Box>
      );
  }

  return videoPlayer;
};

VideoPlayer.defaultProps = {
  onStateChange: () => {},
  autoPlay: true,
  className: "",
  controls: true,
  videoId: "",
  platform: "",
  loop: false,
  muted: false,
};

export default VideoPlayer;
