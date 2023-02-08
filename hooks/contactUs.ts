import { useLazyQuery, gql } from "@apollo/client";

import { useErrorMessage } from "@/hooks";

export enum LocationOrderBy {
  CITY_NAME = "CITY_NAME",
  CREATED_AT = "CREATED_AT",
  UPDATED_AT = "UPDATED_AT",
  SEQUENCE = "SEQUENCE",
}

export enum SortByType {
  ASC = "ASC",
  DESC = "DESC",
}

interface UseLocationsParams {
  page: number;
  limit: number;
  search?: {
    keyword: string;
  };
  filter?: {
    isActive: boolean;
  };
  order?: {
    orderBy: LocationOrderBy;
    sortBy: SortByType;
  };
}

export interface GetLocationsResponse {
  listLocations: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
    locations: {
      id: string;
      cityName: string;
      address: string;
      phoneNumber: string;
      email: string;
      image: string;
      urlMap: string;
      facebook: string;
      instagram: string;
      youtube: string;
      linkedin: string;
      wechat: string;
      whatsapp: string;
      intercom: string;
      facebookActive: boolean;
      instagramActive: boolean;
      youtubeActive: boolean;
      linkedinActive: boolean;
      wechatActive: boolean;
      whatsappActive: boolean;
      intercomActive: boolean;
      sequence: number;
    }[];
  };
}

const GET_LOCATIONS = gql`
  query getLocations($input: ListLocationInput!) {
    listLocations(input: $input) {
      page
      limit
      total
      totalPage
      locations {
        id
        cityName
        address
        phoneNumber
        email
        image
        urlMap
        facebook
        instagram
        youtube
        linkedin
        wechat
        whatsapp
        intercom
        facebookActive
        instagramActive
        youtubeActive
        linkedinActive
        wechatActive
        whatsappActive
        intercomActive
        sequence
      }
    }
  }
`;

export function useLocations() {
  const [fetchLocations, { data, loading, error }] = useLazyQuery<
    GetLocationsResponse,
    { input: UseLocationsParams }
  >(GET_LOCATIONS, {
    notifyOnNetworkStatusChange: true,
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });

  useErrorMessage(error);

  return { fetchLocations, data, loading };
}
