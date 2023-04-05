import { useState } from "react";
import { TextField } from "@mui/material";

const ModifyPage = (props) => {
  const [qid, questionID] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setOption] = useState("");
  const [userId, setUserID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The qid you entered was: ${qid}`);

    event.preventDefault();
    alert(`The question you entered was: ${question}`);

    event.preventDefault();
    alert(`The question you entered was: ${option1}`);

    event.preventDefault();
    alert(`The question you entered was: ${option2}`);

    event.preventDefault();
    alert(`The question you entered was: ${option3}`);

    event.preventDefault();
    alert(`The question you entered was: ${option4}`);

    event.preventDefault();
    alert(`The question you entered was: ${correctOption}`);
  };

  return (
    <div className="pages">
      <form onSubmit={handleSubmit}>
        <TextField
          value={qid}
          label="Question ID required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => questionID(e.target.value)}
        />
        <TextField
          value={question}
          label="Question required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TextField
          value={option1}
          label="Option 1 required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => setOption1(e.target.value)}
        />
        <TextField
          value={option2}
          label="Option 2 required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => setOption2(e.target.value)}
        />
        <TextField
          value={option3}
          label="Option 3 required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => setOption3(e.target.value)}
        />
        <TextField
          value={option4}
          label="Option 4 required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => setOption4(e.target.value)}
        />
        <TextField
          value={correctOption}
          label="Correct Option required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => setOption(e.target.value)}
        />
        <TextField
          value={userId}
          label="Correct Option required"
          variant="outlined"
          style={{
            margin: "5vh 10vw 0px 0vw",
            width: "30vw",
            flex: "1",
          }}
          required
          onChange={(e) => setUserID(e.target.value)}
        />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ModifyPage;
