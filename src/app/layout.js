
import "normalize.css"
import "./globals.css"
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}