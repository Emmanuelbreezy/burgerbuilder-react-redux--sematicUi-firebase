import React,{Component} from 'react';
import {Segment,Message,TransitionablePortal} from 'semantic-ui-react';
import Aux from '../Auxiliary/Auxiliary';


const WithErrorHandler = (WrappedComponent,axios) =>{

  return class extends Component {
    constructor(props){
      super(props);
      console.log('CONSTRUCTOR');
      this.reqInterceptor =  axios.interceptors.request.use(req =>{
        this.setState({error:null,errorBoolean:false});
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res=>res,error=>{
        this.setState({error:error,errorBoolean:true});
      })
    }
  	state = {
  		error:null,
  		errorBoolean:false
  	}
    

  	 // componentDidMount(){
  	 	
  	 // }

     componentWillUnmount(){
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.request.eject(this.resInterceptor);
     }

  	 errorConfirmedHandler = () =>{
  	 	this.setState({error:null,errorBoolean:false});
  	 }
  	render(){

  		return (
			<Aux>
			   <TransitionablePortal open={this.state.errorBoolean} transition={{animation:'fly right',duration:1000}}>
                 <Segment raised vertical compact  style={{ 
                 	left:'5%',
                 	position:'fixed',
                 	top:'10%',
                 	zIndex:1000,
                 }}>
                 <Message 
                 onDismiss={this.errorConfirmedHandler}
                 floating 
                 negative icon='exclamation triangle' 
                 header="We're sorry an error occured" 
                 content={this.state.error ? this.state.error.message: null} />
                </Segment>
               </TransitionablePortal>
			   <WrappedComponent {...this.props} />
			</Aux>
		);
  	};
  }  
}

export default WithErrorHandler;