export { default } from "next-auth/middleware"

export const config = {
    matcher:[
        '/seesion'
    ],
    pages:{
        signIn:'api/auth/signin'
    }
}