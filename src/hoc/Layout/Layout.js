import React ,{useState} from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Aux from '../Auxiliary/Auxiliary';
import {
  Menu,
  Container,
  Sidebar,Responsive,
  Icon
  } from 'semantic-ui-react';

const Layout = (props) => {
     const [state, setState] = useState({visible:false,activeItem:'burgerbuilder'});


   function activeMenuHandler(e){
   	const name = e.target.name;
     setState({activeItem:name,visible:false});
    }

	return (
  		<Aux>
  		 <Menu fixed="top" style={{backgroundColor:"#703B09"}}>
			    <Responsive as={Container} minWidth={768}>
				<Menu.Menu position="left">
			      <Menu.Item as="a" href='/' style={{color:"#fff"}}  header>BurgerApp</Menu.Item>
				</Menu.Menu>
				<Menu.Menu position="right">
							<Menu.Item active={state.activeItem === 'burgerbuilder'} onClick={activeMenuHandler} to="/" exact as={NavLink}  name="burgerbuilder"  style={{color:"#fff"}}>Burger Builder</Menu.Item>
							<Menu.Item active={state.activeItem === 'blog'} onClick={activeMenuHandler}     to="/blog" as={NavLink}  name="blog"  style={{color:"#fff"}}>Blog</Menu.Item>
							<Menu.Item active={state.activeItem === 'counter'} onClick={activeMenuHandler}     to="/counter" as={NavLink}  name="counter"  style={{color:"#fff"}}>Counter</Menu.Item>
							{props.isUserAuthenticated ? <Menu.Item active={state.activeItem === 'orders'} onClick={activeMenuHandler}     to="/orders" as={NavLink}  name="orders"  style={{color:"#fff"}}>Orders</Menu.Item> : null}
							{!props.isUserAuthenticated 
								? <Menu.Item active={state.activeItem === 'auth'} onClick={activeMenuHandler} to="/auth" as={NavLink}  name="auth"  style={{color:"#fff"}}>Authenticate</Menu.Item>
								:<Menu.Item active={state.activeItem === 'logout'} onClick={activeMenuHandler} to="/logout" as={NavLink}  name="logout"  style={{color:"#fff"}}>Logout</Menu.Item> }

							
				</Menu.Menu>
				</Responsive>

				<Responsive as={Container} {...Responsive.onlyMobile}>
				  <Menu.Menu position="left">
						<Menu.Item onClick={()=>setState({visible:true})} style={{color:"#fff"}}>
								<Icon name='bars' />
						</Menu.Item>
						<Menu.Item to="/" as={NavLink} header style={{color:"#fff"}}>BurgerApp</Menu.Item>
				</Menu.Menu>
				  </Responsive>
        </Menu>

		<br />
		<br />
		<Sidebar.Pushable>

			<Sidebar 
				as={Menu}
				animation="overlay"
				direction="left"
				vertical
				visible={state.visible}
				onHide={()=> setState({visible:false})}
				>
				
				<Menu.Item header></Menu.Item>
				<Menu.Item  as='a' href='/' header>BurgerApp</Menu.Item>
	            <Menu.Item active={state.activeItem === 'burgerbuilder'} onClick={activeMenuHandler} to="/" as={NavLink}  exact name="burgerbuilder">Burger Builder</Menu.Item>
				<Menu.Item active={state.activeItem === 'blog'} onClick={activeMenuHandler}     to="/blog" as={NavLink}  name="blog">Blog</Menu.Item>
				<Menu.Item active={state.activeItem === 'counter'} onClick={activeMenuHandler}     to="/counter" as={NavLink}   name="counter">Counter</Menu.Item>
				{props.isUserAuthenticated ? <Menu.Item active={state.activeItem === 'orders'}  onClick={activeMenuHandler} to="/orders"  as={NavLink} name="orders">Orders</Menu.Item> : null }
				{!props.isUserAuthenticated 
								? <Menu.Item active={state.activeItem === 'auth'} onClick={activeMenuHandler} to="/auth" as={NavLink}  name="auth">Authenticate</Menu.Item>
								:<Menu.Item active={state.activeItem === 'logout'} onClick={activeMenuHandler} to="/logout" as={NavLink}  name="logout">Logout</Menu.Item> }


			</Sidebar>
			<Sidebar.Pusher dimmed={state.visible}>
			<br />
			<div>{props.children}</div>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
        </Aux>
	  );
	}

const mapStateToProps = (state) => {
    return {
        isUserAuthenticated:state.auth.token !== null,
    };
}
export default connect(mapStateToProps)(Layout);