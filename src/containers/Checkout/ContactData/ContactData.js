import React, { Component } from 'react';
import { connect } from 'react-redux';
import {

    Grid,
    Responsive,
    Form,
    Message,
    Header,
    Segment,
    Dropdown
    } from 'semantic-ui-react';

import axios from '../../../axios';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import MessageModal from "../../../components/UI/Message/Message";
import WithErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as burgerbuilderActions from '../../../store/actions/burgerAction/burgerIndex';
import {updateObject,checkValid} from '../../../shared/utility';



class ContactData extends Component {
	
	state ={
		orderForm:{
			firstname:{
				value:'',
				valid:false,
				invalid:false,
        touched:false,
				validation:{
					required:true
				}
			},
			email:{
				value:'',
				valid:false,
				invalid:false,
        touched:false,
				validation:{
					required:true,
          isEmail:true
				}
			},
			street:{
				value:'',
				valid:false,
				invalid:false,
        touched:false,
				validation:{
					required:true
				}
			},
			postalCode:{
				value:'',
				valid:false,
				invalid:false,
        touched:false,
				validation:{
					required:true
				}
			},
		    country:{
		    	value:'',
		    	valid:false,
				  invalid:false,
          touched:false,
		    	validation:{
					required:true
				}
		    },
	        deliveryMethod:{
	        	value:'',
	        	valid:false,
            invalid:false,
            touched:false,
	        	validation:{
					required:true
				}
	       }
	    },

        submitted: false,
        // loaded:false,
        // openSuc:false,
        error: false,

        formIsValid:false

	}

	ContactDataHandler = (event) =>{
		event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
           formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
             ingredients:this.props.ings,
             price:this.props.totprice,
             orderData:formData,
             userId:this.props.userId
            }

        this.props.onOrderBurger(order,this.props.token);
        // axios.post('/orders.json',order) 
        //      .then(response =>{
        //          console.log(response,'RESPONSE DATA')
        //          this.setState({loaded:false,openSuc:false});
        //             if (response){
        //                 if (response.status === 200) {
        //                     this.setState({openSuc:true,status:200,loaded:false});
        //                     this.props.history.push('/');

