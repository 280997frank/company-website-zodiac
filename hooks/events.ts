import {
  IResGetEvent,
  IResGetEventWorkById,
  IResListZodiacEventExplolers,
} from "@/types/event";
import { IPortofolioDetail } from "@/types/portofolio";
import { gql, useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { isNil } from "lodash";
import { useState } from "react";
import { useErrorMessage } from ".";

const GET_EVENT_BY_ID = gql`
  query getEventWorkById($input: Int!) {
    getEventWorkById(id: $input) {
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
    getEventWorkPrev(id: $input) {
      id
      title
    }
    getEventWorkNext(id: $input) {
      id
      title
    }
  }
`;

export const useEventWorkById = () => {
  const [fetchEventWorkById, { loading, error, data }] =
    useLazyQuery<IResGetEventWorkById>(GET_EVENT_BY_ID, {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
    });

  useErrorMessage(error);

  return {
    fetchEventWorkById,
    isLoading: loading,
    data,
    error,
  };
};

const LIST_ZODIAC_EVENT_EXPLOLER = gql`
  query getActiveEventWorks($input: ListActiveEventWorkInput!) {
    getActiveEventWorks(input: $input) {
      page
      total
      limit
      totalPage
      eventWorks {
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

export const useEventZodiacExploler = (payload: TPayload) => {
  const toast = useToast();
  const [newData, setNewData] = useState<IPortofolioDetail[]>([]);
  const [fetchListEventZodiacExploler, { data, loading, error }] =
    useLazyQuery<IResListZodiacEventExplolers>(LIST_ZODIAC_EVENT_EXPLOLER, {
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
          !isNil(data.getActiveEventWorks) &&
          !isNil(data.getActiveEventWorks.eventWorks)
        ) {
          if (payload.input.page === 1) {
            const dataJobs = data.getActiveEventWorks.eventWorks;

            setNewData(dataJobs);
          } else {
            const dataJobs = data.getActiveEventWorks.eventWorks;

            setNewData((newData) => [...newData, ...dataJobs]);
          }
        }
      },
    });

  useErrorMessage(error);
  return {
    fetchListEventZodiacExploler,
    data: newData,
    loading,
    error,
    totalPage: !isNil(data) ? data.getActiveEventWorks.totalPage : 1,
  };
};

const GET_EVENT = gql`
  query getVirtualEvent {
    getVirtualEvent {
      title
      descriptionOne
    }
  }
`;

export const useEvent = () => {
  const toast = useToast();
  const [fetchEvent, { loading, data }] = useLazyQuery<IResGetEvent>(
    GET_EVENT,
    {
      notifyOnNetworkStatusChange: true,
      errorPolicy: "all",
      fetchPolicy: "cache-and-network",
      onError: (error) => {
        toast({
          title: error.message,
          position: "bottom",
          isClosable: true,
          status: "error",
        });
      },
    }
  );

  return {
    fetchEvent,
    isLoading: loading,
    data,
  };
};
