import { useNavigate } from "react-router";
import { UserContext } from "./../App";
import { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { registerDB } from "./connections";

const Register = ({ setRegister }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const value = useContext(UserContext);

  const register = async (e) => {
    if (username === "") return;
    if (password1 !== password2) {
      setPassword1("");
      setPassword2("");
      return;
    }
    // CALL DATABASE
    const ret = await registerDB(username, password1);
    console.log("Return in login :" + ret);
    if (ret) {
      value[1](username);
      navigate("/allQuestions");
    }
    setUsername("");
    setPassword1("");
    setPassword2("");
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
        value={password1}
        label="Password required"
        variant="outlined"
        style={{
          margin: "2vh 35vw 0px 35vw",
          width: "30vw",
          flex: "1",
        }}
        required
        type="password"
        onChange={(e) => setPassword1(e.target.value)}
      />
      <TextField
        value={password2}
        label="Type Password Again"
        variant="outlined"
        style={{
          margin: "2vh 35vw 0px 35vw",
          width: "30vw",
          flex: "1",
        }}
        required
        type="password"
        onChange={(e) => setPassword2(e.target.value)}
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
          onClick={(e) => setRegister(false)}
        >
          LOGIN
        </Button>
        <Button
          style={{
            flex: "1",
            color: "black",
          }}
          onClick={register}
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Register;
