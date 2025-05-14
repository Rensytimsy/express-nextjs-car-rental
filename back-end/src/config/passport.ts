
import passport from "passport"
import {Strategy as GoogleStrategy, StrategyOptions} from "passport-google-oauth20"

interface GoogleProfile {
    id: string,
    displayName: string,
    name: {
        familyName: string,
        givenName: string
    },
    emails: Array<{ value: string, verified: boolean}>,
    photos: Array<{ value: string }>
}

const client_id: string = process.env.GOOGLE_CLIENT_ID || "", client_secret = process.env.GOOGLE_CLIENT_SECRET || "";

// console.log(client_id, client_secret);  

// GOOGLE_CLIENT_ID GOOGLE_CLIENT_SECRET

export const passportInit = passport.use(
    //This takes a strategy from passport-google-oauth20 module
    new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: "/auth/google/callback",
    } as StrategyOptions, // Explicit type assertion
    (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    }
)
)