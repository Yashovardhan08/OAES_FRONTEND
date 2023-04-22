export const LoginDB = async (username, password) => {
  var ret = false;
  const result = await fetch("http://localhost:8079/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
    //   username,
  })
    .then(async (res) => {
      await res.json().then((v) => {
        console.log(" v in res.json: ", v);
        ret = v;
      });
    })
    .catch((err) => {
      ret = false;
    });
  //   console.log(" RESULT FROM LOGIN :", result);
  //   console.log(" RET FROM LOGIN :", ret);
  return ret;
};

export const registerDB = async (username, password) => {
  var ret = false;
  const result = await fetch("http://localhost:8079/user/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
    //   username,
  })
    .then(async (res) => {
      await res.json().then((v) => {
        console.log(" v in res.json: ", v);
        ret = v;
      });
    })
    .catch((err) => {
      ret = false;
    });
};
