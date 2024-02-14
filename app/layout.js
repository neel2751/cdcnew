import { Sora } from "next/font/google";
import "./globals.css";

const kanit = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Cdc",
  description: "cdc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanit.className} bg-[#EAF3F5]`}>{children}</body>
    </html>
  );
}
