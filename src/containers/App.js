import React, {Component,Suspense} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

//import Blog from './Blog/Blog';
//import './App.css';
import {Responsive} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../hoc/Layout/Layout';
//import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import * as burgerbuilderActions from '../store/actions/burgerAction/burgerIndex';


//import Checkout from '';
import  Logout from './Auth/Logout/Logout';

const Blog = React.lazy(()=> import('./Blog/Blog'));
const Counter = React.lazy(()=> import('./Counter/Counter'));
const BurgerBuilder = React.lazy(()=> import('./BurgerBuilder/BurgerBuilder'));
const Orders = React.lazy(()=> import('./Orders/Orders'));
const Checkout = React.lazy(()=> import('./Checkout/Checkout'));
const Auth = React.lazy(()=> import('./Auth/Auth'));


  class App extends Component {

    componentDidMount() {
      this.props.onTryAutoSignup();
    }
    //          <Blog/> 
   render(){
     let routes =(
          <Switch>
            <Suspense fallback={<div>Loading</div>}>
                <Route path="/auth" exact component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
            </Suspense>
                <Redirect to="/" />
          </Switch>
      );
     if (this.props.isUserAuthenticatd) {
      routes = (
            <Switch>
              <Route path="/logout" exact component={Logout} />
                <Suspense fallback={<div>Loading</div>}>
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/orders" component={Orders} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/counter" exact component={Counter} />
                  <Route path="/auth" exact component={Auth} />
                  <Route path="/" exact component={BurgerBuilder} />
              </Suspense>
                  <Redirect to="/" />
          </Switch>
        );
     }
      return (
        <BrowserRouter basename="/">
             <Responsive>
             {/*<BrowserRouter basename="/"> MAKES THE example.com/ add ti the /posts/ */}
                <Layout>
                  {routes}
                </Layout>
             </Responsive>
        </BrowserRouter>
       
      );
    }
    }


const mapStateToProps = (state) => {
    return {
        isUserAuthenticatd: state.auth.token !== null
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onTryAutoSignup:() => dispatch(burgerbuilderActions.authAuthState())
    };
};


 
export default connect(mapStateToProps,mapDispatchToProps)(App);
 