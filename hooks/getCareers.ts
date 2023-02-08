import { useErrorMessage } from "@/hooks";
import { IResListDesignations, IResMainDesDesignations } from "@/types/career";
import { gql, useLazyQuery } from "@apollo/client";

const MAIN_DESC_DESIGNATIONS = gql`
  query getCareer {
    getCareer {
      id
      title
      description
      description2
    }
  }
`;
const LIST_DESIGNATIONS = gql`
  query listDesignations($input: ListDesignationInput!) {
    listDesignations(input: $input) {
      page
      total
      totalPage
      designations {
        id
        name
        imageUrl
        description
        totalJobOpening
      }
    }
  }
`;

export const useMainDescDesignation = () => {
  const [fetchMainDesDesignation, { data, loading, error }] =
    useLazyQuery<IResMainDesDesignations>(MAIN_DESC_DESIGNATIONS, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);
  return { fetchMainDesDesignation, data, loading, error };
};
export const useListDesignation = () => {
  const [fetchListDesignation, { data, loading, error }] =
    useLazyQuery<IResListDesignations>(LIST_DESIGNATIONS, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);
  return { fetchListDesignation, data, loading, error };
};
