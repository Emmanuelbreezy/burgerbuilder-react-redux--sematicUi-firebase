import * as actionType from './actionTypes2';
import axios from '../../../axios';


export const dismissOpenSucModal = () => {
  return{
    type:actionType.DISMISS_OPEN_SUC_MODAL
  };
};

export const purchaseInit = () => {
  return{
    type:actionType.PURCHASE_INIT
  };
};


export const purchaseBurgerSuccess = (id,orderData) => {
	return{
		type:actionType.PURCHASE_BURGER_SUCCESS, 
		orderId:id,
		orderData:orderData
	};
};


export const purchaseBurgerFail = () => {
	return{
		type:actionType.PURCHASE_BURGER_FAIL
	};
};

export const purchaseBurgerStart = () => {
  return{
    type:actionType.PURCHASE_BURGER_START
  };
};


export const purchaseBurger = (orderData,token) => {
	return dispatch => {
    dispatch(purchaseBurgerStart());
		axios.post('/orders.json?auth='+ token,orderData) 
             .then(response =>{
                    if (response){
                        if (response.status === 200) {
       				        console.log(response,'RESPONSE DATA');
                            //this.setState({openSuc:true,status:200,loaded:false});
                            //this.props.history.push('/');
                            dispatch(purchaseBurgerSuccess(response.data.name,orderData));

                        }else{
                            console.log(response,'ERROR RESPONSE DATA');

                            //this.setState({loaded:false,openSuc:false,status:400});
                            dispatch(purchaseBurgerFail());
                        }
                }
           	  })
            .catch(error=>{
                  console.log(error,'ERROR DATA');

                   //this.setState({loaded:false,status:400,openSuc:false});
                    dispatch(purchaseBurgerFail());

           })


	};
};

export const fetchOrderSuccess = (orders) => {
  return{
    type:actionType.FETCH_ORDERS_SUCCESS,
    orders:orders
  };
};

export const fetchOrderFail = () => {
  return{
    type:actionType.FETCH_ORDERS_FAIL,
  };
};

export const fetchOrderStart = () => {
  return{
    type:actionType.FETCH_ORDERS_START
  };
};                                          


export const fetchOrders = (token,userId) => {
  return dispatch => {
    dispatch(fetchOrderStart());
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('/orders.json'+queryParams)
            .then((response) =>{
               console.log(response,"INSID ACTION");
                const fetchedOrders = [];     
                  if(response.data){
                    for(let key in response.data){
                      const obj = {...response.data[key],id:key};
                      fetchedOrders.push(obj);
                    }
                  }
                    dispatch(fetchOrderSuccess(fetchedOrders));
                   //this.setState({orders:fetchedOrders,loading:false});
                 
           }).catch((error)=>{
                  console.log(error,'Error DATA')
                  dispatch(fetchOrderFail());
                  // this.setState({error:true,loading:false});
            })
    
  };
};

