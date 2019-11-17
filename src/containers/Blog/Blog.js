import React, { Component,Suspense  } from 'react'; //,Redirect
import {Route,NavLink,Switch} from 'react-router-dom';
//import {Route,Link,Switch} from 'react-router-dom';
//import axios from 'axios';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import {
    Responsive,
    Container, 
    Menu,Sidebar,
    Icon

    } from 'semantic-ui-react';


import Posts from '../../components/PostWrapper/PostWrapper';
//import NewPost from '../../components/PostWrapper/NewPost/NewPost';
//import AsyncComp from '../../hoc/asyncComp/asyncComp'; // OUR OWN IMPLEMENTATION OF LASY LOADING OR CODE SPLITTING

// const AsyncNewPost = AsyncComp(()=>{
//     return import('../../components/PostWrapper/NewPost/NewPost');
// })
//import NewPost from '../../components/PostWrapper/NewPost/NewPost';

const NewPost = React.lazy(()=> import('../../components/PostWrapper/NewPost/NewPost'));

class Blog extends Component {
    state = {
        visible:false,
        activeItem: 'home',
        auth:false
    }

    activeMenuItem = (e,{name}) =>{
      this.setState({activeItem:name,visible:false});
    }

    render() {
        //const res = this.state.result;
        //this.state.auth ? <Route path="/newpost" render=(()=>{<Supense fallback=(<div>loading</div>)><NewPost/></Supense>})/> : null}*/


        setTimeout(()=>{
            this.setState({auth:true});
        },2500);
        //const item_ = this.state.auth ? <Route path="/newpost" component={AsyncNewPost} /> : null;
        return (
            <Aux><br />
                <Menu fixed="top" inverted color='white'>
                    <Responsive as={Container} minWidth={768}>
                    <Menu.Menu position="left">
                      <Menu.Item  name="home" as='a' href="/blog" style={{color:"#fff"}}  header >BlogApp</Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="left">
                                <Menu.Item onClick={this.activeMenuItem}   to="/blog/posts/" as={NavLink} name="home"  exact style={{color:"#fff"}}>Posts</Menu.Item>
                                <Menu.Item onClick={this.activeMenuItem}    to="/blog/newpost" as={NavLink} name="post"  style={{color:"#fff"}}>Create Post</Menu.Item>
                    </Menu.Menu>
                    </Responsive>

                    <Responsive as={Container} {...Responsive.onlyMobile}>
                      <Menu.Menu position="left">
                            <Menu.Item onClick={()=> this.setState({visible:true})} style={{color:"#fff"}}>
                                    <Icon name='bars' />
                            </Menu.Item>
                            <Menu.Item   as='a' href="/blog" header style={{color:"#fff"}}>BlogApp</Menu.Item>
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
                    visible={this.state.visible}
                    onHide={()=> this.setState({visible:false})}
                    >
                    
                    <Menu.Item header onClick={this.unauth}></Menu.Item>
                    <Menu.Item onClick={this.activeMenuItem} as='a' header  href="/blog">BlogApp</Menu.Item>
                    <Menu.Item onClick={this.activeMenuItem}  as={NavLink} name="home" to="/blog/posts/" exact>Posts</Menu.Item>
                    <Menu.Item onClick={this.activeMenuItem}  as={NavLink} name="post" to={{pathname:'/blog/newpost',hash:'#submit',search:'?q=true'}}>Create Post</Menu.Item>

                    </Sidebar>
                   <Sidebar.Pusher dimmed={this.state.visible}>
                      {/*<Route path="/" exact render={()=><h1>Home</h1>} />*/}
                      <Responsive as={Container}  style={{height:"1000px",paddingTop:"1em"}}>
                       <Switch>
                         <Suspense fallback={<div>loading...</div>}>
                            <Route path="/blog/newpost" component={NewPost}/> 
                            <Route path="/blog/posts" component={Posts} />
                         </Suspense>
                            <Route render={() => <h1> 404 ERROR </h1>}/>
                            <Route path="/blog/user" exact render={() => <h1> Invalid Path </h1>}/>
                        </Switch>

                      </Responsive>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Aux>
        );
    }
}

export default Blog;