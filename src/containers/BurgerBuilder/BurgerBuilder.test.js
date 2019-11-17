import React from 'react';
import {shallow} from 'enzyme';
//import  EnzymeAdapter from 'enzyme-adapter-react-16';
//import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import BurgerBuilder from './BurgerBuilder';

const ings = {
  		 "Salad":1,
  		 "Bacon":1,
  		"Cheese":2,
  		"Meat":1
}

const setup = (props={}) =>{
	const component = shallow(<BurgerBuilder {...props}/>);
	return component;
}

const findByTestAttr = (component,attr)=>{
	const wrapper = component.find("[data-test='${attr}']");
	return wrapper;
}

describe ('BurgerBuilder components',()=>{   

	describe ('Have props',()=>{

	   let component;
			beforeEach(() => {
				const props ={
					ings:ings
				};
				component = setup(props);
			});

       it('Should render on the DOM',()=>{
			console.log(component);
			const wrapper = findByTestAttr(component,'BurgerControlsAUX');
			expect(wrapper.length).toBe(1);
 		});

       it('Should render BurgerControls on the DOM',()=>{
			console.log(component);
			const wrapper = findByTestAttr(component,'BurgerControls');
			expect(wrapper.length).toBe(1);
 		});


	})

	describe ('Have no props',()=>{

	})


	// it('Should not render on the DOM',()=>{
	// 	console.log(component.debug);
	// 	const wrapper   = findByTestAttr(component,'BurgerControlComp');
	// 	expect(wrapper.length).toBe(0);
 //    });


	

});


