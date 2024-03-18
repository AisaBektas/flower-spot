import Layout from "../../../core/styles/Layout";
import { SearchForm } from "../../../core/styles/forms/SearchForm";
import { useFlowers } from "../../flowers/hooks/useFlowers";
import { FlowerCard } from "../../../core/styles/card/FlowerCard";

export const HomePage = () => {
  const { data, isLoading } = useFlowers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="bg-hero flex flex-col bg-cover min-h-[500px] bg-center justify-center items-center">
        <div className="px-8 lg:px-0">
          <p className="leading-10 font-light font-ubuntu lg:font-montserrat lg:font-semibold text-4xl text-white mb-2 text-center">
            Discover flowers around you
          </p>
          <p className="text-white font-ubuntu font-light lg:font-normal text-[17px] text-center">
            Explore between more than 8.427 sightings
          </p>
          <div className="mt-10 mx-6">
            <SearchForm />
          </div>
        </div>
      </div>
      <div className="grid py-20 grid-cols-12 gap-5 relative px-5">
        {data?.flowers.map((flower: IFlower) => (
          <FlowerCard flower={flower} key={flower.id} />
        ))}
      </div>
    </Layout>
  );
};
