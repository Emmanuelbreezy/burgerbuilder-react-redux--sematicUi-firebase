import React,{Component} from 'react';
import {
    List,
    Header
    } from 'semantic-ui-react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';


class OrderSummary extends Component{



    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log('[OrderSummary] DidUpdate',prevProps,' ',snapshot);

    }
    

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
                    .map(igKey =>{
                        return (<List.Item as='li' value='*' key={igKey}><span style={{transform:"capitalize",fontSize:"15px",fontWeight:"bold"}}>{igKey}:  </span><span>{this.props.ingredients[igKey]}</span></List.Item>);
                    });
        return(

            <Aux>
                <p>A delicious burger with the following ingredients:</p>
                <List as='ol' ordered>
                    {ingredientsSummary}
                </List>
                <Header as="h4">Total Price: {this.props.price.toFixed(2)}</Header>
                <p>Continue to Checkout?</p>
            </Aux>
        );
    }

}

export default OrderSummary;