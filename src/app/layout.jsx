
import "normalize.css"
import "./styles/globals.scss"
import GridContainer from "./components/GridContainer"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Invoices",
  description: "Your invoices"
}
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GridContainer>
          {children}
        </GridContainer>
      </body>
    </html>
  )
}