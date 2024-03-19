import UserPlaceholder from "../../../assets/images/user-placeholder.png";
import { useProfileModal } from "../../hooks/useProfileModal";
import { useLogout } from "../../../modules/home/hooks/useLogout";
import { useMyInfo } from "../../../modules/home/providers/MyInfoProvider";
import Modal from "../modal/Modal";

const ProfileModal = () => {
  const profileModal = useProfileModal();

  const { logout } = useLogout();

  const { myInfo, setMyInfo } = useMyInfo();

  const bodyContent = (
    <div className="flex flex-col gap-3 px-10">
      <div className="flex items-center space-x-5 mb-5">
        <img
          src={UserPlaceholder}
          alt="Profile Image"
          className="h-20 w-20 rounded-full"
        />
        <div>
          <p className="text-gray-900 font-ubuntu font-light text-2xl">{`${myInfo?.user?.first_name} ${myInfo?.user?.last_name}`}</p>
          <p className="text-gray text-[13px] font-ubuntu">47 sightings</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-gray text-xs font-ubuntu">First Name</p>
        <p className="text-gray-900 font-light text-lg font-ubuntu">
          {myInfo?.user?.first_name}
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-gray text-xs font-ubuntu">Last Name</p>
        <p className="text-gray-900 font-light font-ubuntu text-lg">
          {myInfo?.user?.last_name}
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-gray text-xs font-ubuntu">Date of Birth</p>
        <p className="text-gray-900 font-light font-ubuntu text-lg">
          May 20, 1980
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-gray text-xs font-ubuntu">Email Address</p>
        <p className="text-gray-900 font-light font-ubuntu text-lg">
          michael.berry@gmail.com
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => {
            profileModal.onClose();
            logout();
            setMyInfo({});
          }}
          className="rounded mt-6 shadow-xl hover:opacity-85 transition bg-gradient-to-l py-4 px-14 font-medium text-sm text-white from-red-100 via-red-100 to-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={profileModal.isOpen}
      onClose={profileModal.onClose}
      body={bodyContent}
    />
  );
};

export default ProfileModal;
