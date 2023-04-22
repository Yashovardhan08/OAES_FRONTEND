import React from 'react'
import { Typography } from '@mui/material';

const Answer = ({answer,answerOption}) => {
  return <>
        {/* {console.log("answer:",answer)} */}
        {/* <Typography>HELLO</Typography> */}
    {answer!=undefined && answer!=null && answer.length>1? 
        <>
        {answer.map((item,idx)=>{
            return <Typography key={idx} gutterBottom>Option {idx+1}.{item} </Typography>;
        })}
        <Typography >Correct option :{answerOption}</Typography>
        </>
        :
        <>
            <Typography >Answer :{answer[0]}</Typography>
        </>
    }
  </>; 
}

export default Answer