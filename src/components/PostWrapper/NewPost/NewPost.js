
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
//import axios from 'axios';
import axios from '../../../axios';
import {
    Grid,
    Responsive,
    Form,
    Message
    } from 'semantic-ui-react';
//import classes from "./NewPost.module.css";

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        loaded:false,
        status: null,
        submitted: false
    }


    postDataHandler = ()=>{
     
     const data = {
           title:this.state.title,
           body:this.state.content,
           author:this.state.author
     }
     this.setState({loaded:true});
      axios.post('/posts',data)
             .then(response =>{
                 console.log(response,'RESPONSE DATA');

                 this.setState({
                    title: '',
                    content: '',
                    author: 'Max',
                    loaded:false,
                    status: response.status,
                 });
                 this.props.history.replace('/posts');


           })
           .catch(error=>{
             this.setState({
                    title: '',
                    content: '',
                    author: 'Max',
                    loaded:false,
                    status:400
             });
             alert("Network error to post",error.status);

           })
    }
    


    render () {
        let redirect = null
        if(this.state.submitted){
            redirect = <Redirect to='/posts' />;
        }
         
        const posted = this.state.loaded ? true : false;
        const statusBoolean = this.state.status === 201 ? true : false;
        const statusError = this.state.status ===  400 ? true : false;

        const option = [
           {key: 'm' , text:'Max',value:'max'},
           {key: 'o' , text:'Manu',value:'manu'},
        ];
        const Successmessage = (<Message success header='Form Completed' content="Posted contents successfully!!" />);
        const Errormessage = (<Message warning header="Something went wrong" content="Check your connection properly" />);
        return (
            <Responsive as={Grid}  style={{ marginTop: "1em"}}>
                   {redirect}
                    <Grid.Row textAlign="center" >
                      <Grid.Column>
                      
                       <Form loading={posted} onSubmit={this.postDataHandler} success={statusBoolean} warning={statusError}>
                         <Form.Group widths='equal'>
                            <Form.Input  label='Title' placeholder='Write a Title' value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />  
                         </Form.Group>
                        <Form.TextArea  label='Content' placeholder='Write a description' value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />  
                        <Form.Group widths='equal'>
                            <Form.Select  label='Author' options={option}  placeholder='Author' value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>  
    
                         </Form.Group>
                         { statusBoolean ? Successmessage : statusError ? Errormessage : null}
                        <Form.Button> Submit </Form.Button>

                        </Form>
                       </Grid.Column>
                </Grid.Row>
          </Responsive>

        );
    }
}

export default NewPost;