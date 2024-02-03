
import "normalize.css"
import "./styles/globals.scss"
import GridContainer from "./components/GridContainer"

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