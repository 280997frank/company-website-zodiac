import { useErrorMessage } from "@/hooks";
import { IPortofolioDetail } from "@/types/portofolio";
import {
  IGetSolution,
  IResGetSolutionWorkById,
  IResListZodiacSolutions,
} from "@/types/solution";
import { gql, useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { isNil } from "lodash";
import { useState } from "react";

const GET_SOLUTION_BY_ID = gql`
  query getSolutionWorkById($input: Int!) {
    getSolutionWorkById(id: $input) {
      id
      title
      subTitle
      description
      clientName
      projectYear
      banner
      heroVideoUrl
      thumbnails {
        id
        url
      }
    }
    getSolutionWorkPrev(id: $input) {
      id
      title
    }
    getSolutionWorkNext(id: $input) {
      id
      title
    }
  }
`;

export const useSolutionsWorkById = () => {
  const [fetchSolutionWorkById, { loading, error, data }] =
    useLazyQuery<IResGetSolutionWorkById>(GET_SOLUTION_BY_ID, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);

  return {
    fetchSolutionWorkById,
    isLoading: loading,
    data,
  };
};

const LIST_ZODIAC_SOLUTIONS = gql`
  query getActiveSolutionWorks($input: ListActiveSolutionWorkInput!) {
    getActiveSolutionWorks(input: $input) {
      page
      total
      limit
      totalPage
      solutionWorks {
        id
        title
        banner
        subTitle
        description
        projectYear
        sequence
        clientName
        category
        thumbnails {
          id
          url
        }
        isActive
        createdAt
        updatedAt
      }
    }
  }
`;

interface TPayload {
  input: {
    page: number;
    limit: number;
  };
}

export const useZodiacSolutions = (payload: TPayload) => {
  const toast = useToast();
  const [newData, setNewData] = useState<IPortofolioDetail[]>([]);
  const [fetchListZodiacSolutions, { data, loading, error }] =
    useLazyQuery<IResListZodiacSolutions>(LIST_ZODIAC_SOLUTIONS, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
      variables: payload,
      onError: (error) => {
        toast({
          title: error.message,
          position: "bottom",
          isClosable: true,
          status: "error",
        });
      },
      onCompleted: (data) => {
        if (
          !isNil(data) &&
          !isNil(data.getActiveSolutionWorks) &&
          !isNil(data.getActiveSolutionWorks.solutionWorks)
        ) {
          if (payload.input.page === 1) {
            const dataJobs = data.getActiveSolutionWorks.solutionWorks;

            setNewData(dataJobs);
          } else {
            const dataJobs = data.getActiveSolutionWorks.solutionWorks;

            setNewData((newData) => [...newData, ...dataJobs]);
          }
        }
      },
    });

  useErrorMessage(error);
  return {
    fetchListZodiacSolutions,
    data: newData,
    loading,
    error,
    totalPage: !isNil(data) ? data.getActiveSolutionWorks.totalPage : 1,
  };
};

const GET_SOLUTION = gql`
  query getSolution {
    getSolution {
      title
      descriptionOne
    }
  }
`;

export const useGetSolution = () => {
  const [fetchGetSolution, { loading, error, data }] =
    useLazyQuery<IGetSolution>(GET_SOLUTION, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);

  return {
    fetchGetSolution,
    isLoading: loading,
    data,
  };
};
