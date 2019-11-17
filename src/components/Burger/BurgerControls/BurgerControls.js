import React from 'react';
import {
    Container,
    Header,
    Button
    } from 'semantic-ui-react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';


const controls = [
  {label:"Salad", type:"salad"},
  {label:"Bacon", type:"bacon"},
  {label:"Cheese", type:"cheese"},
  {label:"Meat", type:"meat"},
];

const BurgerControls = (props) =>{
                        //disabled={props.disabled[ctrl.type]}
    //
    return (
    <Container fluid  className="BurgerControlsRend">
        <div className={classes.BurgerControls}>
            <div style={{margin:"2em"}}><Header as="h3" className="BurgerControlsHeader">Current Price: {props.price}</Header></div>
            {controls.map(ctrl =>(
                <BurgerControl data-test="BurgerControlComp"  key={ctrl.label} label={ctrl.label} 
                        added={()=>props.ingredientAdded(ctrl.type)} 
                        removed={()=>props.ingredientRemoved(ctrl.type)} 

                        />
            ))}
            <div style={{margin:"2em"}}><Button  onClick={props.ordered} size='huge'  color='green' content={props.isAuth ?'ORDER NOW': 'SIGN UP TO ORDER'} disabled={!props.purchasable} /></div>
        </div>
    </Container>
    );
};

export default BurgerControls;