import {
  IPortofolio,
  IPortofolioDetail,
  IPortofolioNext,
  IPortofolioPrev,
} from "./portofolio";

export interface IResGetEventWorkById {
  getEventWorkById: IPortofolioDetail;
  getEventWorkNext: IPortofolioNext | null;
  getEventWorkPrev: IPortofolioPrev | null;
}

export interface IResListZodiacEventExplolers {
  getActiveEventWorks: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    eventWorks: IPortofolioDetail[];
  };
}

export interface IEventWork {
  id: string;
  title: string;
  banner: string;
  subTitle: string;
  description: string;
  projectYear: string;
  sequence: string;
  clientName: string;
  category: string;
  thumbnail: EventWorkThumbnail[];
  createdAt: string;
  updatedAt: string;
  isActive: Boolean;
}

export interface EventWorkThumbnail {
  id: string;
  url: string;
}

export interface IResGetEvent {
  getVirtualEvent: IPortofolio;
}
