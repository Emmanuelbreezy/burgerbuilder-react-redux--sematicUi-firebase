import React from 'react';
import {Segment,Message,TransitionablePortal} from 'semantic-ui-react';
const MessageModal = (props) => {

	return (

		<TransitionablePortal open={props.messopen} transition={{animation:'fly right',duration:1000}}>
           <Segment raised vertical compact  style={{ 
                left:'5%',
                position:'fixed',
                top:'10%',
                zIndex:1000,
             }}>
             <Message 
             onDismiss={props.dismiss}
             floating 
             success
             header="Ordered Successfully" 
             content='Your Burger was ordered sucessfully' />
            </Segment>
        </TransitionablePortal>
		);

}

export default MessageModal;
