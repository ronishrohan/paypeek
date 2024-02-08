import {withAuth} from "next-auth/middleware"

export default withAuth(
    function middleware(req){

    },
    {
        callbacks: {
            authorized: ({req, token}) => {
                if(req.nextUrl.pathname === "/login"){
                    return false;
                }
                return true;
            }
        }
    }
)