import Register from "../Register";
import Login from "../Login";
import { useState } from "react";

const LoginPage = (props) => {
  const [register, setRegister] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      {register ? (
        <Register setRegister={setRegister}></Register>
      ) : (
        <Login setRegister={setRegister}></Login>
      )}
    </div>
  );
};

export default LoginPage;
