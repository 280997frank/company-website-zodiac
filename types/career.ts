export interface IDesignations {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  totalJobOpening: number;
}

export interface IResListDesignations {
  listDesignations: {
    page: number;
    total: number;
    totalPage: number;
    designations: IDesignations[];
  };
}
export interface IResMainDesDesignations {
  getCareer: {
    title: string;
    description: string;
    description2: string;
  };
}

enum JobType {
  "FULL_TIME",
  "PART_TIME",
  "FREELANCE",
}

export interface ILocation {
  id: String;
  cityName: String;
  address: String;
  phoneNumber: String;
  email: String;
  image: String;
  latitude: Number;
  longitude: Number;
  facebook: String;
  instagram: String;
  youtube: String;
  linkedin: String;
  wechat: String;
  whatsapp: String;
  intercom: String;
  facebookActive: Boolean;
  instagramActive: Boolean;
  youtubeActive: Boolean;
  linkedinActive: Boolean;
  wechatActive: Boolean;
  whatsappActive: Boolean;
  intercomActive: Boolean;
  isActive: Boolean;
  createdAt: String;
  updatedAt: String;
}

export interface IDesignation {
  id: String;
  name: String;
  description: String;
  imageUrl: String;
  isActive: Boolean;
  createdAt: String;
  updatedAt: String;
  totalJobOpening: Number;
}

export interface IJobOpening {
  id: String;
  title: String;
  jobType: JobType;
  applyUrl: String;
  description: string;
  location: ILocation;
  designation: IDesignation;
  isActive: Boolean;
  createdAt: String;
  updatedAt: String;
}

export interface IReListJobOpenings {
  listJobOpenings: {
    page: number;
    total: number;
    totalPage: number;
    jobOpenings: IJobOpening[];
  };
}
export interface IReGetDesignationById {
  getDesignationById: {
    id: String;
    name: String;
    description: String;
    imageUrl: String;
    isActive: Boolean;
    createdAt: String;
    updatedAt: String;
    totalJobOpening: Number;
  };
}
export interface IReLocations {
  listLocations: {
    page: number;
    total: number;
    totalPage: number;
    locations: ILocation[];
  };
}
