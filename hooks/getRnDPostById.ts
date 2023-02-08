import { useErrorMessage } from "@/hooks";
import { gql, useLazyQuery } from "@apollo/client";
import { IGetRnd, IRndPostById } from "@/types/researchAndDevelopment";

const RND_POST_BY_ID = gql`
  query getRndPostById($id: String!) {
    getRndPostById(id: $id) {
      id
      title
      synopsis
      thumbnail
      headerImage
      content
      tags
      categoryId
      RndCategory {
        id
        title
        isActive
      }
      isActive
      createdAt
    }
  }
`;

export const useRndByPostId = () => {
  const [fetchRndPostById, { data, loading, error }] = useLazyQuery<
    IRndPostById,
    { id: string }
  >(RND_POST_BY_ID, {
    notifyOnNetworkStatusChange: true,
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });

  useErrorMessage(error);
  return { fetchRndPostById, data, loading, error };
};

const GET_RND = gql`
  query getRnd {
    getRnd {
      title
      descriptionOne
    }
  }
`;

export const useGetRnd = () => {
  const [fetchRnd, { data, loading, error }] = useLazyQuery<IGetRnd>(GET_RND, {
    notifyOnNetworkStatusChange: true,
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });

  useErrorMessage(error);
  return { fetchRnd, data, loading, error };
};
