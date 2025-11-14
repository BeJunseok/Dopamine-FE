import { Profile } from "@/assets/svgs/my";

interface ProfileHeaderProps {
  name: string;
  email: string;
  // profileImage 제거 (사용하지 않기 때문)
}

const ProfileHeader = ({ name, email }: ProfileHeaderProps) => {
  return (
    <div className="mt-[48px] flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <Profile className="w-12 h-12 rounded-full border" />
        <div>
          <p className="font-reg20 text-darkgrey05">{name}</p>
          <p className="font-reg14 text-darkgrey01">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
