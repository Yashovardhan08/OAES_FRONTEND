import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { UserContext } from "../../App";
import { useContext,useState } from "react";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const value = useContext(UserContext);
  const login = (e) => {
    if(username==="")return;
    console.log("Logging in");
    // console.log("user :",user)
    // setUser(username);
    console.log("value: ",value)
    value[1](username);
    navigate("/search");
  }



  return (
    // <UserContext.Consumer>
      <div style={{display:"flex",flexDirection:"column",width:"100vw",height:"100vh"}}>
        <TextField
          value={username} 
          label="Username required" 
          variant="outlined" 
          style={{
            margin:"40vh 35vw 0px 35vw"
          }}
          required 
          onChange={(e) => setUsername(e.target.value)}/>
        <Button 
          style={{
            margin:"2vh 35vw 0px 35vw",
            color:"black"
          }}
          onClick={login}>
          LOGIN
        </Button>
      </div>
    // </UserContext.Consumer>
    
  );
  }
  
  export default LoginPage