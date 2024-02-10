"use client";
import React from "react";
import { forwardRef } from "react";

const InvoicesTableHeader = forwardRef(function InvoicesTableHeader({ checkAll },ref) {
  function handleToggleCheck(e) {
    if (e.target.checked) {
      checkAll(true);
    } else {
      checkAll(false);
    }
  }

  return (
    <div id="invoices-table-header">
      <input
        ref={ref}
        id="invoices-table-checkbox"
        onChange={handleToggleCheck}
        type="checkbox"
      />
      <div className="invoices-column" id="invoices-table-left">
        INVOICE
      </div>
      <div className="invoices-column" id="invoices-table-left">
        CLIENT
      </div>
      <div className="invoices-column" id="invoices-table-right">
        AMOUNT
      </div>
      <div className="invoices-column">STATUS</div>
    </div>
  );
});

export default InvoicesTableHeader;
