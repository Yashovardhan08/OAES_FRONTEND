import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

function Question({question}) {
  return (
    <Card>
        <CardContent>
            <Typography>Question Id:{question.questionId}</Typography>
            <Typography>Author Id:{question.authorId}</Typography>
            <Typography>Version :{question.questionVersion}</Typography>
            <Typography>Question Type :{question.questionType}</Typography>
            <Answer answer={question.answers} answerOption = {question.answerOption}/>
            <Typography>{question.question}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={onDelete}>DELETE</Button>
            <Button onClick={onModify}>MODIFY</Button>
        </CardActions>
    </Card>
  );
}

export default Question