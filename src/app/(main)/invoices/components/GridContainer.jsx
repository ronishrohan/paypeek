import Balance from "./Balance";
import Invoices from "./Invoices";
import Pending from "./Pending";
import { getInvoices } from "./lib/getInvoices";
import Test from "./invoices/test";
async function GridContainer() {
  return (
    <>
      <div id="invoices-grid-container">
        <div id="top-grid">
          <Balance></Balance>
          <Pending></Pending>
        </div>
        <Invoices>
          <Test></Test>
        </Invoices>
      </div>
    </>
  );
}

export default GridContainer;
