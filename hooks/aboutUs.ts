import { useLazyQuery, gql } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import isNil from "lodash/isNil";
import { useState } from "react";
import {
  IAboutUSResponse,
  IWhatWeDoResponse,
  // TPayloadWhatWedo,
  // TPayloadOurProcess,
  // TPayloadMeetTheTeam,
  IListWhatWeDoResponse,
  IOurProcessResponse,
  IOurTeamResponse,
  IListOurProcessResponse,
  IListOurTeamMemmberResponse,
  TPayload,
  datawhatWeDo,
  dataTeamMember,
  dataOurProcess,
} from "types/aboutUs";

const GET_ABOUT = gql`
  query {
    getAbout {
      title
      description
      imageUrl
      videoUrl
    }
  }
`;
const GET_WHATWEDO = gql`
  query {
    getWhatWeDo {
      title
      description
    }
  }
`;

const GET_OURPROCESS = gql`
  query {
    getOurProcessDescription {
      description
    }
  }
`;
const GET_MEETTHETEAM = gql`
  query {
    getOurTeam {
      title
      description
    }
  }
`;

const GET_LISTWHATWEDO = gql`
  query listWhatWeDoItems($input: ListWhatWeDoItemInput!) {
    listWhatWeDoItems(input: $input) {
      page
      limit
      total
      totalPage
      whatWeDoItem {
        id
        title
        description
        image
        sequence
      }
    }
  }
`;

const GET_LISTOURPROCESS = gql`
  query listOurProcesses($input: ListOurProcessInput!) {
    listOurProcesses(input: $input) {
      page
      limit
      total
      totalPage
      ourProcesses {
        id
        title
        subtitle
        description
        imageUrl
        sequence
        isActive
      }
    }
  }
`;

const GET_OURTEAMMEMBERS = gql`
  query listOurTeamMembers($input: ListOurTeamMemberInput!) {
    listOurTeamMembers(input: $input) {
      page
      limit
      total
      totalPage
      ourTeamMembers {
        id
        name
        designation
        subDesignation
        linkedInUrl
        imageUrl
        sequence
        isActive
      }
    }
  }
`;

export const useAboutUs = () => {
  const toast = useToast();
  const [fetchGetAboutUS, { loading, error, data }] =
    useLazyQuery<IAboutUSResponse>(GET_ABOUT, {
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
    });

  // useErrorMessage(error);

  return {
    fetchGetAboutUS,
    loading,
    data,
    error,
  };
};

export const useOurProcess = () => {
  const toast = useToast();
  const [fetchGetOurProcess, { loading, error, data }] =
    useLazyQuery<IOurProcessResponse>(GET_OURPROCESS, {
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
    });

  // useErrorMessage(error);

  return {
    fetchGetOurProcess,
    loading,
    data,
    error,
  };
};

export const useWhatWeDo = () => {
  const toast = useToast();
  const [fetchGetWhatWeDo, { loading, error, data }] =
    useLazyQuery<IWhatWeDoResponse>(GET_WHATWEDO, {
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
    });

  // useErrorMessage(error);

  return {
    fetchGetWhatWeDo,
    loading,
    data,
    error,
  };
};

export const useMeetTheTeam = () => {
  const toast = useToast();
  const [fetchGetMeetTheTeam, { loading, error, data }] =
    useLazyQuery<IOurTeamResponse>(GET_MEETTHETEAM, {
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
    });

  // useErrorMessage(error);

  return {
    fetchGetMeetTheTeam,
    loading,
    data,
    error,
  };
};

//list what we do
export const useListWhatWeDo = (payload: TPayload) => {
  const toast = useToast();
  const [newData, setNewData] = useState<datawhatWeDo[]>([]);
  const [fetchWhatWeDo, { loading, data }] =
    useLazyQuery<IListWhatWeDoResponse>(GET_LISTWHATWEDO, {
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
          !isNil(data.listWhatWeDoItems) &&
          !isNil(data.listWhatWeDoItems.whatWeDoItem)
        ) {
          if (payload.input.page === 1) {
            setNewData(data.listWhatWeDoItems.whatWeDoItem);
          } else {
            setNewData((newData) => [
              ...newData,
              ...data.listWhatWeDoItems.whatWeDoItem,
            ]);
          }
        }
      },
    });

  // useErrorMessage(error);

  return {
    fetchWhatWeDo,
    loading,
    responseListWhatWeDo: newData,
    totalPageWhatWeDo: data?.listWhatWeDoItems.totalPage,
  };
};

export const useListOurProcess = (payload: TPayload) => {
  const toast = useToast();
  const [newData, setNewData] = useState<dataOurProcess[]>([]);
  const [fetchgetListOurProcess, { loading, error, data }] =
    useLazyQuery<IListOurProcessResponse>(GET_LISTOURPROCESS, {
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
          !isNil(data.listOurProcesses) &&
          !isNil(data.listOurProcesses.ourProcesses)
        ) {
          if (payload.input.page === 1) {
            setNewData(data.listOurProcesses.ourProcesses);
          } else {
            setNewData((newData) => [
              ...newData,
              ...data.listOurProcesses.ourProcesses,
            ]);
          }
        }
      },
    });

  // useErrorMessage(error);

  return {
    fetchgetListOurProcess,
    loading,
    // data,
    error,
    responseListOurProcess: newData,
    totalPageOurProcess: data?.listOurProcesses.totalPage,
  };
};

export const useListMeetTheTeam = (payload: TPayload) => {
  const toast = useToast();
  const [newData, setNewData] = useState<dataTeamMember[]>([]);
  const [fetchgetListMeetheTeam, { loading, error, data }] =
    useLazyQuery<IListOurTeamMemmberResponse>(GET_OURTEAMMEMBERS, {
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
          !isNil(data.listOurTeamMembers) &&
          !isNil(data.listOurTeamMembers.ourTeamMembers)
        ) {
          if (payload.input.page === 1) {
            setNewData(data.listOurTeamMembers.ourTeamMembers);
          } else {
            setNewData((newData) => [
              ...newData,
              ...data.listOurTeamMembers.ourTeamMembers,
            ]);
          }
        }
      },
    });

  // useErrorMessage(error);

  return {
    fetchgetListMeetheTeam,
    loading,
    error,
    responseListTeamMembers: newData,
    totalPageTeamMembers: data?.listOurTeamMembers.totalPage,
  };
};
