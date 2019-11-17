import * as actionType from './actionTypes2';
import axios from '../../../axios';


export const addIngredient = (ingName) => {
	return{
		type:actionType.ADD_INGREDIENTS, 
		ingredientName:ingName
	};
};

export const removeIngredient = (ingName) => {
	return{
		type:actionType.REMOVE_INGREDIENTS, 
		ingredientName:ingName
	};
};

export const setIngredients = (loadIngredients) => {
	return{
		type:actionType.SET_INGREDIENTS, 
		ingredients:loadIngredients
	};
};

export const fetchIngredientsFailed = () => {
	return{
		type:actionType.FETCH_INGREDIENTS_FAILED, 
	};
};

export const initIngredients = () => {
	return dispatch => {
		axios.get('/ingredients.json')
            .then((response) =>{
                 if(response){     
                    dispatch(setIngredients(response.data));
                   //this.setState({ingredients:dataSorted});
                 }else{
                   dispatch(fetchIngredientsFailed());
                 }
           })
            .catch((error)=>{
                  console.log(error,'Error DATA')
                   dispatch(fetchIngredientsFailed());

                   //this.setState({loading:false,purchasing:false,error:true});
           })
	};
};