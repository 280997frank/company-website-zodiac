import { useErrorMessage } from "@/hooks";
import { gql, useLazyQuery } from "@apollo/client";
import { CategoryList, IResListRndPost } from "@/types/researchAndDevelopment";

const LIST_RND_POST = gql`
  query listRndPost($input: ListRndPostInput!) {
    listRndPost(input: $input) {
      page
      total
      limit
      totalPage
      rndPost {
        id
        title
        synopsis
        content
        thumbnail
        categoryId
        RndCategory {
          id
          title
          isActive
          createdAt
          updatedAt
        }
        isActive
        createdAt
        updatedAt
      }
    }
  }
`;

const LIST_CATEGORY = gql`
  query listRndCategory($input: ListRndCategoryInput!) {
    listRndCategory(input: $input) {
      page
      total
      limit
      totalPage
      rndCategory {
        id
        title
        isActive
        createdAt
        updatedAt
      }
    }
  }
`;

export const useListRndPost = () => {
  const [fetchListRndPost, { data, loading, error }] =
    useLazyQuery<IResListRndPost>(LIST_RND_POST, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);
  return { fetchListRndPost, data, loading, error };
};

export const useListCategory = () => {
  const [fetchListCategory, { data, loading, error }] =
    useLazyQuery<CategoryList>(LIST_CATEGORY, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);
  return { fetchListCategory, data, loading, error };
};
