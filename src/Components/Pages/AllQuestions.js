import { useContext, useEffect, useState } from "react";
import { QuestionContext, UserContext } from "../../App";
import Question from "../Question";
import { Button } from "@mui/material";
import { getQuestions, getUserId } from "../connections";

const AllQuestions = (props) => {
  const questionContext = useContext(QuestionContext);
  const userContext = useContext(UserContext);
  const [userId,setUserId] = useState(-1);
  useEffect(() => {
      onRefresh(null);
  }, [])
  
  const onRefresh = async (e) => {
    setUserId(await getUserId(userContext[0]));
    const prevQuestions = questionContext[0];
    // console.log("Question context:",questionContext)
    // call api to get new questions
    const dbQuestions = await getQuestions();
    // console.log("QUESTIONS RECIEVED :",dbQuestions )
    // const newQuestions = [...dbQuestions];
    await questionContext[1](dbQuestions);
    // console.log("new qeustinos : ", newQuestions);
  }
  // console.log(" QUESTION CONTEXT : ",questionContext[0]);

  return (
  <div className="pages">
    {/* search bar with refresh button */}
    <>
    <Button onClick={onRefresh}>refresh</Button>
    {
      questionContext[0].map((val,idx)=>{
        // console.log("val of questions : ",val);
        return <Question question={val} key={idx} userId={userId}></Question>;
      })
    }
    </>
  </div>
  );
}

export default AllQuestions