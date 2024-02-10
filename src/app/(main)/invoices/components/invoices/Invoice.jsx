import React from "react";

function Invoice({id}) {
  return (
    <div id="invoices-table-header">
      <input id="invoices-table-checkbox" type="checkbox" />
      <div className="invoices-column-entry" id="invoices-table-left">
        {id}
      </div>
      <div className="invoices-column-entry" id="invoices-table-left">
        CLIENT
      </div>
      <div className="invoices-column-entry" id="invoices-table-right">
        AMOUNT
      </div>
      <div className="invoices-column-entry">STATUS</div>
    </div>
  );
}

export default Invoice;
