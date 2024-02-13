import Balance from "./Balance";
import Invoices from "./Invoices";
import Pending from "./Pending";
import { getInvoices } from "./lib/getInvoices";
async function GridContainer() {
  const data = await getInvoices()
  const serialized = JSON.stringify(data)
  
  return (
    <>
      <div id="invoices-grid-container">
        <div id="top-grid">
          <Balance></Balance>
          <Pending></Pending>
        </div>
        <Invoices serializedData={serialized} >
        </Invoices>
      </div>
    </>
  );
}

export default GridContainer;
