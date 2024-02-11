"use client";
import React, { useState } from "react";
import { icons } from "@/app/utils/icons";
import { signOut } from "next-auth/react";

function Logout() {
  let [loading, setLoading] = useState(false);
  return (
    <button
      onClick={() => {
        setLoading(true);
        signOut({ callbackUrl: "/login" });
      }}
      id="profile-logout"
      title="logout :("
    >
      {loading ? (
        <span id="sidebar-loading-icon">{icons.loading}</span>
      ) : (
        icons.logout
      )}
    </button>
  );
}

export default Logout;
