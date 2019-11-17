import React from 'react';
import {Button,Modal,TransitionablePortal} from 'semantic-ui-react';

const ModalUI = props => {
    return (
     <TransitionablePortal 
           open={props.modalopen}
           transition={{animation:'fly down',duration:1000}}
           >
        <Modal 
           open={props.modalopen}
           onClose={(event)=>props.close()}
           centered
           closeIcon
          >
          <Modal.Header>YOUR ORDER</Modal.Header>
          <Modal.Content>
            <Modal.Description>
                 {props.children}
             </Modal.Description>
          </Modal.Content> 
          <Modal.Actions>
            <Button negative onClick={props.close}>Close</Button>
            <Button positive color='orange' onClick={props.purchaseClick}>Continue</Button>
          </Modal.Actions>
        </Modal>
        </TransitionablePortal>
    );
};

export default React.memo(ModalUI);