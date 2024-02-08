import "normalize.css";
import "./styles/globals.scss";
import GridContainer from "./(main)/components/GridContainer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Providers from "./components/Providers";
config.autoAddCss = false;

export const metadata = {
  title: "Home",
  description: "Paypeek",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
