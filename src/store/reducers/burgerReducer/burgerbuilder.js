import * as actionType from '../.././actions/burgerAction/actionTypes2';
import {updateObject} from '../../../shared/utility';
const initialState = {
	    ingredients:null,
        totalPrice:4,
        error: false,
        loading:false,
        building:false	
}

const  INGREDIENT_PRICES = {
    		salad:0.5,
    		cheese: 0.4,
   			 meat: 1.3,
    		bacon: 0.7
};

const resortIngredient= (ingredients) =>{
	const dataSorted = Object.entries(ingredients).sort().reverse().reduce((obj,[k,v])=>({
            ...obj,
            [k]:v
        }), {});
      return dataSorted;
}

const addIngredient = (state,action) =>{
	const updateIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
	const updateIngredients = updateObject(state.ingredients,updateIngredient);
	const updateState = {
		ingredients:updateIngredients,
		totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
		building:true
	}
	return updateObject(state,updateState);
}

const removeIngredient = (state,action) =>{
	const updateIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
	const updateIngs = updateObject(state.ingredients,updateIng);
	const updateSta = {
		ingredients:updateIngs,
		totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
		building:true
	}
	return updateObject(state,updateSta);
}
const setIngredient = (state,action) =>{
	return updateObject(state,{ingredients: resortIngredient(action.ingredients),totalPrice:4,error:false,loading:false,building:false});
}

const fetchIngredient = (state,action) =>{
	  return updateObject(state,{loading:false,error:true});
}

const BurgerReducer = (state = initialState, action) =>{
	switch(action.type){
		case actionType.ADD_INGREDIENTS: return addIngredient(state,action);
		case actionType.REMOVE_INGREDIENTS:return removeIngredient(state, action);
		case actionType.SET_INGREDIENTS: return setIngredient(state,action);
		case actionType.FETCH_INGREDIENTS_FAILED: return fetchIngredient(state, action);
		default:return state;
	}
};

export default BurgerReducer;