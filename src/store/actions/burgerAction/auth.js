import * as actionType from './actionTypes2';
import axios from 'axios';

export const authStart = () => {
  return{
    type:actionType.AUTH_START
  };
};

export const authSuccess = (token,userId) => {
  return{
    type:actionType.AUTH_SUCCESS,
    idToken:token,
    userId:userId
  };
};

export const authFail = (error) => {
  return{
    type:actionType.AUTH_FAIL,
    error:error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expDate');
  localStorage.removeItem('userId');
  return{
    type:actionType.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expTime) => {
  return dispatch => {
  	setTimeout(() => {
  		dispatch(logout());
  	}, expTime *1000);
  };
};

export const authSecure = (email,password,isSignup) => {
  return dispatch => {
    	dispatch(authStart());
    	const data = {
    		email:email,
    		password:password,
    		returnSecureToken:true
    	};
    	let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6ahT4Mm1B_GKGF2_ne4SaZsHgd8_MSzk';
    	if (!isSignup) {
    		url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6ahT4Mm1B_GKGF2_ne4SaZsHgd8_MSzk';
    	}
    	axios.post(url,data)
    		  .then(response =>{
    		  	console.log(response);
    		  	const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

    		  	localStorage.setItem('token',response.data.idToken);
    		  	localStorage.setItem('expDate',expirationDate);
    		  	localStorage.setItem('userId',response.data.localId);
    		  	dispatch(authSuccess(response.data.idToken,response.data.localId));
    		  	dispatch(checkAuthTimeout(response.data.expiresIn));
    		  })
    		  .catch(err =>{
    		  	console.log(err);
    		  	dispatch(authFail(err));
    		  })
  };
};

export const setAuthRedirectPath = (path) => {
  return {
  	type:actionType.SET_AUTH_REDIRECT_PATH,
  	path:path
  };
};



export const authAuthState = () => {
  return dispatch => {
  		const token = localStorage.getItem('token');
  		if(!token){
  			dispatch(logout())
  		}else{
  			const expDate = new Date(localStorage.getItem('expDate'));
  			if (expDate > new Date()) {
  				dispatch(logout());
  			}else{
  				const userId = localStorage.getItem('userId');
  				dispatch(authSuccess(token,userId));
  				dispatch(checkAuthTimeout( (expDate.getTime() - new Date().getTime()) / 1000 ));
  			}

  		}
  };
};