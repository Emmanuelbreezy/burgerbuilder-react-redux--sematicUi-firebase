import * as actionType from '../.././actions/burgerAction/actionTypes2';
import {updateObject} from '../../../shared/utility';


const initialState = {
		orders:[],
        //error: false,
        loaded:false,
        openSuc:false,
        status:null,
        purchased:false,
        error:false,
		loading: true
}

const purchasInit = (state,action) =>{
	return  updateObject(state,{purchased:false});
}
const purchaseStart = (state,action) =>{
	return  updateObject(state,{loaded:true,openSuc:false});
}
const purchaseSuccess = (state,action) =>{
	const newOrder = {
		           ...action.orderData,
		           id:action.orderId
			}
	return updateObject(state,{orders: state.orders.concat(newOrder),loaded:false,purchased:true,openSuc:true,status:200});
}
const purchaseFail = (state,action) =>{
	return  updateObject(state,{purchased:false});
}
const dismissModal = (state,action) =>{
	return updateObject(state,{openSuc:false});
}
const fetchOrderStart = (state,action) =>{
	return updateObject(state,{loading:true});
}
const fetchOrderSuccess = (state,action) =>{
	return updateObject(state,{loading:false,orders:action.orders});
}
const fetchOrderFail = (state,action) =>{
	return updateObject(state,{loading:false,error:true});
}

const OrderReducer = (state = initialState, action) =>{
	switch(action.type){
		case actionType.PURCHASE_INIT:   return purchasInit(state,action);
		case actionType.PURCHASE_BURGER_START: return purchaseStart(state, action);
		case actionType.PURCHASE_BURGER_SUCCESS:return purchaseSuccess(state,action);
		case actionType.PURCHASE_BURGER_FAIL:  return purchaseFail(state,action);
		case actionType.DISMISS_OPEN_SUC_MODAL: return dismissModal(state, action);
		case actionType.FETCH_ORDERS_START:  return fetchOrderStart(state, action);
		case actionType.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state,action);
		case actionType.FETCH_ORDERS_FAIL: return fetchOrderFail(state, action);
		default:return state;
	
}
};

export default OrderReducer;