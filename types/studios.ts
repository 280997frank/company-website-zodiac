import {
  IPortofolioDetail,
  IPortofolioNext,
  IPortofolioPrev,
} from "./portofolio";

export interface IResGetStudioWorkById {
  getStudioWorkById: IPortofolioDetail;
  getStudioWorkNext: IPortofolioNext | null;
  getStudioWorkPrev: IPortofolioPrev | null;
}

export interface IResListZodiacStudio {
  getActiveStudioWorks: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    studioWorks: IPortofolioDetail[];
  };
}

export interface IZodiacStudioWork {
  id: string;
  title: string;
  banner: string;
  subTitle: string;
  description: string;
  projectYear: string;
  sequence: string;
  clientName: string;
  category: string;
  thumbnail: ZodiacStudioThumbnail[];
  createdAt: string;
  updatedAt: string;
  isActive: Boolean;
  heroVideoUrl: string;
}

export interface ZodiacStudioThumbnail {
  id: string;
  url: string;
}
