import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoginModal } from "../../hooks/useLoginModal";
import Input from "../forms/Input";
import { useLogin } from "../../../modules/home/hooks/useLogin";
import { useGetMyInfo } from "../../../modules/home/hooks/useGetMyInfo";
import { useMyInfo } from "../../../modules/home/providers/MyInfoProvider";
import Modal from "../modal/Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const { setMyInfo } = useMyInfo();

  const { mutateAsync: login } = useLogin();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { data: myInfoData, refetch } = useGetMyInfo();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await login(data);
    await refetch();
    setMyInfo(myInfoData);
    reset();
  };

  useEffect(() => {
    if (myInfoData) {
      setMyInfo(myInfoData);
    }
  }, [myInfoData, setMyInfo]);

  const bodyContent = (
    <div className="flex flex-col gap-3">
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
      isOpen={loginModal.isOpen}
      title="Welcome Back"
      actionLabel="Login to your Account"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default LoginModal;
