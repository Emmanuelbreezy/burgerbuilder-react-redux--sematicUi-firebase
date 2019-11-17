import React from 'react';
import {Segment} from 'semantic-ui-react';


const Order = (props) =>{

	 const ingredients = [];
	 for(let ingredientName in props.Ingredients){
	 	ingredients.push(
	 		{
	 			name:ingredientName, 
	 			amount:props.Ingredients[ingredientName]
	 		})
	 }

	 const IngredientOutput = ingredients.map(ig =>{
	 	return (<span
	 	       style={{textTransform:'capitalize',display:'inline-block',margin:'0 8px', border:'1px solid #ccc', padding:'5px'}}
	 	       key={ig.name}>{ig.name} ({ig.amount})</span>);
	 });


	return(
        
        <Segment>
          <p><strong>Ingredient</strong>: {IngredientOutput}</p>
          <p><strong>Price</strong>: USD {props.price.toFixed(2)}</p>
        </Segment>

		);
}


export default Order;