import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import React from 'react';
import Answer from './Answer';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Question({question}) {
  const onDelete = async (e) =>{};
  const onModify = async (e) =>{};
  return (
    <Card style={{margin:"2vh 2vw 2vh 2vw"}}>
        <CardContent>
          {console.log(question)}
            <Typography>Question Id:{question.questionId}</Typography>
            <Typography>Author Id:{question.authorId}</Typography>
            <Typography>Version :{question.questionVersion}</Typography>
            <Typography>Question Type :{question.questionType}</Typography>
            <Typography>Question : {question.question}</Typography>
            <Answer answer={question.answers} answerOption = {question.answerOption}/>
        </CardContent>
        <CardActions >
            {/* <IconButton style={{margin:"auto"}}><DeleteIcon/></IconButton> */}
            {/* <IconButton><DeleteIcon></DeleteIcon></IconButton> */}
            <Button style={{flex:"1"}} onClick={onDelete} ><DeleteIcon/></Button>
            <Button style={{flex:"1"}} onClick={onModify}><EditIcon/></Button>
        </CardActions>
    </Card>
  );
}

export default Question