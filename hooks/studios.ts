import { useErrorMessage } from "@/hooks";
import { IPortofolioDetail, IResGetStudio } from "@/types/portofolio";
import { IResGetStudioWorkById, IResListZodiacStudio } from "@/types/studios";
import { gql, useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { isNil } from "lodash";
import { useState } from "react";

const GET_STUDIO_BY_ID = gql`
  query getStudioWorkById($input: Int!) {
    getStudioWorkById(id: $input) {
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
    getStudioWorkPrev(id: $input) {
      id
      title
    }
    getStudioWorkNext(id: $input) {
      id
      title
    }
  }
`;

export const useStudioWorkById = () => {
  const [fetchStudionWorkById, { loading, error, data }] =
    useLazyQuery<IResGetStudioWorkById>(GET_STUDIO_BY_ID, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);

  return {
    fetchStudionWorkById,
    isLoading: loading,
    data,
  };
};

const LIST_ZODIAC_STUDIO = gql`
  query getActiveStudioWorks($input: ListActiveStudioWorkInput!) {
    getActiveStudioWorks(input: $input) {
      page
      total
      limit
      totalPage
      studioWorks {
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
export const useZodiacStudio = (payload: TPayload) => {
  const toast = useToast();
  const [newData, setNewData] = useState<IPortofolioDetail[]>([]);
  const [fetchListZodiacStudio, { data, loading, error }] =
    useLazyQuery<IResListZodiacStudio>(LIST_ZODIAC_STUDIO, {
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
          !isNil(data.getActiveStudioWorks) &&
          !isNil(data.getActiveStudioWorks.studioWorks)
        ) {
          if (payload.input.page === 1) {
            const dataJobs = data.getActiveStudioWorks.studioWorks;

            setNewData(dataJobs);
          } else {
            const dataJobs = data.getActiveStudioWorks.studioWorks;

            setNewData((newData) => [...newData, ...dataJobs]);
          }
        }
      },
    });

  useErrorMessage(error);
  return {
    fetchListZodiacStudio,
    data: newData,
    loading,
    error,
    totalPage: !isNil(data) ? data.getActiveStudioWorks.totalPage : 1,
  };
};

const GET_STUDIO = gql`
  query getStudio {
    getStudio {
      title
      descriptionOne
    }
  }
`;

export const useStudio = () => {
  const [fetchStudio, { loading, data, error }] = useLazyQuery<IResGetStudio>(
    GET_STUDIO,
    {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    }
  );

  useErrorMessage(error);

  return {
    fetchStudio,
    isLoading: loading,
    data,
  };
};
