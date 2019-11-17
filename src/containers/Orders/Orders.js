import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,Responsive,Dimmer,Segment,Loader,Header} from 'semantic-ui-react';

import Order from '../../components/Order/Order';
import axios from '../../axios';
import * as burgerbuilderActions from '../../store/actions/burgerAction/burgerIndex';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		invalid: false
	}

    componentDidMount() {
    		this.props.onFetchOrder(this.props.token, this.props.userId);
		}


	render() {
		let burgerFetch = (
				<Dimmer.Dimmable as={Container} textAlign='center' style={{paddingTop:"40%"}}>
                    <Dimmer inverted active>
                         <Loader size='large' inverted />
                      </Dimmer>
                  </Dimmer.Dimmable>
             );

			if(this.props.orders.length > 0){
				const orderFetched = this.props.orders.map((order)=>{
					return <Order key={order.id} Ingredients={order.ingredients} price={+order.price} /> // THE +ORDER.PRICE MEANS CONVERTING STRING TO INTEGER I.E A NUMBER 
				});
				burgerFetch = (
						 <Responsive as={Container} style={{ marginTop: "1em"}}>
				  			 <Header as="h1">ORDERS</Header>
                               {orderFetched}
		    			 </Responsive>
				);
		
			}else if (this.props.orders.length < 0){
			  console.log(this.props.orders);
			  burgerFetch = (<Segment><Header as='h3'>No Order made</Header><p>Go to the BurgerBuilder to make a order</p></Segment>);
			}

	    

		if(this.props.error){
              	burgerFetch = <Segment><Header as='h3'>Orders can't be loaded.</Header><p>Check your connection,Try again</p></Segment>;
		    }

		return (
		   <div>
            {burgerFetch}
           </div>
		);
	}
}


const mapStateToProps = (state) => {
    return {
        error:state.order.error,
        orders:state.order.orders,
        token:state.auth.token,
        userId:state.auth.userId,
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchOrder:(token,userId) => dispatch(burgerbuilderActions.fetchOrders(token,userId))
    };
};

export default  connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));