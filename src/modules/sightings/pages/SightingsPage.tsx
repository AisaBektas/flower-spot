import Layout from "../../../core/styles/Layout";
import { SearchForm } from "../../../core/styles/forms/SearchForm";
import { FlowerCard } from "../../../core/styles/card/FlowerCard";
import { useFlowers } from "../../flowers/hooks/useFlowers";

export const SightingsPage = () => {
  const { data, isLoading } = useFlowers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="flex justify-center w-3/4 mx-auto pt-10 md:pt-12">
        <SearchForm />
      </div>

      <div className="grid py-10 md:py-12 grid-cols-12 gap-5 relative px-5">
        {data?.flowers.map((flower: IFlower) => (
          <FlowerCard flower={flower} key={flower.id} />
        ))}
      </div>
    </Layout>
  );
};
