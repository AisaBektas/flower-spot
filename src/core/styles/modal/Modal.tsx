import { FC, Fragment, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "../../../assets/icons/close.svg";

interface IModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel?: string;
}

const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
}) => {
  const handleSubmit = useCallback(() => {
    onSubmit && onSubmit();
  }, [onSubmit]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center md:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-screen md:h-auto md:max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center rounded-t justify-center relative"
                >
                  <button
                    className="border-0 hover:opacity-70 transition absolute right-0 md:-right-2 top-20 md:-top-2"
                    onClick={onClose}
                  >
                    <img src={CloseIcon} alt="Close Icon" className="h-6 w-6" />
                  </button>
                  <div className="text-xl text-gray-900 font-ubuntu font-medium pt-20 md:pt-0">
                    {title}
                  </div>
                </Dialog.Title>
                <div className="mt-8">{body}</div>

                <div className="mt-6">
                  {actionLabel && (
                    <button
                      type="submit"
                      className="rounded font-ubuntu shadow-xl hover:opacity-85 transition w-full bg-gradient-to-l h-12 font-medium text-sm text-white from-red-100 via-red-100 to-red-500"
                      onClick={handleSubmit}
                    >
                      {actionLabel}
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
