import React, { Component } from 'react';
import { connect } from 'react-redux';


import {Grid,Responsive,Button,Container} from 'semantic-ui-react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import * as actionTypes from "../../store/action";
import * as actionCreators from "../../store/actions/index";

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render() {
        const rst = this.props.storedResults.map( (strR) => {
                      return <li key={strR.id} onClick={() => this.props.onDeleteResult(strR.id)}>{strR.value}</li>
                    })
        return (
            <Responsive as={Container} textAlign="center" style={{ marginTop: "1em"}}>
                        <Grid>
                            <Grid.Row >
                            <Grid.Column>
                                <CounterOutput value={this.props.ctr} />
                                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                                <CounterControl label="Decrement" clicked={this.props.counterChangedHandler}  />
                                <CounterControl label="Add 10" clicked={this.props.counterAddHandler}  />
                                <CounterControl label="Subtract 15" clicked={this.props.counterMinusHandler}  />
                                <br />
                                <Button color="black" onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</Button>

                                <hr />
                                <ul>
                                    {rst}
                                </ul>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
         </Responsive>
                  
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementCounter:() => dispatch(actionCreators.increment()),
        counterChangedHandler:() => dispatch(actionCreators.decrement()),
        counterAddHandler:() => dispatch(actionCreators.add(10)),
        counterMinusHandler:() => dispatch(actionCreators.subtract(15)),
        onStoreResult: (res_) => dispatch(actionCreators.storeResult(res_)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);