import { useForm } from "react-hook-form";
import { FC } from "react";
import SearchIcon from "../../../assets/icons/search.svg";

export const SearchForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm();

  const send = async (data: any) => {
    console.log("search data", data);
  };

  return (
    <form onSubmit={handleSubmit(send)} className="w-full lg:w-auto">
      <div className="flex bg-white items-center p-5 rounded w-full lg:w-[600px] h-[56px] lg:h-[70px] justify-between">
        <input
          {...register("search")}
          className="rounded font-ubuntu font-light h-full w-full bg-transparent text-sm lg:text-lg text-gray placeholder:text-gray focus:border-none focus:outline-none focus:ring-0"
          placeholder="Looking for something specific?"
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          title="Search"
          className="h-[20px] w-[20px]"
        />
      </div>
    </form>
  );
};
