import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";


function Login()
{
    const [userName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const {setUser} = useContext(UserContext)
    
    const handleSumbimt = (e)=>
        {
            console.log(e.target.userName)
            e.preventDefault();
            SetUser({userName, Password})
        }

    return (
     <div>
        <h2>Login</h2>
        <input type="text"
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
        placeholder="userName" />
        <input type="text"
        value={Password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder="Password" />
        <button onClick={handleSumbimt}>Submit</button>
     </div>
    );
}

export default Login;