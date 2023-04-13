import { useContext, useEffect } from "react";
import { QuestionContext } from "../../App";

const SearchPage = (props) => {
  const questionContext = useContext(QuestionContext);
  const onRefresh = async (e) => {
    const prevQuestions = questionContext[0];
    // call api to get new questions
    const newQuestions = [...prevQuestions];
    await questionContext[1](newQuestions);
  }

  return (
  <div className="pages" >
    {/* search bar with refresh button */}
    {
      questionContext[0].map((val,idx)=>{
        return <>
          
        </>;
      })
    }
  </div>
  );
}

export default SearchPage