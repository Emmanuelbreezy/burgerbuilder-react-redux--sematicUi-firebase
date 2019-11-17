import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios';

import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



class Checkout extends Component {
	
	cancelcheckoutHandler = () => {
		this.props.history.goBack();
	}

	checkoutHandler  = () =>{
		this.props.history.replace('/checkout/contact');

	}
	render() {
		let summary = <Redirect to="/" />
		if(this.props.ings){
			const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
			summary = (
				<Aux>
					{purchasedRedirect}
					<CheckoutSummary 
					cancelcheckout={this.cancelcheckoutHandler}
					checkout={this.checkoutHandler}
					ingredients={this.props.ings}/>
		            <Route path={this.props.match.path + '/contact'} component={ContactData}  />
				</Aux>

              );
		}
		return summary;
	}
}

const mapStateToProps = (state) => {
    return {
        ings:state.burgerbuilder.ingredients,
        purchased:state.order.purchased
    };
}

export default connect(mapStateToProps)(WithErrorHandler(Checkout,axios));