        //                 }else{
        //                     this.setState({loaded:false,openSuc:false,status:400});
        //                 }
        //          }
        //    })
        //     .catch(error=>{
        //           console.log(error,'Error DATA')
        //            this.setState({loaded:false,status:400,openSuc:false});
        //    })
        
	}
	successConfirmedHandler = () =>{
        //this.setState({openSuc:false});
        this.props.onDismissOpenSuc();

    }
    handlerForm = (e,{name,value})  => {  		
  		const singleorderEle =  updateObject(this.state.orderForm[name],{
        value: value,
        valid: checkValid(value,this.state.orderForm[name].validation),
        invalid: !checkValid(value,this.state.orderForm[name].validation),
        touched:true
      });
       const orderFF = updateObject(this.state.orderForm,{
        [name]: singleorderEle
       });
  		let formisvalid = true;

  		for(let inputIdentifier in orderFF){
  			formisvalid = orderFF[inputIdentifier].valid && formisvalid;
  		}

  		this.setState({orderForm:orderFF,formIsValid:formisvalid});
    	}
	render() {
		const Succmesg = this.props.openSuc ? (<MessageModal messopen={this.state.openSuc} dismiss={this.successConfirmedHandler} />):null;
           

        const posted = this.props.loaded ? true : false;
		    const statusBoolean = this.props.status === 200 ? true : false;
        const statusError = this.props.status ===  400 ? true : false;

        const Successmessage = (<Message success header='Form Completed' content="Posted contents successfully!!" />);
        const Errormessage = (<Message error header="Something went wrong" content="Check your connection properly" />);
       //  const flag = (item) => Flag name={item.countrycode} />
        const options = [
           {key: 'ng' ,flag:'ng', text:'Nigeria',value:'nigeria'},
           {key: 'ao' ,flag:'ao', text:'Angola',value:'angola'},
           {key: 'dz' ,flag:'dz', text:'Algeria',value:'algeria'},
           {key: 'us' ,flag:'us', text:'America',value:'america'},
           {key: 'ad' ,flag:'ad', text:'Andorra',value:'togo'},
           {key: 'ar' ,flag:'ar', text:'Argentina',value:'togo'},
           {key: 'at' ,flag:'at', text:'Austria',value:'togo'},
           {key: 'bj' ,flag:'bj', text:'Benin',value:'togo'},
        ];

        const deliveryoption = [
           {key: 'cptest' , text:'Cheapest', value:'cheapest'},
           {key: 'ftest' , text:'Fastest',value:'fastest'},


        ];
		return (
			<Aux>
			{Succmesg}
			<Responsive as={Segment}  style={{ marginTop: "1em"}}>
                <Grid   textAlign="center" >
                <Grid.Row>
                  <Grid.Column>
                   <Header> Contact Details </Header>
                   <Form loading={posted} onSubmit={this.ContactDataHandler} success={statusBoolean} error={statusError}>
                     <Form.Group widths='equal'>
                        <Form.Input  label='Userame' placeholder='Userame' value={this.state.orderForm['firstname']['value']} error={this.state.orderForm['firstname']['invalid']} name="firstname" onChange={this.handlerForm}  />  
                        <Form.Input  label='Email' placeholder='Email' value={this.state.orderForm['email']['value']} name="email" error={this.state.orderForm['email']['invalid']}  onChange={this.handlerForm} />  
                        <Form.Input  label='Address' placeholder='Address' value={this.state.orderForm['street']['value']} name="street"error={this.state.orderForm['street']['invalid']}  onChange={this.handlerForm} />  
                        <Form.Input  label='Postal Code' placeholder='Postal Code' value={this.state.orderForm['postalCode']['value']} name="postalCode"  error={this.state.orderForm['postalCode']['invalid']}  onChange={this.handlerForm} />  
                     </Form.Group>
                    <Form.Group widths='equal'>
                        <Dropdown  placeholder="Select Country" openOnFocus closeOnEscape fluid search selection value={this.state.orderForm['country']['value']} name="country" error={this.state.orderForm['country']['invalid']} options={options} onChange={this.handlerForm}/>
                        <Form.Select  label='Delivery' options={deliveryoption}  placeholder='Select Method' value={this.state.orderForm['deliveryMethod']['value']} name="deliveryMethod" error={this.state.orderForm['deliveryMethod']['invalid']} onChange={this.handlerForm}/> 
                     </Form.Group>
                     { statusBoolean ? Successmessage : statusError ? Errormessage : null}
                    <Form.Button color="brown" size='medium' disabled={!this.state.formIsValid}> ORDER </Form.Button>

                    </Form>
                   </Grid.Column>
            </Grid.Row>
            </Grid>
      </Responsive>
      </Aux>

		);
	}
}

const mapStateToProps = (state) => {
    return {
        ings:state.burgerbuilder.ingredients,
        totprice:state.burgerbuilder.totalPrice,
        loaded:state.order.loaded,
        openSuc:state.order.openSuc,
        status:state.order.status,
        token:state.auth.token,
        userId:state.auth.userId
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onOrderBurger:(orderData,token) => dispatch(burgerbuilderActions.purchaseBurger(orderData,token)),
        onDismissOpenSuc:() => dispatch(burgerbuilderActions.dismissOpenSucModal())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(ContactData,axios));








//DO A CUSTOM VALIDATION WITH THIS TECHNIQUES 
// CHECKVALIDITY FUNCTION THAT WRAP 
// orderForm:{
// 			firstname:{
// 				value:'',
// 				valid:false
// 				minLength:0,
// 				required:true
// 			},
// 			email:{
// 				value:'',
// 				valid:false
// 				minLength:0,
// 				required:true
// 			},
// 			street:{
// 				value:'',
// 				valid:false
// 				minLength:0,
// 				required:true
// 			},
// 			postalCode:{
// 				value:'',
// 				valid:false
// 				minLength:0,
// 				required:true
// 			},,
// 		    country:{
// 				value:'',
// 				valid:false
// 				minLength:0,
// 				required:true
// 			},,
// 	        deliveryMethod:{
// 				value:'fastest',
// 				valid:false
// 				minLength:0,
// 				required:true
// 			},
// 	    },