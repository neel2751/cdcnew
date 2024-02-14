// // pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials, req) => {
//         // Extract credentials from req.body
//         const { username, password } = credentials;

//         // Validate credentials (this is where you'd connect to your database)
//         const db = await connectToDatabase();
//         const User = db.model("User");

//         const user = await User.findOne({ username });

//         if (user && user.verifyPassword(password)) {
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     async session(session, user) {
//       session.user.id = user.id;
//       return Promise.resolve(session);
//     },
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//       }
//       return Promise.resolve(token);
//     },
//   },
//   pages: {
//     signIn: "/admin/(authPage)/Check",
//   },
// });

import { AuthLogin } from "@/actions/loginAction";
import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        console.log("authorizing with credentials ", credentials);
        const url = new URL(credentials.callbackUrl);
        const extractedValue = url.origin; // https://cdc-7v3vy0apq-neels-projects-d15d610d.vercel.app

        console.log("this is the main url", extractedValue);

        // from credentials extract the data

        try {
          const { email, password } = credentials;
          const dataResponse = await AuthLogin(email, password);
          console.log("this is next auth data is here...", dataResponse);
          if (dataResponse.data.isAdmin === true) {
            const check = dataResponse.data;
            const user = {
              id: check.id,
              email: check.email,
              name: check.name,
              isAdmin: check.isAdmin,
            };
            return user;
          }
          //   return response.data.data;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    // jwt: true,
  },
  callbacks: {
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.id = token.sub;
      return session;
    },
    // async session(session, user) {
    //   console.log("session the user data->", session);
    //   session.user.name = user.id;
    //   return Promise.resolve(session);
    // },
    // async jwt(token, user) {
    //   if (user) {
    //     token.id = user.id || null; // Assign user.id to token.id if it exists, otherwise, set it to null
    //   }
    //   return token;
    // },
    // async jwt(token, user) {
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   return Promise.resolve(token);
    // },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
