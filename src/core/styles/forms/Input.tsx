import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<IInputProps> = ({
  id,
  label,
  type = "text",
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full px-4 h-12 text-[13px] pt-5 font-light bg-gray-100 border-2 rounded outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-gray-900 ${
          errors[id] ? "border-rose-500" : "border-gray-200"
        } ${errors[id] ? "focus:border-rose-500" : "focus:border-gray-900"}`}
      />
      <label
        className={`absolute font-ubuntu text-xxs duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:slace-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-zinc-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
