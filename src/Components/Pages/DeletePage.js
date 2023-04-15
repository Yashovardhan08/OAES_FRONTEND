import { TextField,Button } from "@mui/material";
import { useState } from "react";

const DeletePage = (props) => {
  const [qid,setQid] = useState(0);
  const handleSubmit = async (e) => {
    if(qid!= null && qid>0){
      // console.log(qid," being set to backend");
      // alert("Sent Request to backend with qid = "+toString(qid));
      setQid(0);
      return
    }
    // alert("Wrong request with qid = ",qid);
  }
  return (
    <div className="pages">
      <TextField id="filled-basic" label="Enter question ID of the question to be deleted" variant="filled" sx={{width:"50vw",marginTop:"40vh"}} onChange={(text) => {console.log(text);setQid(parseInt(text.target.value))}}/>
      <Button onClick={handleSubmit} sx={{display:'block',margin:"auto",marginTop:"2vh"}} variant="contained">Submit</Button> 
    </div>
  );
}

export default DeletePage