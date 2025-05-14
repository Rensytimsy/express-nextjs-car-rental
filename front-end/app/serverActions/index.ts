import { cookies } from "next/headers";


export const getCookieData = async() => {
    const cookieStore = cookies();
    const availableCookie = (await cookieStore).get("token");
    console.log(availableCookie);
}