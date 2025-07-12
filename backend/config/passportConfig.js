import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js"; 


const passportConfig = (passport) => {
  // Setup Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID, // Replace with your client ID
  clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Replace with your client secret
  callbackURL: 'http://localhost:5173/auth/google/callback', // Your callback URL
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Find or create user based on the Google profile
    let user = await User.findOne({ where: { googleId: profile.id } });

    if (!user) {
      // If the user doesn't exist, create a new one
      user = await User.create({
        googleId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value,
        // You can save other profile data as needed
      });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
}

export default passportConfig
