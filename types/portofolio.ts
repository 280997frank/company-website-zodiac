import { PORTOFOLIO_KEYS } from "@/constants/portofolio";

export interface IPortofolioDetail {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  clientName: string;
  projectYear: number;
  banner: string;
  heroVideoUrl: string;
  thumbnails: IThumbnail[];
  category: string;
}

export interface IThumbnail {
  id: number;
  url: string;
}

export interface IPortofolioPrev {
  id: number;
  title: string;
}

export interface IPortofolioNext {
  id: number;
  title: string;
}

interface IPortofolioDetailProps {
  type: TPortofolioKeys;
  currentProject: IPortofolioDetail;
  nextProject?: IPortofolioNext | null;
  prevProject?: IPortofolioPrev | null;
}

interface IHeaderIndexPortfolio {
  imgUrl: string;
  title: string;
  description: string;
  color: string;
}

interface ICardImagePortfolioMenu {
  banner: string;
  title: string;
  subTitle: string;
  color: string;
  backgroundButton: string;
  url: string;
  itemId: number;
  fontSizeSubtitle?: string | number;
  fontSizeTitle?: string | number;
  ratio?: number;
}

interface IPortofolioListProps {
  data: IPortofolioDetail[];
  type: TPortofolioKeys;
}

// 👇️ type Keys = "events" | "solutions" | "studios"
export type TPortofolioKeys = keyof typeof PORTOFOLIO_KEYS;

// detail pages
export type TPortofolioDetailProps = React.FC<IPortofolioDetailProps>;

// index portofolio
export type THeaderIndexPortfolio = React.FC<IHeaderIndexPortfolio>;

// card image portofolio
export type TCardImagePortfolioMenu = React.FC<ICardImagePortfolioMenu>;

// portofolio list props
export type TPortofolioListProps = React.FC<IPortofolioListProps>;

export interface IResGetStudio {
  getStudio: IPortofolio;
}

export interface IPortofolio {
  title: string;
  descriptionOne?: string;
}
