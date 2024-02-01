"use client"
import React, { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  function handleRedirect() {
    redirect("/invoices")
  }
  useEffect(( )=> {
    handleRedirect();
  }, [])
  return <div>test</div>;
}
