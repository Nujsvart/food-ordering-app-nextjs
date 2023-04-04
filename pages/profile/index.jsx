import ProfileCard from "@/components/Profile/ProfileCard";
import ProfileSettings from "@/components/Profile/ProfileSettings";
import ProfilePassword from "@/components/Profile/ProfilePassword";
import { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState(1);
  console.log(tab);

  return (
    <div className="flex h-[calc(100vh_-_5.5rem)] container mx-auto space-x-10 pt-10">
      <ProfileCard setTab={setTab} tab={tab} />
      {tab === 1 && <ProfileSettings />}
      {tab === 2 && <ProfilePassword />}
    </div>
  );
};

export default Profile;
