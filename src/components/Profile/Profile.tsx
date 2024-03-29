import ProfileHeader from "./ProfileHeader";
import useProfile, { ProfileTab } from "@/Hooks/ProfilePage/useProfile";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";
import { IUser } from "@/UserInterfaces";
interface IProfileTabWrapper {
  user: IUser;
}
interface IProfilePageProps {
  user: IUser;
  handleProfileTab: (tab: ProfileTab) => void;
  profileTab: ProfileTab;
}
const ProfileTabWrapper: React.FC<IProfileTabWrapper> = ({ user }) => {
  return (
    <>
      <ProfilePosts id={user.userProfile.id} />
    </>
  );
};
const ProfilePage: React.FC<IProfilePageProps> = ({
  user,
  handleProfileTab,
  profileTab,
}) => {
  if (!user) return <div>Loading</div>;
  if (!user.userProfile) return <div>Loading</div>;
  return (
    <div className="h-full ml-64">
      <section className="h-full w-full">
        <main className="p-5 mx-auto w-5/6">
          <ProfileHeader user={user} />
          <ProfileTabs
            handleProfileTab={handleProfileTab}
            profileTab={profileTab}
          />
          <ProfileTabWrapper user={user} />
        </main>
      </section>
    </div>
  );
};
export default ProfilePage;
