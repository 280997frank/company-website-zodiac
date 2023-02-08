import { IResListClients, TPayloadClients } from "@/types/client";
import { gql, useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

const LIST_CLIENTS = gql`
  query listClients($input: ListClientInput!) {
    listClients(input: $input) {
      page
      limit
      clients {
        id
        name
        logoUrl
        isActive
      }
    }
  }
`;

export const useListClients = (payload: TPayloadClients) => {
  const toast = useToast();
  const [fetchListClient, { data, loading, error }] =
    useLazyQuery<IResListClients>(LIST_CLIENTS, {
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
    });

  // useErrorMessage(error);
  return { fetchListClient, data, loading, error };
};
