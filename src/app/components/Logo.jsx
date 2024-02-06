import React from "react";
import icon from "@/app/favicon.ico";
import Link from "next/link"

function Logo() {
  return (
    <Link href="/" id="logo-container">
      <img id="logo-img" src={icon.src} alt="" />
      <div id="logo-text">
        <div id="logo-title" >
          <div id="logo-light">pay</div>
          <div id="logo-bold">peek</div>
        </div>
        <div id="logo-small">peek your payments?</div>
      </div>
    </Link>
  );
}

export default Logo;
