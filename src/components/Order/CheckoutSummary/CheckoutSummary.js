import React from 'react';
import { Button,Grid,Header,Responsive} from 'semantic-ui-react';
import Burger from '../../Burger/Burger';




const CheckoutSummary = (props)=>{
		   
		return (
			<Responsive as={Grid} textAlign="center" style={{ marginTop: "2em"}}>
                <Grid.Row>
                <Grid.Column>
                   <Header as="h2">We hope it tastes great</Header>
					<Burger ingredients={props.ingredients}/>
		            <Button onClick={props.cancelcheckout}  size='medium' content='CANCEL'/>
		            <Button onClick={props.checkout} size='medium'  color='green' content='CONTINUE'/>
                </Grid.Column>
             </Grid.Row>
 			</Responsive>
		);
	}

export default CheckoutSummary;
