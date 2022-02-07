import { useContext } from "react";
import { AuthenticationContext } from "./AuthProvider";

const useAuth = () => {
    return useContext(AuthenticationContext)
}

export default useAuth;