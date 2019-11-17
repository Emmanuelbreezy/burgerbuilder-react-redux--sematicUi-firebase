import React, { Component } from 'react';
import { connect } from 'react-redux';  
import {Redirect} from 'react-router-dom';

import {
    Grid,
    Responsive,
    Form,
    Message,
    Header,
    Segment,
    Container
    } from 'semantic-ui-react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as burgerbuilderActions from '../../store/actions/burgerAction/burgerIndex';
import {updateObject,checkValid} from '../../shared/utility';




class Auth extends Component {

	
	state = {

		orderForm:{
			email:{
				value:'',
				valid:false,
				touched:false,
				invalid:false,
				validation:{
					required:true,
					isEmail:true,
				}
			},
			password:{
				value:'',
				valid:false,
				touched:false,
				invalid:false,
				validation:{
					required:true,
					isupperCase:true,
					isnumeric:true,
					minLength:6,
				}
			}
	    },

        submitted: false,
        error: false,
        formIsValid:false,
        isSignup:true

	}

	componentDidMount() {
		if (!this.props.building && this.props.authRedirectPath !=='/') {
			this.props.onSetAuthRedirectPath();
		}
		
	}

	handlerForm = (e,{name,value})  => {
		const singleorderEle = updateObject(this.state.orderForm,{
            value:value,
            valid: checkValid(value, this.state.orderForm[name].validation),
            invalid: !checkValid(value, this.state.orderForm[name].validation),
            touched: true
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

    	onRegisterUser = (event) =>{
    		event.preventDefault();
    		if (this.state.formIsValid) {
    			this.props.onAuth(this.state.orderForm.email.value,this.state.orderForm.password.value,this.state.isSignup);
    			const oFF = {
					...this.state.orderForm
				};
				oFF['email'].value = '';
				oFF['password'].value = '';
				this.setState({orderForm:oFF});
    		}else{
    			this.setState({error:true});
    			return;
    		}
    	}

    	switchAuthModeHandler = () =>{
    		this.setState(prevState => {
    			return{
    				isSignup:!prevState.isSignup
    			};
    		});
    	}

	render() {
        const load = this.props.loaded ? true : false;
		const statusBoolean = this.props.status === 200 ? true : false;
        const statusError = this.props.status ===  400 ? true : false;

        const Successmessage = (<Message success header='Form Completed' content="Posted contents successfully!!" />);
        const Errormessage = (<Message error header="Something went wrong" content="Check your connection properly" />);

        const  switchNot= this.state.isSignup ? ' Already have an account?' : 'New to us?' ;
        const  switchLabl= this.state.isSignup ? 'SIGN IN' : 'SIGN UP' ;

        let authRedirect = null;
        if (this.props.isUserAuthenticatd) {
        	authRedirect =  <Redirect to={this.props.authRedirectPath} />;
        }

        const ALink = this.state.isSignup ? 'signup':'signin';

		return (
			<Aux>
				{authRedirect}
				<Responsive as={Container}  style={{ marginTop: "1em",textAlign:"center"}} {...Responsive.onlyMobile}>
                <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column width={11}>
                <Segment stacked>
                <br />
                   <Header textAlign='center' as="h2" color="black"> BURGER APP </Header>
                <br />
                   <Form loading={load}  onSubmit={this.onRegisterUser} success={statusBoolean} error={statusError}>
                     <Form.Group widths='equal'>
                     <Form.Field>
	                    	<label style={{textAlign:"left"}}>Email or Phone</label>
	                    	<Form.Input focus={this.state.orderForm['email']['touched']}  fluid icon='mail' textalign='left' placeholder='Email' value={this.state.orderForm['email']['value']} name="email" error={this.state.orderForm['email']['invalid']}  onChange={this.handlerForm} />  
	                </Form.Field>
	                <Form.Field>
	                    	<label style={{textAlign:"left"}}>Password</label>
	                     	<Form.Input focus={this.state.orderForm['password']['touched']} fluid icon='lock' textalign='left'  placeholder='Password' value={this.state.orderForm['password']['value']} name="password" error={this.state.orderForm['email']['invalid']}  onChange={this.handlerForm} />  
	                </Form.Field>

                     </Form.Group>
                     { statusBoolean ? Successmessage : statusError ? Errormessage : null}
                    <Form.Button color="brown" size='large'> {this.state.isSignup ? 'SIGN UP':'SIGN IN'} </Form.Button>
                <br />
                    </Form>
                    <Message>
                    	{switchNot}  <a href={'#'+ ALink} style={{cursor:"pounter"}} onClick={this.switchAuthModeHandler}>{switchLabl}</a>
                    </Message>
                </Segment>
                   </Grid.Column>
            </Grid.Row>
            </Grid>
            </Responsive>

				<Responsive as={Container}  style={{ marginTop: "2em"}} minWidth={768}>
	                <Grid textAlign='center' verticalAlign='middle'>
	                <Grid.Row>
	                  <Grid.Column width={7}>
	                  <Segment stacked>
	                  <br />
	                   <Header textAlign='center' as="h2" color="black"> BURGER APP </Header>
	                   <br />
	                   <Form loading={load} onSubmit={this.onRegisterUser} success={statusBoolean} error={statusError}>
		                    <Form.Field>
		                    	<label style={{textAlign:"left"}}>Email or Phone</label>
		                    	<Form.Input fluid icon='mail' iconPosition='right' textAlign='left' placeholder='Email' value={this.state.orderForm['email']['value']} name="email" error={this.state.orderForm['email']['invalid']}  onChange={this.handlerForm} />  
		                     </Form.Field>
		                     <Form.Field>
		                    	<label style={{textAlign:"left"}}>Password</label>
		                     	<Form.Input fluid icon='lock' iconPosition='right' textAlign='left'  placeholder='Password' value={this.state.orderForm['password']['value']} name="password" error={this.state.orderForm['email']['invalid']}  onChange={this.handlerForm} />  
		                     </Form.Field>
		                     { statusBoolean ? Successmessage : statusError ? Errormessage : null}
		                    <Form.Button size='large' color="brown">{this.state.isSignup ? 'SIGN UP':'SIGN IN'}</Form.Button>
	                  <br />
	                    </Form>
	                    <Message>
                    	{switchNot}  <a href={'#'+ ALink} style={{cursor:"pounter"}} onClick={this.switchAuthModeHandler}>{switchLabl}</a>
	                    </Message>
	            </Segment>
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
    	loaded:state.auth.loaded,
        status:state.auth.status,
        isUserAuthenticatd:state.auth.token !== null,
        building:state.burgerbuilder.building,
        authRedirectPath:state.auth.authRedirectPath

    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAuth:(email,password,isSignup) => dispatch(burgerbuilderActions.authSecure(email,password,isSignup)),
        onSetAuthRedirectPath:()=> dispatch(burgerbuilderActions.setAuthRedirectPath('/'))

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);