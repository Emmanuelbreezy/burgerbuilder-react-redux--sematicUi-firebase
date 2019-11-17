import React from 'react';
import {shallow} from 'enzyme';
//import  EnzymeAdapter from 'enzyme-adapter-react-16';

import BurgerControls from "./BurgerControls";
import BurgerControl from "./BurgerControl/BurgerControl";


const controls = [
  {label:"Salad", type:"salad"},
];


const setup = (props) =>{
	const component = shallow(<BurgerControls controls {...props}/>);
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
		const props = {
			price:7.6500000000,
		};
		component = setup(props);
	});


	it('Should render on the DOM',()=>{
		console.log(component);
		const wrapper   =  component.find('.BurgerControlsRend');
		expect(wrapper.length).toBe(1);
    });

	it('Should not render on the DOM',()=>{
		console.log(component.debug);
		const wrapper   = findByTestAttr(component,'BurgerControlComp');
		expect(wrapper.length).toBe(1);
    });


	

});


