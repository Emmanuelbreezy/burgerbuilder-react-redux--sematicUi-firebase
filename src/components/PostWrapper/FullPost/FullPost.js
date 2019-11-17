import React, { Component} from 'react';

//import axios from 'axios';

import axios from '../../../axios';
import {
    Card,
    Grid,
    Responsive,
    Button,
    Segment,
    Placeholder
    } from 'semantic-ui-react';
//import classes from "./FullPost.module.css";

class FullPost extends Component {

    state ={
        loadedPost : null,
        loading: false,
    }

    componentDidMount() {
        this.setState({loading:true});
        this.loadData();
        
    }

    componentDidUpdate(){
      this.loadData();
    }
  

  loadData(){
    const prop = this.props.match.params.id; 
         if (prop){
            if(!this.state.loadedPost || (this.state.loadedPost.id !== +prop)){
                axios.get('/posts/'+ prop)
                     .then(response =>{
                        if(response){
                         this.setState({loadedPost:response.data});
                        }
                    })
                   .catch(error=>{
                      this.setState({loading:false});
                      alert("Network error",error);
                   })
            }
        
           }

  }

    deletePostHandler = () =>{
        axios.delete('/posts/'+ this.props.match.params.id)
        .then(response =>{
                 console.log(response,'RESPONSE DATA');
                    })
                   .catch(error=>{
                     alert("Network error",error);
               })
    }
        render() {
        //const dta = ('<div className={classes.FullPost}><h1>Title</h1><p>Content</p><div className={classes.Edit}><button className={classes.Delete}>Delete</button></div></div>');

        let post = (<Segment>
                <Placeholder><Placeholder.Line/><Placeholder.Line/><Placeholder.Line/><Placeholder.Line/><Placeholder.Line/><Placeholder.Line/><Placeholder.Line/><Placeholder.Line/></Placeholder>
                </Segment>
                
             );
        if (!this.props.loading) {
            if (this.state.loadedPost) {
                post = (
                <Responsive as={Grid}  style={{ marginTop: "1em"}}>
                        <Grid.Row textAlign="center" >
                          <Grid.Column>
                          <Card fluid centered>
                            <Card.Content>
                              <Card.Header>{this.state.loadedPost.title}</Card.Header>
                              <Card.Meta>Emma</Card.Meta>
                              <Card.Description>
                                  {this.state.loadedPost.body}
                              </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                               <Button negative content='Delete' onClick={this.deletePostHandler} />
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                    </Grid.Row>
              </Responsive> 
            );
            }
      }


        
        return post;
    }
}



export default FullPost;