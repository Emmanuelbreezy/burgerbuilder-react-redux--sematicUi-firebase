import * as actionTypes from './actionTypes';


export const saveResult = (res_)=>{
	return{
		type:actionTypes.STORE_RESULT,
		ctrvalue:res_
	};
}

export const storeResult = (res_)=>{
	return (dispatch)=>{ // getStateA
	 setTimeout(() =>  {
	 	// const oldCounter = getState().ctr.counter; // OLD STATE SHOULD NOT BE GOTTEN FROM HERE
	 	// dispatch(saveResult(oldCounter));
	 	dispatch(saveResult(res_));
	 }, 2000);
	}
};

export const deleteResult = (id)=>{
	return{
		type:actionTypes.DELETE_RESULT,
		ID:id
	};
};