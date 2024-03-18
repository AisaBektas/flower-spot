import { FC, useState } from "react";
import StarIcon from "../../../assets/icons/star.svg";
import clsx from "clsx";
import { useMyInfo } from "../../../modules/home/providers/MyInfoProvider";

interface IFlowerCardProps {
  flower: IFlower;
}

export const FlowerCard: FC<IFlowerCardProps> = ({ flower }) => {
  const [favoriteFlower, setFavoriteFlower] = useState(false);
  const { myInfo } = useMyInfo();

  const toggleFavororiteFlower = () => {
    setFavoriteFlower(!favoriteFlower);
  };
  return (
    <div className="rounded relative h-[230px] md:h-[290px] lg:h-[350px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <div className="absolute h-full w-full">
        <img
          src={flower.profile_picture}
          alt={flower.latin_name}
          className="w-full h-full rounded"
        />
      </div>
      <div className="absolute bg-gradient-to-b rounded from-black-100 via-black-100 to-black/70 w-full h-full"></div>
      <div className="absolute flex flex-col h-full w-full justify-between p-5 ">
        <div className="flex justify-end">
          {myInfo?.user && (
            <button
              onClick={toggleFavororiteFlower}
              className={clsx(
                "rounded-full flex items-center justify-center h-[30px] w-[30px]",
                favoriteFlower
                  ? "bg-gradient-to-l from-red-100 via-red-100 to-red-500"
                  : "bg-white"
              )}
            >
              <img
                src={StarIcon}
                alt="Star Icon"
                title="Star"
                className={clsx(favoriteFlower && "brightness-0 invert")}
              />
            </button>
          )}
        </div>

        <div className="flex items-center flex-col">
          <p className="text-base lg:text-xl text-white font-ubuntu">
            {flower.name}
          </p>
          <p className="text-white text-xxs md:text-xs italic font-ubuntu">
            {flower.latin_name}
          </p>
          <div
            className={clsx(
              "rounded-[20px] px-2 md:px-5 py-1 md:py-1.5 lg:py-2 mt-6",
              favoriteFlower
                ? "bg-gradient-to-l from-red-100 via-red-100 to-red-500"
                : "bg-black/50"
            )}
          >
            <p className="text-white text-xxs md:text-xs font-ubuntu">
              {flower.sightings} sightings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
