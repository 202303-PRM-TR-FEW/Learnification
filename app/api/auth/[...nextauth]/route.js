import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Credentials({
            name:"Credentials",
            credentials:{
                email: {label:"Email", placeholder:"Please enter your email", type:"email",},
                password: {label:"Password", placeholder:"Please enter your password",type:"password" }
            },
            authorize(credentials, req){
                // query if the user exists
                const user = { id: "1", name: "Furkan Cengiz", email: "muhammedcengiz1@gmail.com" }
                console.log(credentials);
                if(user.email === credentials.email)
                return true
                else return null
            }
        })
    ],
    callbacks:{
        signIn({ user, account, profile, email, credentials }){
            // check if user is allowed to sign in and save their data to db
            console.log(credentials);
            return true
        }
    },
})


export {handler as GET, handler as POST}