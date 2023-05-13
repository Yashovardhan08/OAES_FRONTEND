import { useState,useEffect, useContext } from "react";
import { Button, Card, CardContent, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useLocation } from "react-router";
import { modifyQuestion } from "../connections";
import { JWTContext, UserContext } from "../../App";

const ModifyPage = (props) => {
  const [qid, setQuestionID] = useState(0);
  const [type,setType] = useState("objective");
  const questionLocation = useLocation();
  const userContext = useContext(UserContext);
  const jwtContext = useContext(JWTContext);

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [version,setVersion] = useState("")
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setOption] = useState("");
  const [answer,setAnswer ] = useState("")
  const [userId, setUserID] = useState("");
  
  useEffect(() => {
    console.log("QUESTION LOCATION :",questionLocation);
    if(questionLocation.state.question!=null){
      const q = questionLocation.state.question;
      setQuestion(q.question);
      setQuestionID(q.qid);
      setAnswer(q.answer);
      setOption(q.correctOption);
      setOption1(q.option1);
      setOption2(q.option2);
      setOption3(q.option3);
      setOption4(q.option4);
      setVersion(q.version);
      setType(q.questionType);
    }
  }, [])

  const handleSubmit = async (event) => {
    //call database to modify the question and reset all fields;
    const q = {
      question:question,
      questionType:type,
      version:version,
      correctOption:correctOption,
      option1:option1,
      option2:option2,
      option3:option3,
      option4:option4,
      answer:answer,
      qid: qid,
    }
    console.log("question BEING ASKED TO MODIFIED ", q.qid);
    const token = "Bearer " + jwtContext[0];
    console.log("Token ", token);
    const mod = await modifyQuestion(q,userContext[0],token);
    if(mod){// call to db is valid
      setQuestionID(0);
      setOption("");
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setVersion(0);
      setAnswer("")
      // setType("");
      return
    }
  };

  return <div className="pages" style={{height:"100vh"}}>
    <Card sx={{margin:"auto",marginTop:"20vh",width:"60vw"}}>
      <CardContent>
        <ToggleButtonGroup 
          sx={{display:'block'}}
          color="primary"
          value={type}
          exclusive
          onChange={(e)=>{setType(e.target.value)}}
          aria-label="Platform"
        >
          <ToggleButton value="objective">Objective</ToggleButton>
          <ToggleButton value="subjective">Subjective</ToggleButton>
          {/* <ToggleButton value="ios">iOS</ToggleButton> */}
        </ToggleButtonGroup>

        <TextField id="filled-basic" label="QuestionID" variant="filled" onChange={(text)=>{setQuestionID(text.target.value);}} multiline fullWidth sx={{paddingTop:"1vh"}} value={qid}></TextField>
        <TextField id="filled-basic" label="Question" variant="filled" onChange={(text)=>{setQuestion(text.target.value);}} multiline fullWidth sx={{paddingTop:"1vh"}} value={question}></TextField>
        <TextField id="filled-basic" label="Version" variant="filled" onChange={(text)=>{setVersion(text.target.value);}} multiline fullWidth sx={{paddingTop:"1vh"}}value={version}></TextField>
        { 
          type==="objective"?
          <>
            <TextField id="filled-basic" label="Option 1" variant="filled" onChange={(text)=>setOption1(text.target.value)} sx={{display:"block",paddingTop:"1vh"}} value={option1} fullWidth></TextField>
            <TextField id="filled-basic" label="Option 2" variant="filled" onChange={(text)=>setOption2(text.target.value)} sx={{display:"block",paddingTop:"1vh"}} value={option2} fullWidth></TextField>
            <TextField id="filled-basic" label="Option 3" variant="filled" onChange={(text)=>setOption3(text.target.value)} sx={{display:"block",paddingTop:"1vh"}} value={option3} fullWidth></TextField>
            <TextField id="filled-basic" label="Option 4" variant="filled" onChange={(text)=>setOption4(text.target.value)} sx={{display:"block",paddingTop:"1vh"}} value={option4} fullWidth></TextField>
            <TextField id="filled-basic" label="Correct option" variant="filled" onChange={(text)=>setOption(text.target.value)} value={correctOption} sx={{display:"block",paddingTop:"1vh"}} fullWidth></TextField>
          </>
          :
          <>
            <TextField id="filled-basic" label="Answer" variant="filled" onChange={(text)=>setAnswer(text.target.value)} sx={{display:"block",paddingTop:"1vh"}} value={answer} fullWidth></TextField>
          </>
        }

      <Button onClick={handleSubmit} sx={{display:'block',margin:"auto",marginTop:"2vh"}} variant="contained">Submit</Button> 
      </CardContent>
    </Card>
  </div>;
};

export default ModifyPage;
