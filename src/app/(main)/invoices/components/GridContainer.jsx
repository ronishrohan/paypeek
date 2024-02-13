import Balance from "./Balance";
import Invoices from "./Invoices";
import Pending from "./Pending";
import PendingInfo from "./PendingInfo";
import { getInvoices } from "./lib/getInvoices";
import PendingBack from "./cards/PendingBack";
async function GridContainer({ pending }) {
  const data = await getInvoices();
  const dataPending = await getInvoices("pending");
  const serialized = JSON.stringify(data);
  const serializedPending = JSON.stringify(dataPending);

  return (
    <>
      <div id="invoices-grid-container">
        {pending ? (
          <>
            <div id="pending-top-grid" >
              <PendingInfo></PendingInfo>
              <PendingBack></PendingBack>
            </div>
            <Invoices  key="pending" serializedData={serializedPending}></Invoices>
          </>
        ) : (
          <>
            <div id="top-grid">
              <Balance></Balance>
              <Pending></Pending>
            </div>
            <Invoices key="all" serializedData={serialized}></Invoices>
          </>
        )}
      </div>
    </>
  );
}

export default GridContainer;
