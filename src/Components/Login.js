import { useNavigate } from "react-router";
import { JWTContext, UserContext } from "./../App";
import { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { LoginDB } from "./connections";

const Login = ({ setRegister }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(UserContext);
  const jwtContext = useContext(JWTContext);

  const login = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") return;
    const ret = await LoginDB(username, password);
    console.log("Return in login :" + ret);
    if (ret) {
      jwtContext[1](ret);
      value[1](username);
      navigate("/allQuestions");
    }
  };

  return (
    <div>
      <TextField
        value={username}
        label="Username required"
        variant="outlined"
        style={{
          margin: "40vh 35vw 0px 35vw",
          width: "30vw",
          flex: "1",
        }}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        value={password}
        label="Password required"
        variant="outlined"
        style={{
          margin: "2vh 35vw 0px 35vw",
          width: "30vw",
          flex: "1",
        }}
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "2vh 35vw 0vh 35vw",
        }}
      >
        <Button
          style={{
            flex: "1",
            color: "black",
          }}
          onClick={login}
        >
          LOGIN
        </Button>
        <Button
          style={{
            flex: "1",
            color: "black",
          }}
          onClick={(e) => setRegister(true)}
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Login;
