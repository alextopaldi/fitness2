import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
    auth : boolean,
    children : React.ReactNode
}

export function PrivateRoute({auth, children} : PrivateRouteProps) {
    return auth? children : <Navigate to='/login'/>
}