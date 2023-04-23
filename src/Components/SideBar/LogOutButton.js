import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { QuestionContext, UserContext } from '../../App';

const LogOutButton = (props) => {
  const context = useContext(UserContext);
  const questionContext = useContext(QuestionContext);
  const navigate = useNavigate();
  const onLogOut= (e) => {
    console.log("Requested to log out!");
    context[1](null);
    questionContext[1]([]);
    navigate('/');
  }

  return (<>
    <Button style={{
            color: "#F8F4E3",
            width:"inherit",
        }}
    onClick={onLogOut}>
        <LogoutIcon/>
    </Button>
  </>
  );
}

export default LogOutButton