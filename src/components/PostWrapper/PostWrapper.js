import React, { Component,Fragment } from 'react';
import {Route} from 'react-router-dom';
import { Grid,Header,Container,Dimmer,Loader} from 'semantic-ui-react';

import axios from '../../axios';
import Post from './Post/Post';
import FullPost from './FullPost/FullPost';
import classes from "./PostWrapper.module.css";

//const Posts = React.lazy(()=> import('../../components/PostWrapper/NewPost/NewPost'));

class PostWrapper extends Component {
	state = {
        posts:[],
        SelectedPostId:null,
        error:false,
        loading:false
    }

    componentDidMount() {
    	this.setState({loading:true});
        axios.get('/posts')
             .then(response =>{
                 if(response){
	                 const posts = response.data.slice(0,4);
	                 const updatedPosts =  posts.map(post =>{
	                    return {
	                        ...post,
	                        author:'Emma'
	                    }
	                 });
	                 this.setState({loading:false,posts:updatedPosts});
             }
           })
           .catch(error=>{
	         this.setState({error:true,loading:false});
             alert("Network error",error);
           })
           
    }


    postSelectorHandler = (id) =>{
        //this.props.history.push({pathname:'/'+id});
        this.props.history.push('/blog/posts/' + id);

    }

	render() {
		 const posts = this.state.posts.map(post=>{
            return <Post identity={post.id} key={post.id}  title={post.title} author={post.author} clicked={()=>this.postSelectorHandler(post.id)} />;
        });
		 let content = null;
		 if (this.state.loading){
	        content  = (
	              <Dimmer.Dimmable as={Container} textAlign='center' style={{paddingTop:"40%"}}>
                    <Dimmer inverted active>
                         <Loader size='large' inverted />
                      </Dimmer>
                  </Dimmer.Dimmable>
	       );

        }else{
			 if(this.state.error){
			 	content = (<div style={{textAlign:'center'}}><Header as='h2' >An Error occured</Header><p>Content could't be loaded,check connection..</p></div>)
			 }else{
			 	content = posts.length > 0 ? posts : null;
			 }
		}

				return (
			  <Fragment>
				<section className={classes.Posts}>
	               <Grid >
	                <Grid.Row>
	                { content }
	                </Grid.Row>
	              </Grid>
	            </section>
	            <section>
	              <Route path={this.props.match.url+"/:id"} exact component={FullPost} />
	            </section>
	          </Fragment>
	          

		);
	}
}

export default PostWrapper;