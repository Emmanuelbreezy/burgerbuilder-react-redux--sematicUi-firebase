import * as actionType from '../.././actions/burgerAction/actionTypes2';
import {updateObject} from '../../../shared/utility';


const initialState = {
		loaded:false,
        status:null,
        token:null,
        userId: null,
        error:null,
        message:null,
        authRedirectPath:'/'
}

const authStart = (state,action) =>{
	return  updateObject(state,{error: null,loaded:true,status:null});
}
const authSuccess = (state,action) =>{
	return updateObject(state,{token:action.idToken,userId:action.userId,loaded:false,status:200,error:null});
}
const authFail = (state,action) =>{
	return updateObject(state,{loaded:false,status:400,error:action.error});
}

const authLogout = (state,action) =>{
	return updateObject(state,{token:null,userId:null,message:'Logout Successfully',status:null});
}

const setAuthRedirectPath = (state,action) =>{
	return updateObject(state,{authRedirectPath: action.path});
}

const AuthReducer = (state = initialState, action) =>{
	switch(action.type){
		case actionType.AUTH_START: return authStart(state, action);
		case actionType.AUTH_SUCCESS:return authSuccess(state,action);
		case actionType.AUTH_FAIL:   return authFail(state,action);
		case actionType.AUTH_LOGOUT:   return authLogout(state,action);
		case actionType.SET_AUTH_REDIRECT_PATH:   return setAuthRedirectPath(state,action);
		default:return state;
	
}
};  

export default AuthReducer;