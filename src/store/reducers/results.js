import * as actionTypes from "../actions/actionTypes";
import {updateObject} from '../../shared/utility'; //UTILITY FUNCTION TO REDUCE MUCH CODE USING A FUNCTION
const initialState = {
	results: []
};

const deleteResult = (state,action) =>{
	const updatedArray = state.results.filter((result) => result.id !== action.ID);
	return updateObject(state,{results:updatedArray});
}
const ResultReducer = (state = initialState,action)=>{

	 switch(action.type){
	 	case actionTypes.STORE_RESULT:
	 		return updateObject(state,{results:state.results.concat({id:new Date(),value:action.ctrvalue})});
	 		// return{
	 		// 	...state,
	 		// 	results:state.results.concat({id:new Date(),value:action.ctrvalue})

	 		// }
	 	case actionTypes.DELETE_RESULT:
	 		return deleteResult(state,action);
	 		// return{
	 		// 	...state,
	 		// 	results:updatedArray
	 		// }

	 	default:
	 	  return state;
	 }

};

export default ResultReducer;
