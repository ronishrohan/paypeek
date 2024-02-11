
import "normalize.css";
import "@/app/styles/globals.scss";
import GridContainer from "./components/GridContainer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
config.autoAddCss = false;
import InvoicePopupWrapper from "./components/popup/InvoicePopupWrapper";
import { InvoicePopupProvider } from "./components/popup/InvoicePopupWrapper";
export const metadata = {
  title: "Home",
  description: "Paypeek",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  if(session == null){
    redirect("/login")
  }
  else{
    console.log(session)
  }
  return <InvoicePopupProvider>
    <InvoicePopupWrapper></InvoicePopupWrapper>
    <GridContainer>{children}</GridContainer>
  </InvoicePopupProvider>;
}
