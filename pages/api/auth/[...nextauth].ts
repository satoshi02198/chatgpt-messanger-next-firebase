import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  secret: process.env.NEXTAUTH_SERCRET,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SERCRET!,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
