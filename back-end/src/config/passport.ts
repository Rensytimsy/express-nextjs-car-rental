
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

interface GoogleUserProfile {
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  email: Array<{ value: string; verified: boolean }>;
  photos: Array<{ value: string }>;
}

const client_id: string = process.env.GOOGLE_CLIENT_ID || "";
const client_secret: string = process.env.GOOGLE_CLIENT_SECRET || "";

passport.use(
  new GoogleStrategy({
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: "http://localhost:5000/api/auth/google",
  }, 
  (accessToken: string, refreshToken:string, profile, done) => {
    return done(null, profile)
  }
)
);


