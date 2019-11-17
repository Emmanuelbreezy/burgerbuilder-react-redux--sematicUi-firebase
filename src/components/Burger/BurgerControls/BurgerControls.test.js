import React from 'react';
import {shallow} from 'enzyme';
//import  EnzymeAdapter from 'enzyme-adapter-react-16';

import BurgerControls from "./BurgerControls";
import BurgerControl from "./BurgerControl/BurgerControl";

const setup = (props={}) =>{
	const component = shallow(<BurgerControls {...props}/>);
	return component;
}

describe ('BurgerBuilder components',()=>{   

	let component;
	beforeEach(() => {
		component = setup();
	});

	it('Should render without errors',()=>{
		console.log(component.debug);
		const wrapper   = component.find('.BurgerControlsRend');
		expect(wrapper.length).toBe(1);
});
});
