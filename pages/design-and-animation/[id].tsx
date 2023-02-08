import PortofolioEmpty from "@/components/Molecules/PortofolioEmpty";
import PortofolioSkeleton from "@/components/Molecules/PortofolioSkeleton";
import PortofolioDetailSection from "@/components/Organisms/PortofolioDetailSection";
import Layout from "@/components/Templates/Layout";
import { useStudioWorkById } from "@/hooks/studios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const StudiosDetail = () => {
  const TYPE = "studios";
  const { query } = useRouter();
  const { fetchStudionWorkById, data, isLoading } = useStudioWorkById();

  useEffect(() => {
    if (query.id) {
      fetchStudionWorkById({
        variables: { input: query.id },
      });
    }
  }, [fetchStudionWorkById, query]);

  return (
    <Layout title="Design and Animation">
      {(isLoading || data === undefined) && <PortofolioSkeleton type={TYPE} />}
      {data === null && <PortofolioEmpty type={TYPE} />}
      {data && data.getStudioWorkById && (
        <PortofolioDetailSection
          type={TYPE}
          currentProject={data.getStudioWorkById}
          nextProject={data.getStudioWorkNext}
          prevProject={data.getStudioWorkPrev}
        />
      )}
    </Layout>
  );
};

export default StudiosDetail;
