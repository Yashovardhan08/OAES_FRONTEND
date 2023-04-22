import { useContext, useEffect } from "react";
import { QuestionContext } from "../../App";
import Question from "../Question";
import { Button } from "@mui/material";

const AllQuestions = (props) => {
  const questionContext = useContext(QuestionContext);
  const onRefresh = async (e) => {
    const prevQuestions = questionContext[0];
    // console.log("Question context:",questionContext)
    // call api to get new questions
    const newQuestions = [...prevQuestions];
    await questionContext[1](newQuestions);
    // console.log("new qeustinos : ", newQuestions);
  }
  // console.log(" QUESTION CONTEXT : ",questionContext[0]);

  return (
  <div className="pages">
    {/* search bar with refresh button */}
    <>
    {
      questionContext[0].map((val,idx)=>{
        // console.log("val of questions : ",val);
        return <Question question={val} key={idx}></Question>;
      })
    }
    </>
    <Button onClick={onRefresh}>refresh</Button>
  </div>
  );
}

export default AllQuestions