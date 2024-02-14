import { Sora } from "next/font/google";

const kanit = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Cdc",
  description: "cdc",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
