"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { storePageView } from "@/actions/ipAddressAction";

export function NavigationEvents({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // which element of the user looking at
  // let activeElement;
  // try {
  //   activeElement = document.activeElement || document.body;
  // } catch (e) {
  //   console.error(e);
  // }
  // useEffect(() => {
  //   if (!activeElement?.blur) return;
  //   const handleBlur = () => {
  //     setTimeout(activeElement.blur.bind(activeElement), 0);
  //   };
  //   window.addEventListener("focus", handleBlur);
  //   return () => window.removeEventListener("focus", handleBlur);
  // }, [activeElement]);
  // console.log("active data want to check of block of the user", activeElement);
  // const memorized = useMemo(async () => {
  //   console.log("use memo called...");
  //   let path;
  //   if (pathname === "/") {
  //     path = "Home";
  //   } else {
  //     path = pathname;
  //   }
  //   const newPath = String(pathname);
  //   const response = await storePageView(path);
  //   console.log("page view stored", response);
  // }, []);

  useEffect(() => {
    async function storePageData() {
      const url = `${pathname}?${searchParams}`;
      let path;
      if (pathname === "/") {
        path = "Home";
      } else {
        path = pathname;
      }
      const response = storePageView(path);
    }

    storePageData();
    // We can now use the current URL...
    // store the url in database and update the visitor how many times user watched this page
    // or you can send it to server using websocket for real time updates
    // how much time user stay on this page
    // which element of the page user looking at etc...
  }, [pathname, searchParams]);

  return <div>{children}</div>;
}
