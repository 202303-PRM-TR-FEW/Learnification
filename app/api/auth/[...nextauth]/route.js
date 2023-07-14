import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        signIn({ user, account, profile, email, credentials }){
            // check if user is allowed to sign in
            console.log("signing in...");
            return true
        }
    },
    pages:{
        signIn: '/auth/signin',
    }
})


export {handler as GET, handler as POST}