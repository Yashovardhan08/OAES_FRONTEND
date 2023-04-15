import { useState } from "react";
import { Button, Card, CardContent, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";

const ModifyPage = (props) => {
  const [qid, setQuestionID] = useState("");
  const [type,setType] = useState("objective");

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setOption] = useState("");
  const [userId, setUserID] = useState("");

  const handleCheck = async () => {
    // call backend and fill in the details in all fields
    if(true){// call to backend is valid
      setOption("");
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setType("");
      return;
    }
  };
  const handleSubmit = async (event) => {
    //call database to modify the question and reset all fields;
    if(true){// call to db is valid
      setQuestionID("");
      setOption("");
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      // setType("");
      return
    }
  };

  return <>
    <Card sx={{margin:"auto",width:"40vw"}}>
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

        <TextField id="filled-basic" label="QuestionID" variant="filled" onChange={(text)=>{setQuestionID(text);handleCheck();}} multiline fullWidth sx={{paddingTop:"1vh"}}></TextField>
        <TextField id="filled-basic" label="Question" variant="filled" onChange={(text)=>{setQuestion(text);}} multiline fullWidth sx={{paddingTop:"1vh"}}></TextField>
        { 
          type==="objective"?
          <>
            <TextField id="filled-basic" label="Option 1" variant="filled" onChange={(text)=>setOption1(text)} sx={{display:"block",paddingTop:"1vh"}} fullWidth></TextField>
            <TextField id="filled-basic" label="Option 2" variant="filled" onChange={(text)=>setOption2(text)} sx={{display:"block",paddingTop:"1vh"}} fullWidth></TextField>
            <TextField id="filled-basic" label="Option 3" variant="filled" onChange={(text)=>setOption3(text)} sx={{display:"block",paddingTop:"1vh"}} fullWidth></TextField>
            <TextField id="filled-basic" label="Option 4" variant="filled" onChange={(text)=>setOption4(text)} sx={{display:"block",paddingTop:"1vh"}} fullWidth></TextField>
            <TextField id="filled-basic" label="Correct option" variant="filled" onChange={(text)=>setOption(text)} sx={{display:"block",paddingTop:"1vh"}} fullWidth></TextField>
          </>
          :
          <>
            <TextField id="filled-basic" label="Answer" variant="filled" onChange={(text)=>setOption1(text)} sx={{display:"block",paddingTop:"1vh"}} fullWidth></TextField>
          </>
        }

      <Button onClick={handleSubmit} sx={{display:'block',margin:"auto",marginTop:"2vh"}} variant="contained">Submit</Button> 
      </CardContent>
    </Card>
  </>;
};

export default ModifyPage;
