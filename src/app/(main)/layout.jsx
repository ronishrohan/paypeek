
import "normalize.css";
import "@/app/styles/globals.scss";
import GridContainer from "./components/GridContainer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
config.autoAddCss = false;
import Providers from "./components/Providers";
import InvoicePopupWrapper from "./components/popup/InvoicePopupWrapper";
import { fetchData } from "../utils/fetch";
export const metadata = {
  title: "Home",
  description: "Paypeek",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  if(session == null){
    redirect("/login")
  }
  return <Providers>
    <InvoicePopupWrapper></InvoicePopupWrapper>
    <GridContainer>{children}</GridContainer>
  </Providers>;
}
