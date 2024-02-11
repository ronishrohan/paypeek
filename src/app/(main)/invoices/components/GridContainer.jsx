"use client";
import React, { useEffect, useState } from "react";
import Balance from "./Balance";
import Invoices from "./Invoices";
import Pending from "./Pending";
import { fetchDataPOST } from "@/app/utils/post";
import { useInvoicesData } from "../store/InvoicesDataProvider";
import { useSession } from "next-auth/react";

function GridContainer() {
  const session = useSession();
  const { updateData } = useInvoicesData();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchInvoices() {
      setLoading(true);
      const res = await fetchDataPOST("/api/getuserdata", {
        name: session.data.user.name,
        email: session.data.user.email,
      });
      updateData(res.data);
      setLoading(false);
    }
    if (session.data?.user) {
      fetchInvoices();
    }
  }, [session.data]);
  return (
    <>
      {loading ? <div>loading</div> : (
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
