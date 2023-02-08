import PortofolioEmpty from "@/components/Molecules/PortofolioEmpty";
import PortofolioSkeleton from "@/components/Molecules/PortofolioSkeleton";
import PortofolioDetailSection from "@/components/Organisms/PortofolioDetailSection";
import Layout from "@/components/Templates/Layout";
import { useSolutionsWorkById } from "@/hooks/solutions";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SolutionDetail = () => {
  const TYPE = "solutions";
  const { query } = useRouter();
  const { fetchSolutionWorkById, data, isLoading } = useSolutionsWorkById();

  useEffect(() => {
    if (query.id) {
      fetchSolutionWorkById({
        variables: { input: query.id },
      });
    }
  }, [fetchSolutionWorkById, query]);

  return (
    <Layout title="Interactive and Multimedia">
      {(isLoading || data === undefined) && <PortofolioSkeleton type={TYPE} />}
      {data === null && <PortofolioEmpty type={TYPE} />}
      {data && data.getSolutionWorkById && (
        <PortofolioDetailSection
          type={TYPE}
          currentProject={data.getSolutionWorkById}
          nextProject={data.getSolutionWorkNext}
          prevProject={data.getSolutionWorkPrev}
        />
      )}
    </Layout>
  );
};

export default SolutionDetail;
