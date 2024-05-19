import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"


// if using src then your folder looks like: app/api/auth/[...nextauth]/route.js

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ]
})

export {handler as GET, handler as POST}