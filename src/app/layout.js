
import "normalize.css"
import "./globals.css"
import GridContainer from "./components/GridContainer"
 
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