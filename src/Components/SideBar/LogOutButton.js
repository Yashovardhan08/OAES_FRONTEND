import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../App';

const LogOutButton = (props) => {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const onLogOut= (e) => {
    console.log("Requested to log out!");
    context[1](null);
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