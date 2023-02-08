import { useErrorMessage } from "@/hooks";
import {
  IReGetDesignationById,
  IReListJobOpenings,
  IReLocations,
} from "@/types/career";
import { gql, useLazyQuery } from "@apollo/client";

const LIST_JOB_OPENINGS = gql`
  query listJobOpenings($input: ListJobOpeningInput!) {
    listJobOpenings(input: $input) {
      page
      limit
      total
      totalPage
      jobOpenings {
        id
        title
        jobType
        applyUrl
        description
        location {
          cityName
        }
        isActive
      }
    }
  }
`;
const GET_DESIGNATIONS_BY_ID = gql`
  query getDesignationById($id: String!) {
    getDesignationById(id: $id) {
      id
      name
      description
      imageUrl
      isActive
      createdAt
      updatedAt
      totalJobOpening
    }
  }
`;
const LIST_LOCATIONS = gql`
  query listLocations($input: ListLocationInput!) {
    listLocations(input: $input) {
      page
      limit
      total
      totalPage
      locations {
        id
        cityName
      }
    }
  }
`;

export const useListJobOpenings = () => {
  const [fetchListJobOpenings, { data, loading, error }] =
    useLazyQuery<IReListJobOpenings>(LIST_JOB_OPENINGS, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);
  return { fetchListJobOpenings, data, loading, error };
};
export const useGetDesignationById = () => {
  const [fetchGetDesignationById, { data, loading, error }] =
    useLazyQuery<IReGetDesignationById>(GET_DESIGNATIONS_BY_ID, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);
  return { fetchGetDesignationById, data, loading, error };
};
export const useListLocations = () => {
  const [fetchListLocations, { data, loading, error }] =
    useLazyQuery<IReLocations>(LIST_LOCATIONS, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);
  return { fetchListLocations, data, loading, error };
};
