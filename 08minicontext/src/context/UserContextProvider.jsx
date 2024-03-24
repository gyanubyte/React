import React from "react";
import UserContext from "./UserContext";
import { Children } from "react";

const UserContextProvider = ({Children})=>{

    const [user, SetUser] = React.useState(null);

    return(
        <UserContext.Provider value={{user, SetUser}}>
            {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider