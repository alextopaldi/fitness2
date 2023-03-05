import axios from "axios";
import { IRegistrationUser } from "../models/UserAuth";

interface useRegistrationProps {
    userData : IRegistrationUser
}

export function useRegistration({userData} : useRegistrationProps) {

    async function registration() {
        try {
            await axios.post<IRegistrationUser>('http://26.250.164.255:5000/register', { userData });
        } catch (error) {
            console.log(error)
        }
    }

    return {registration}
}