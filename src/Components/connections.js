export const LoginDB = async (username, password) => {
  var ret = false;
  const result = await fetch("http://localhost:8696/login", {
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
  const result = await fetch("http://localhost:8696/addUser", {
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


export const getQuestions = async() => {
  var ret = [];
  const result = await fetch("http://localhost:8696/getAllQuestions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //   username,
  })
    .then(async (res) => {
      await res.json().then((v) => {
        // console.log(" v in res.json: ", v);
        ret = v;
      });
    })
    .catch((err) => {
      ret = [];
    });
    return ret;
} 



export const deleteQuestionByQid = async(qid) => {
  var ret = false;
  const result = await fetch("http://localhost:8696/deleteByQId", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: qid,
  })
    .then(async (res) => {
      await res.json().then((v) => {
        console.log(" v in res.json: ", v);
        ret = true;
      });
    })
    .catch((err) => {
      ret = false;
    });
    return ret;
} 

export const getUserId = async (username) => {
  var ret = -1;
  const result = await fetch("http://localhost:8696/getUserId", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: username,
  })
    .then(async (res) => {
      await res.json().then((v) => {
        console.log(" v in res.json: ", v);
        ret = v;
      });
    })
    .catch((err) => {
      ret = -1;
    });
    return ret;
}

export const addQuestion= async(q,user) => {
  var ret = false;
  const userId = await getUserId(user);
  const qJson = await JSON.stringify({
    "question":q.question,
    "questionType":q.questionType,
    "version":q.version,
    "option1":q.option1,
    "option2":q.option2,
    "option3":q.option3,
    "option4":q.option4,
    "correctOption":q.correctOption,
    "answer":q.answer,
    "user_id":userId
  })
  const result = await fetch("http://localhost:8696/addQuestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:qJson,
  }).then(async (res) => {
    // console.log("RES = ",res);
    await res.json().then((v)=> ret = v);
    // console.log("res body ", res.body)
    })
    .catch((err) => {
      ret = false;
    });
    return ret;
} 



export const modifyQuestion= async(question,user) => {
  var ret = false;
  const userId = await getUserId(user);
console.log("userid : ",userId);
  const q = JSON.stringify({
    
    "qid":question.qid,
    "question":question.question,
    "version":question.version,
    "questionType":question.questionType,
    "option1":question.option1,
    "option2":question.option2,
    "option3":question.option3,
    "option4":question.option4,
    "correctOption":question.correctOption,
    "answer":question.answer,
    "user_id":userId
  });
  console.log("QUESTION BEING SENT TO MODIFY:",q);
  const result = await fetch("http://localhost:8696/modifyQuestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: q,
  })
    .then(async (res) => {
      await res.json().then((v) => {
        console.log(" v in res.json: ", v);
        ret = true;
      });
    })
    .catch((err) => {
      ret = false;
    });
    return ret;
} 
