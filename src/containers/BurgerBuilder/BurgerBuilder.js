
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,Grid,Responsive,Dimmer,Segment,Loader,Header} from 'semantic-ui-react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import ModalUI from "../../components/UI/Modal/Modal";
import axios from '../../axios';
import * as burgerbuilderActions from '../../store/actions/burgerAction/burgerIndex';


export class BurgerBuilder extends Component {
    state = {
        purchasing:false,
        loadingSuccess:false,
        
    }

    componentDidMount(){
        console.log(this.props);
        this.props.onInitIngredient();
        // axios.get('/ingredients.json')
        //     .then((response) =>{
        //          console.log(response,'RESPONSE DATA')
        //          if(response){     
        //             const dataF = response.data;
        //             //const dataSorted = Object.keys(dataF).sort((a,b)=>{return dataF[b] - dataF[a]} );
        //             const dataSorted = Object.entries(dataF).sort().reverse().reduce((obj,[k,v])=>({
        //                 ...obj,
        //                 [k]:v
        //             }), {});
        //             console.log(dataSorted);
        //            this.setState({ingredients:dataSorted});
        //          }else{
        //             this.setState({error:true});
        //          }
        //    })
        //     .catch((error)=>{
        //           console.log(error,'Error DATA')
        //            this.setState({loading:false,purchasing:false,error:true});
        //    })
    }




    updatepurchaseState(ingredients){
        const sum = Object.keys(ingredients)
                    .map(igKey =>{
                        return ingredients[igKey];
                    })
                    .reduce((sum,el)=>{
                        return sum + el;
                    },0);
        return sum > 0;
    }
    // addIngredientHandler = (type) =>{
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //             ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldprice = this.state.totalPrice;
    //     const newprice = oldprice + priceAddition;
    //     this.setState({totalPrice: newprice, ingredients:updatedIngredients})
    //     this.updatepurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = (type) =>{
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount <= 0){
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //             ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldprice = this.state.totalPrice;
    //     const newprice = oldprice - priceDeduction;
    //     this.setState({totalPrice: newprice, ingredients:updatedIngredients})
    //     this.updatepurchaseState(updatedIngredients);
        
    // }

    OpenModalHandler = () => {
        if (this.props.isUserAuthenticatd) {
            this.setState({purchasing:true});
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    CloseModalHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        // const queryParams = [];
        // for(let i in this.props.ings){
        //     queryParams.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.props.ings[i]));
        // }
        // queryParams.push('price='+ this.props.totprice);
        // const queryString = queryParams.join('&');
        this.props.history.push('/checkout');
         
             
    }

    

    render() {

        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummary = null; 

        let burger = 

             this.props.error ? <Segment><Header as='h3'>Ingredients can't be loaded.</Header><p>Check your connection,Try again</p></Segment> :
             (<Dimmer.Dimmable as={Container} textAlign='center' style={{paddingTop:"40%"}}>
                    <Dimmer inverted active>
                         <Loader size='large' inverted />
                      </Dimmer>
                  </Dimmer.Dimmable>
             );


            


        if(this.props.ings){
                burger = (
                    <Aux>
                    <Responsive as={Grid} {...Responsive.onlyMobile} textAlign="center" style={{ marginTop: "2em"}}>
                            <Grid.Row>
                            <Grid.Column>
                                <Burger ingredients={this.props.ings}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <BurgerControls 
                                            ingredientAdded={this.props.onIngredientAdded}
                                            ingredientRemoved={this.props.onIngredientRemove}
                                            disabled={disabledInfo}
                                            price={this.props.totprice}
                                            purchasable={this.updatepurchaseState(this.props.ings)}
                                            ordered={this.OpenModalHandler}
                                            isAuth={this.props.isUserAuthenticatd}
                                        
                                            />
                                </Grid.Column>
                        </Grid.Row>
                </Responsive>

                 <Responsive as={Grid} minWidth={768} textAlign="center" style={{ marginTop: "1em"}}>
                            <Grid.Row >
                            <Grid.Column width={7}>
                                <Burger ingredients={this.props.ings}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <BurgerControls  
                                            ingredientAdded={this.props.onIngredientAdded}
                                            ingredientRemoved={this.props.onIngredientRemove}
                                            disabled={disabledInfo}
                                            price={this.props.totprice}
                                            purchasable={this.updatepurchaseState(this.props.ings)}
                                            ordered={this.OpenModalHandler}
                                        
                                            />
                                </Grid.Column>
                        </Grid.Row>
                </Responsive> 
                </Aux>);

                orderSummary = <OrderSummary ingredients={this.props.ings} price={this.props.totprice} />;
                if (this.props.loading){
                    orderSummary = (
                          <Dimmer inverted active>
                             <Loader inverted />
                          </Dimmer>
                    );

                }
        }



       

        return (
            <Aux data-test="BurgerControlsAUX">

            
            {this.state.purchasing ?
               (<ModalUI modalopen={this.state.purchasing} close={this.CloseModalHandler} purchaseClick={this.purchaseContinueHandler}>
                  {orderSummary}
               </ModalUI>) : null
            }

            {burger}
                
            </Aux>
            

        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings:state.burgerbuilder.ingredients,
        totprice:state.burgerbuilder.totalPrice,
        error:state.burgerbuilder.error,
        loading:state.burgerbuilder.loading,
        isUserAuthenticatd: state.auth.token !== null
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIngredientAdded:(ingName) => dispatch(burgerbuilderActions.addIngredient(ingName)),
        onIngredientRemove:(ingName) => dispatch(burgerbuilderActions.removeIngredient(ingName)),
        onInitIngredient:(ingName) => dispatch(burgerbuilderActions.initIngredients()),
        onInitPurchase:() => dispatch(burgerbuilderActions.purchaseInit()),
        onSetAuthRedirectPath:(path)=> dispatch(burgerbuilderActions.setAuthRedirectPath(path))
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder,axios));