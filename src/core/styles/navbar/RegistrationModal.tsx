import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRegisterModal } from "../../hooks/useRegisterModal";
import Input from "../forms/Input";
import { useRegister } from "../../../modules/home/hooks/useRegister";
import Modal from "../modal/Modal";

const RegistrationModal = () => {
  const registerModal = useRegisterModal();

  const { mutateAsync: registerUser } = useRegister();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    registerUser(data);
    reset();
  };

  const bodyContent = (
    <div className="flex flex-col gap-3">
      <div className="flex space-x-3">
        <Input
          id="first_name"
          label="First Name"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="last_name"
          label="Last Name"
          register={register}
          errors={errors}
          required
        />
      </div>
      <Input
        id="date_of_birth"
        label="Date of Birth"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email Address"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Create an Account"
      actionLabel="Create Account"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegistrationModal;
