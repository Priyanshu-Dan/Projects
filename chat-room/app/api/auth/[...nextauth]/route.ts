import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID||"",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET||"",
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        },
        
      }),
  ],

})
export { handler as GET, handler as POST };