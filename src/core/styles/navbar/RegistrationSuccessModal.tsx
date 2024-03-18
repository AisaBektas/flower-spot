import { useRegisterSuccessModal } from "../../hooks/useRegisterSuccessModal";
import { useLoginModal } from "../../hooks/useLoginModal";
import Modal from "../modal/Modal";

const RegistrationSuccessModal = () => {
  const registerSuccessModal = useRegisterSuccessModal();
  const loginModal = useLoginModal();

  const bodyContent = (
    <div className="flex flex-col gap-3">
      <p className="text-lg text-gray-900 font-medium text-center">
        Congratulations! You have successfully signed up for FlowrSpot!
      </p>
      <div className="flex space-x-5">
        <button
          className="rounded mt-6 shadow-xl hover:opacity-85 transition w-full bg-gradient-to-l py-4 font-medium text-sm text-white from-red-100 via-red-100 to-red-500"
          onClick={() => {
            registerSuccessModal.onClose();
            loginModal.onOpen();
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={registerSuccessModal.isOpen}
      title="Create an Account"
      onClose={registerSuccessModal.onClose}
      body={bodyContent}
    />
  );
};

export default RegistrationSuccessModal;
