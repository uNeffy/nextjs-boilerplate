import "./globals.css";
import { Routes } from './components'
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "neffy's shop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Routes/>
        {children}</body>
    </html>
  );
}
