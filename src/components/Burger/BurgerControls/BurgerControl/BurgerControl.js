import React from 'react';
import {
  Button
  } from 'semantic-ui-react';
import classes from './BurgerControl.module.css';

const BurgerControl = props => {
    return (
           <div className={classes.BurgerControl}>
            <div style={{width:'100px'}}><h5>{props.label}</h5></div>
            <div>
              <Button.Group width='7'>
              <Button onClick={props.removed} attached='left' 
                      basic color='grey' content='Less' icon='minus' 
                      disabled={props.disabled}
                />
              <Button onClick={props.added} attached='right' color='orange' content='More' icon='plus' />
              </Button.Group>
            </div>
            </div>
    );
};

export default BurgerControl;