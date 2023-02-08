export interface TPayload {
  input: {
    page: number;
    limit: number;
    order: {
      orderBy: "SEQUENCE" | "TITLE" | "NAME" | "CREATED_AT" | "UPDATED_AT";
      sortBy: "ASC" | "DESC";
    };
    filter?: {
      isActive: boolean;
    };
  };
}

export interface TPayloadWhatWedo {
  listWHatWeDoItemInput: TPayload;
}
export interface TPayloadOurProcess {
  listOurProcessInput: TPayload;
}
export interface TPayloadMeetTheTeam {
  listOurTeamMemberInput: TPayload;
}

export interface IAboutUSResponse {
  getAbout: {
    title: string;
    description: string;
    imageUrl: string;
    videoUrl: string;
  };
}

export interface IWhatWeDoResponse {
  getWhatWeDo: {
    title: string;
    description: string;
  };
}

export interface IOurProcessResponse {
  getOurProcessDescription: {
    description: string;
  };
}
export interface IOurTeamResponse {
  getOurTeam: {
    title: string;
    description: string;
  };
}
//list
export interface datawhatWeDo {
  id: string;
  title: string;
  description: string;
  image: string;
  sequence: number;
}

export interface dataOurProcess {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  sequence: number;
  isActive: boolean;
}

export interface dataTeamMember {
  id: string;
  name: string;
  designation: string;
  subDesignation: string;
  linkedInUrl: string;
  imageUrl: string;
  // description: string;
  sequence: number;
  mainImageUrl: string;
  isActive: boolean;
}
export interface IListWhatWeDoResponse {
  listWhatWeDoItems: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    whatWeDoItem: datawhatWeDo[];
  };
}
export interface IListOurProcessResponse {
  listOurProcesses: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    ourProcesses: dataOurProcess[];
  };
}

export interface IListOurTeamMemmberResponse {
  listOurTeamMembers: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    ourTeamMembers: dataTeamMember[];
  };
}
