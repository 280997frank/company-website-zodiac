import { useEffect, useState } from "react";

interface THtmlVideo {
  src: string;
  type: string;
}
interface TVideoDetail {
  id: string;
  platform: string;
  htmlVideos: THtmlVideo[];
}

export const useVideo = (videoUrl: string): TVideoDetail => {
  const [video, setVideo] = useState<TVideoDetail>({
    id: "",
    platform: "",
    htmlVideos: [],
  });

  useEffect(() => {
    if (videoUrl !== null) {
      const videoDetail: TVideoDetail = {
        id: "",
        platform: "",
        htmlVideos: [],
      };

      const url = new URL(videoUrl);
      if (url.hostname.includes("vimeo")) {
        videoDetail.id = videoUrl; // splitPathname[1]
        videoDetail.platform = "vimeo";
      } else if (url.hostname.includes("youtube")) {
        const id = url !== null ? url.searchParams.get("v") : "";
        videoDetail.id = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
        videoDetail.platform = "youtube";
      } else if (url.hostname.includes("dacast")) {
        const splitPathname = url.pathname.split("/");
        let id = splitPathname.slice(2).join("_");
        if (url.pathname.includes("/live/")) {
          id = splitPathname.slice(2).join("-live-");
        }
        videoDetail.id = id;
        videoDetail.platform = "dacast";
      } else {
        // use HTML's built-in video
        videoDetail.htmlVideos = [{ src: videoUrl, type: "video/mp4" }];
      }

      setVideo(videoDetail);
    }
  }, [videoUrl]);

  return video;
};
