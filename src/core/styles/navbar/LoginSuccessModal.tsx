import { useLoginSuccessModal } from "../../hooks/useLoginSuccessModal";
import { useProfileModal } from "../../hooks/useProfileModal";
import Modal from "../modal/Modal";

const LoginSuccessModal = () => {
  const loginSuccessModal = useLoginSuccessModal();
  const profileModal = useProfileModal();

  const bodyContent = (
    <div className="flex flex-col gap-3">
      <p className="text-lg text-gray-900 font-medium text-center">
        Congratulations! You have successfully logged into FlowrSpot!
      </p>
      <div className="flex space-x-5">
        <button
          className="rounded mt-6 shadow-xl hover:opacity-85 transition w-full bg-gradient-to-l py-4 font-medium text-sm text-white from-red-100 via-red-100 to-red-500"
          onClick={() => {
            loginSuccessModal.onClose();
            profileModal.onOpen();
          }}
        >
          Profile
        </button>
        <button
          className="rounded mt-6 shadow-xl hover:opacity-85 transition w-full bg-gradient-to-l py-4 font-medium text-sm text-white from-red-100 via-red-100 to-red-500"
          onClick={loginSuccessModal.onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={loginSuccessModal.isOpen}
      title="Welcome Back"
      onClose={loginSuccessModal.onClose}
      body={bodyContent}
    />
  );
};

export default LoginSuccessModal;
