import React,{Fragment} from 'react';

import {
    Card,
    Grid,
    Responsive
    } from 'semantic-ui-react';
//import classes from "./Post.module.css";

//const data = ('<div className={classes.Post}><h1>{props.title}</h1><div className={classes.Info}><div className={classes.Author}>{props.author}</div></div></div>');
const Post = (props) => (
	           
	            <Fragment>
	               <Responsive {...Responsive.onlyMobile}>
	                    <Grid.Column style={{ marginBottom: "0.5em"}}>
	                        <Card link  fluid raised header={props.title} meta={props.author}  description='' onClick={props.clicked} />
	                    </Grid.Column>
	                </Responsive>

	                <Responsive minWidth={768}>
	                    <Grid.Column width={8} style={{ marginBottom: "0.5em"}}>
	                        <Card raised link header={props.title} meta={props.author}  description='' onClick={props.clicked} />

	                    </Grid.Column>
	                </Responsive>
	            </Fragment>
);

export default Post;