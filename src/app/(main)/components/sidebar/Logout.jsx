import React from "react";
import { icons } from "@/app/utils/icons";
import { signOut } from "next-auth/react";

function Logout() {
  return (
    <button onClick={() => signOut()} id="profile-logout" title="logout :(" >
      {icons.logout}
    </button>
  );
}

export default Logout;
