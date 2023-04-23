import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import React from 'react';
import Answer from './Answer';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router';

function Question({question,userId}) {
  const navigate = useNavigate();
  const onDelete = async (e) =>{
    navigate('/delete',{
      state: {
          qid:question.qid
      },
  })
  };
  const onModify = async (e) =>{
    navigate('/modify',{
      state:{
        question:question
      }
    })
  };
  return (
    <Card style={{margin:"2vh 2vw 2vh 2vw"}}>
        <CardContent>
          {console.log(question)}
            <Typography>Question Id:{question.qid}</Typography>
            <Typography>Author Id:{question.user_id}</Typography>
            <Typography>Version :{question.version}</Typography>
            <Typography>Question Type :{question.questionType}</Typography>
            <Typography>Question : {question.question}</Typography>
            <Answer answer={question.questionType=="subjective"?[question.answer]:[question.option1,question.option2,question.option3,question.option4]} answerOption = {question.correctOption}/>
        </CardContent>
        <CardActions >
            {userId==question.user_id?
            <>
            <Button style={{flex:"1"}} onClick={onDelete} ><DeleteIcon/></Button>
            <Button style={{flex:"1"}} onClick={onModify}><EditIcon/></Button></>
            :
            <></>}
            {/* <IconButton style={{margin:"auto"}}><DeleteIcon/></IconButton> */}
            {/* <IconButton><DeleteIcon></DeleteIcon></IconButton> */}
            
        </CardActions>
    </Card>
  );
}

export default Question