export interface IClients {
  id: string;
  name: string;
  logoUrl: string;
}

export interface IResListClients {
  listClients: {
    page: number;
    limit: number;
    order: {
      orderBy: "NAME" | "CREATED_AT" | "UPDATED_AT";
      sortBy: "ASC" | "DESC";
    };
    filter: {
      isActive: boolean;
    };
    clients: IClients[];
  };
}

export interface TPayloadClients {
  input: {
    page: number;
    limit: number;
    filter: {
      isActive: boolean;
    };
    order: {
      orderBy: "NAME" | "CREATED_AT" | "UPDATED_AT";
      sortBy: "ASC" | "DESC";
    };
  };
}
