import { useNavigate } from "react-router";
import { UserContext } from "./../App";
import { useContext,useState } from "react";
import { Button, TextField } from "@mui/material";

const Login = ({setRegister}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(UserContext);

  const login = (e) => {
    if(username==="")return;
    value[1](username);
    navigate("/search");
  }
  
  return <div>
    <TextField
        value={username} 
        label="Username required" 
        variant="outlined" 
        style={{
            margin:"40vh 35vw 0px 35vw",
            width:"30vw",
            flex:"1"
        }}
        required 
        onChange={(e) => setUsername(e.target.value)}
    />
    <TextField
        value={password} 
        label="Password required" 
        variant="outlined" 
        style={{
            margin:"2vh 35vw 0px 35vw",
            width:"30vw",
            flex:"1"
        }}
        required 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
    />

    <div style={{display:"flex",flexDirection:"row",margin:"2vh 35vw 0vh 35vw"}}>
        <Button 
            style={{
                flex:"1",
                color:"black"
            }}
            onClick={login}>
            LOGIN
        </Button>
        <Button 
        style={{
            flex:"1",
            color:"black"
        }}
        onClick={(e)=> setRegister(true)}>
        REGISTER
    </Button>
    </div>
    
  </div>;
}

export default Login