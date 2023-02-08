import PortofolioEmpty from "@/components/Molecules/PortofolioEmpty";
import PortofolioSkeleton from "@/components/Molecules/PortofolioSkeleton";
import PortofolioDetailSection from "@/components/Organisms/PortofolioDetailSection";
import Layout from "@/components/Templates/Layout";
import { useEventWorkById } from "@/hooks/events";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PortofolioDetailPage = () => {
  const TYPE = "events";
  const { query } = useRouter();
  const { fetchEventWorkById, data, isLoading } = useEventWorkById();

  useEffect(() => {
    if (query.id) {
      fetchEventWorkById({
        variables: { input: query.id },
      });
    }
  }, [fetchEventWorkById, query]);

  return (
    <Layout title="Digital and Event">
      {(isLoading || data === undefined) && <PortofolioSkeleton type={TYPE} />}
      {(data === null || data?.getEventWorkById === null) && (
        <PortofolioEmpty type={TYPE} />
      )}
      {data && data.getEventWorkById && (
        <PortofolioDetailSection
          type={TYPE}
          currentProject={data.getEventWorkById}
          nextProject={data.getEventWorkNext}
          prevProject={data.getEventWorkPrev}
        />
      )}
    </Layout>
  );
};

export default PortofolioDetailPage;
