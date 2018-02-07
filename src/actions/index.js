import  { 
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOAD_SPINNER,
  LOGIN_FAILED,
  LOGIN_USER_SUCCESS
} from './types';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

/*
export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_SPINNER
    });
    fetch('http://localhost:3000/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    }).then((response) => {
      console.log(response);
      if (response.status === 401) {
        console.log('AUTHENTICATION ERROR!!');
        dispatch({
          type: LOGIN_FAILED
        });
      } else {
        console.log('SUCCESS!!');
        response.json().then(data => {
          console.log(data);
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data
          });
        });
      }
    });
  };
};
*/



