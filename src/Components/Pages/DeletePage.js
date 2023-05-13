import { TextField,Button } from "@mui/material";
import { useState,useEffect,useContext } from "react";
import { useLocation } from "react-router";
import { deleteQuestionByQid } from "../connections";
import { JWTContext, QuestionContext, UserContext } from "../../App";

const DeletePage = (props) => {
  const [qid,setQid] = useState(0);
  const qidSent = useLocation();
  const JwtContext = useContext(JWTContext);
  useEffect(() => {
    console.log("LOCATION: ",qidSent)
    if(qidSent!=null){
      setQid(qidSent.state.qid);
    }
  }, [])
  
  const handleSubmit = async (e) => {
    if(qid!= null && qid>0){
      const token = "Bearer "+ JwtContext[0];
      console.log("Token :",token);
      const ret = await deleteQuestionByQid(qid,token);
      // console.log(qid," being set to backend");
      if(ret)alert("Question with ID "+qid+" was deleted!");
      setQid(0);
      return
    }
    // alert("Wrong request with qid = ",qid);
  }
  return (
    <div className="pages" style={{height:"100vh"}}>
      <TextField id="filled-basic" label="Enter question ID of the question to be deleted" variant="filled" sx={{width:"50vw",marginTop:"40vh"}} value={qid} onChange={(text) => {console.log(text);setQid(parseInt(text.target.value))}}/>
      <Button onClick={handleSubmit} sx={{display:'block',margin:"auto",marginTop:"2vh"}} variant="contained">Submit</Button> 
    </div>
  );
}

export default DeletePage