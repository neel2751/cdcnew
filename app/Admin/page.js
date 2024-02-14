// import { cookies } from "next/headers";
// import Login from "./(authPage)/Login/page";
// import Dashboard from "../Admin/Dashboard/page";
// // import DashNew from "./Dashboard/DashNew";
// import DashHome from "./Dashboard/DashHome/DashHome";
// import Providers from "../auth/Providers";
// import { useSession } from "next-auth/react";
// import LoginButton from "./(authPage)/Chcek/button";

// export default function Home() {
//   const cookieStore = cookies();
//   const check = cookieStore.get("token");
//   return (
//     <>
//       <Providers>
//         <DashHome />
//         <LoginButton />
//       </Providers>
//     </>
//   );
// }
"use client";

import { useSession } from "next-auth/react";
import Chcek from "./(authPage)/Chcek/page";
import Dashboard from "./Dashboard/page";
import Dash from "./Dashboard/Dash";
export default function Home() {
  // console.log(useSession);
  const { data: session, status } = useSession();
  console.log(status);
  console.log(JSON.stringify(session));
  if (status === "authenticated") {
    return <Dashboard />;
  }
  return <Chcek />;
}
