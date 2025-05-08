// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import axios from "axios"
// import { headers } from "next/headers";


// interface SignInCredentials {
//     userName: string,
//     password: string,
//     id:string,
//     isAdmin: string
// }


// export const {signIn, signOut, auth, handlers} = NextAuth({
//    providers: [
//         Credentials({
//             credentials: {
//                 username: {
//                     type: "string",
//                     required: true
//                 },
//                 password: {
//                     type: "string",
//                     required: true
//                 }
//             },

//             async authorize(credentials) {
//                 let user = {};


//                 console.log(credentials);

//                 let loginCredentials = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/login`, {
//                     body: JSON.stringify(credentials),
//                     headers: {"Content-Type": "application/json"}
//                 });

//                 console.log(loginCredentials);


//                return user = loginCredentials?.data.user;
//             }
//         })
//    ]
// })