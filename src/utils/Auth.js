import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@/utils/connect'


export const AuthOptions =  {
  adapter: PrismaAdapter(prisma),
        providers: [
          GithubProvider({
            clientId: process.env.GITHUB_ID ,
            clientSecret: process.env.GITHUB_SECRET,
          }),
          GoogleProvider({
              clientId: process.env.GOOGLE_ID,
              clientSecret: process.env.GOOGLE_SECRET,
            }),
        ],
      }


