import ProfileCard from "@/components/Profile/ProfileCard";
import ProfileSettings from "@/components/Profile/ProfileSettings";
import ProfilePassword from "@/components/Profile/ProfilePassword";
import ProfileOrders from "@/components/Profile/ProfileOrders";
import { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState(1);
  console.log(tab);

  return (
    <div className="flex h-[calc(100vh_-_5.5rem)] container mx-auto sm:space-x-10 pt-10 flex-col sm:flex-row space-y-10">
      <ProfileCard setTab={setTab} tab={tab} />
      {tab === 1 && <ProfileSettings />}
      {tab === 2 && <ProfilePassword />}
      {tab === 3 && <ProfileOrders />}
    </div>
  );
};

export default Profile;
