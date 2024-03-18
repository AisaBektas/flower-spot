import Layout from "../../../core/styles/Layout";
import { useFlowers } from "../../flowers/hooks/useFlowers";
import { FlowerCard } from "../../../core/styles/card/FlowerCard";

export const FavoritesPage = () => {
  const { data, isLoading } = useFlowers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="grid py-10 md:py-12 grid-cols-12 gap-5 relative px-5">
        {data?.flowers.map((flower: IFlower) => (
          <FlowerCard flower={flower} key={flower.id} />
        ))}
      </div>
    </Layout>
  );
};
