import { TextField,Button } from "@mui/material";
import { useState,useEffect } from "react";
import { useLocation } from "react-router";
import { deleteQuestionByQid } from "../connections";

const DeletePage = (props) => {
  const [qid,setQid] = useState(0);
  const qidSent = useLocation();
  useEffect(() => {
    console.log("LOCATION: ",qidSent)
    if(qidSent!=null){
      setQid(qidSent.state.qid);
    }
  }, [])
  
  const handleSubmit = async (e) => {
    if(qid!= null && qid>0){
      const ret = await deleteQuestionByQid(qid);
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