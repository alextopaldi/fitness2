import { useEffect } from "react";
import { UserFood } from "../components/UserFood";
import { useAppSelector } from "../hooks/Redux";
import { useGetUserInfo } from "../hooks/GetUserInfo";
import { useFetchUserInfo } from "../hooks/FetchUserInfo";

export function UserFoodPage() {

    return(
        <>
        <div className="container">
            <UserFood/>
        </div>
        </>
    )
}
