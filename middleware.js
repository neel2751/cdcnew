// import { redirect } from "next/dist/server/api-utils";
// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   const { pathname } = request.nextUrl;
//   console.log(pathname);
//   //   console.info(path);
//   // const path = request.nextUrl.pathname;

//   //   request.nextUrl.pathname.startsWith('/about')

//   const publicPath =
//     pathname === "/Admin/Login" || pathname === "/Admin/Signin";
//   let token = request.cookies.get("token");
//   //   console.log(token);
//   if (publicPath && token) {
//     console.log(pathname);
//     return NextResponse.redirect(new URL("/Admin/Dashboard", request.url));

//     // console.log(token);
//     // return NextResponse.redirect(new URL("/Admin/Dashboard", path)); // Continue processing the request as usual
//   }
//   if (!publicPath && !token) {
//     return NextResponse.redirect(new URL("/Admin", request.url));

//     // console.log(token);
//     // return NextResponse.redirect(new URL("/Admin", request.nextUrl));
//   }
//   // Handle the home page specifically
//   //     if (path === '/') {
//   //         return new Response('Home Page', { status: 200 })
//   //         } else if (path.startsWith('/post')){
//   //             let postId= path.split("/")[2];
//   //             try {
//   //                 let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//   //                 if (!response.ok) throw new Error("HTTP error " + response.status);
//   //                 let data = await response.json();
//   //                 // Create a custom Next.js response with our data and pass it to the React component
//   //                 return new NextResponse(JSON.stringify(data), {
//   //                     headers: { 'Content-Type': 'application/json' },
//   //                     });
//   //                     } catch (error) {
//   //                         console.log('Error: ', error);
//   //                         return new Response('Not Found', { status: 404 })
//   //                         }
//   //                         }
//   //                         // For all other pages, just return the default Next.js response
//   //                         return new NextResponse(request)
//   //                         }
//   //   return NextResponse.redirect(new URL('/home', request.url))
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/Admin/Login", "/Admin/Signin", "/Admin/Dashboard"],
// };

import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.id,
    },
  }
);

export const config = {
  matcher: ["/Admin/Dashboard"],
};
