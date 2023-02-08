import {
  IPortofolioDetail,
  IPortofolioNext,
  IPortofolioPrev,
} from "./portofolio";

export interface IGetSolution {
  getSolution: GetSolution;
}
export interface GetSolution {
  title: string;
  descriptionOne: string;
}

export interface IResGetSolutionWorkById {
  getSolutionWorkById: IPortofolioDetail;
  getSolutionWorkNext: IPortofolioNext | null;
  getSolutionWorkPrev: IPortofolioPrev | null;
}

export interface IResListZodiacSolutions {
  getActiveSolutionWorks: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    solutionWorks: IPortofolioDetail[];
  };
}

export interface IZodiacSolutionWork {
  id: string;
  title: string;
  banner: string;
  subTitle: string;
  description: string;
  projectYear: string;
  sequence: string;
  clientName: string;
  category: string;
  thumbnail: ZodiacSolutionThumbnail[];
  createdAt: string;
  updatedAt: string;
  isActive: Boolean;
  heroVideoUrl: string;
}

export interface ZodiacSolutionThumbnail {
  id: string;
  url: string;
}
