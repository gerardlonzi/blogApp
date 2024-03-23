import NextAuth from "next-auth"
import { AuthOptions } from "../../../../utils/Auth";

const handler = NextAuth(AuthOptions);

export {handler as GET , handler as POST};