import { IPortofolioDetail } from "@/types/portofolio";
import { gql, useLazyQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";

const GET_PORTOFOLIO_DETAIL = gql`
  query {
    getPortofolio {
      year
      clientName
      projectTitle
      shortDesc
      desc
    }
  }
`;

export const usePortofolioDetail = () => {
  const toast = useToast();
  const [fetchPortofolioDetail, { loading, error, data }] =
    useLazyQuery<IPortofolioDetail>(GET_PORTOFOLIO_DETAIL, {
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

  return {
    fetchPortofolioDetail,
    loading,
    data,
    error,
  };
};
