"use client";
import React, { useEffect, useState } from "react";
import Balance from "./Balance";
import Invoices from "./Invoices";
import Pending from "./Pending";
import { fetchDataPOST } from "@/app/utils/post";
import { useInvoicesData } from "../store/InvoicesDataProvider";
import { useSession } from "next-auth/react";
import { getData } from "./serveraction";

function GridContainer() {
  const { data: session, status } = useSession();
  const { updateData } = useInvoicesData();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (status == "authenticated") {
      async function fetchInvoices() {
        setLoading(true);
        const res = await fetchDataPOST("/api/getuserdata", {
          name: session.user.name,
          email: session.user.email,
        });
        updateData(res.data);

        setLoading(false);
      }
      fetchInvoices();
    }
  }, [session]);
  return (
    <>
      {isLoading ? (
        <div>isLoading</div>
      ) : (
        <div id="invoices-grid-container">
          <div id="top-grid">
            <Balance></Balance>
            <Pending></Pending>
          </div>
          <Invoices></Invoices>
        </div>
      )}
    </>
  );
}

export default GridContainer;
