import React from "react";
import { icons } from "../../utils/icons";

function Logout() {
  return (
    <button id="profile-logout" title="logout :(" >
      {icons.logout}
    </button>
  );
}

export default Logout;
