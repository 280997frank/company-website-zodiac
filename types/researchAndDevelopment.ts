export interface IResListRndPost {
  listRndPost: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    rndPost: IRndPost[];
  };
}

export interface IRndPost {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  thumbnail: string;
  categoryId: string;
  headerImage: string;
  RndCategory: RndCategory;
  isActive: Boolean;
  createdAt: string;
  updatedAt: string;
  tags: string;
}

export interface IRndPostById {
  getRndPostById: IRndPost;
}

export interface RndCategory {
  id: string;
  title: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryList {
  listRndCategory: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    rndCategory: RndCategory[];
  };
}

export interface IGetRnd {
  getRnd: {
    title: string;
    descriptionOne: string;
  };
}
