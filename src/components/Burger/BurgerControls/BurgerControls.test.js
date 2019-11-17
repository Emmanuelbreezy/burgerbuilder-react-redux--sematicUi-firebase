import React from 'react';
import {shallow} from 'enzyme';
//import  EnzymeAdapter from 'enzyme-adapter-react-16';

import BurgerControls from "./BurgerControls";
import BurgerControl from "./BurgerControl/BurgerControl";

const setup = (props={}) =>{
	const component = shallow(<BurgerControls {...props}/>);
	return component;
}

const findByTestAttr = (component,attr)=>{
	console.log(attr);
	const wrapper = component.find("[data-test='${attr}']");
	return wrapper;
}

describe ('BurgerBuilder components',()=>{   

	let component;
	beforeEach(() => {
		component = setup();
	});


	it('Should render on the DOM',()=>{
		console.log(component);
		const wrapper   =  component.find('.BurgerControlsRend');
		expect(wrapper.length).toBe(1);
    });

	it('Should not render on the DOM',()=>{
		console.log(component.debug);
		const wrapper   = findByTestAttr(component,'BurgerControlComp');
		expect(wrapper.length).toBe(0);
    });


	

});


