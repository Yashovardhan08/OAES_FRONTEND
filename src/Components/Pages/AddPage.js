import { useState } from "react";
import { Button, Card, CardContent, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";

const AddPage = (props) => {
  const [type,setType] = useState("objective");
  // const [qid, questionID] = useState("");
  // const [version,setVersion] = useState(1);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setOption] = useState("");

  const handleSubmit = (event) => {

    if(type==="subjective"){
      if(question.length!=0 && option1.length!=0 && option2.length!=0 && option3.length!=0 && correctOption.length!=0){
        setQuestion("");
        setOption("");
        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
      }
      alert("Submitted");
    }
    else if(type==="objective"){}
    else {
      alert("wrong inputs")
      return
    }
    // event.preventDefault();
    // // alert(`The qid you entered was: ${qid}`);

    // event.preventDefault();
    // alert(`The question you entered was: ${question}`);

    // event.preventDefault();
    // alert(`The question you entered was: ${option1}`);

    // event.preventDefault();
    // alert(`The question you entered was: ${option2}`);

    // event.preventDefault();
    // alert(`The question you entered was: ${option3}`);

    // event.preventDefault();
    // alert(`The question you entered was: ${option4}`);

    // event.preventDefault();
    // alert(`The question you entered was: ${correctOption}`);
  };

  return (
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

        <TextField id="filled-basic" label="Question" variant="filled" onChange={(text)=>setQuestion(text)} multiline fullWidth sx={{paddingTop:"1vh"}}></TextField>
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
    // <div className="pages">
    //   <form onSubmit={handleSubmit}>
    //     <TextField
    //       // value={qid}
    //       label="Question ID required"
    //       variant="outlined"
    //       style={{
    //         margin: "10vh 10vw 0px 0vw",
    //         width: "30vw",
    //         flex: "1",
    //       }}
    //       required
    //       // onChange={(e) => questionID(e.target.value)}
    //     />
    //     <TextField
    //       value={question}
    //       label="Question required"
    //       variant="outlined"
    //       style={{
    //         margin: "5vh 10vw 0px 0vw",
    //         width: "30vw",
    //         flex: "1",
    //       }}
    //       required
    //       onChange={(e) => setQuestion(e.target.value)}
    //     />
    //     <TextField
    //       value={option1}
    //       label="Option 1 required"
    //       variant="outlined"
    //       style={{
    //         margin: "5vh 10vw 0px 0vw",
    //         width: "30vw",
    //         flex: "1",
    //       }}
    //       required
    //       onChange={(e) => setOption1(e.target.value)}
    //     />
    //     <TextField
    //       value={option2}
    //       label="Option 2 required"
    //       variant="outlined"
    //       style={{
    //         margin: "5vh 10vw 0px 0vw",
    //         width: "30vw",
    //         flex: "1",
    //       }}
    //       required
    //       onChange={(e) => setOption2(e.target.value)}
    //     />
    //     <TextField
    //       value={option3}
    //       label="Option 3 required"
    //       variant="outlined"
    //       style={{
    //         margin: "5vh 10vw 0px 0vw",
    //         width: "30vw",
    //         flex: "1",
    //       }}
    //       required
    //       onChange={(e) => setOption3(e.target.value)}
    //     />
    //     <TextField
    //       value={option4}
    //       label="Option 4 required"
    //       variant="outlined"
    //       style={{
    //         margin: "5vh 10vw 0px 0vw",
    //         width: "30vw",
    //         flex: "1",
    //       }}
    //       required
    //       onChange={(e) => setOption4(e.target.value)}
    //     />
    //     <TextField
    //       value={correctOption}
    //       label="Correct Option required"
    //       variant="outlined"
    //       style={{
    //         margin: "5vh 10vw 0px 0vw",
    //         width: "30vw",
    //         flex: "1",
    //       }}
    //       required
    //       onChange={(e) => setOption(e.target.value)}
    //     />
    //     <br></br>
    //     <input type="submit" />
    //   </form>
    // </div>
  );
};

export default AddPage;
