import React from 'react';
import {shallow} from 'enzyme';
//import  EnzymeAdapter from 'enzyme-adapter-react-16';
import {BurgerBuilder} from './BurgerBuilder';
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Burger from '../../components/Burger/Burger';


describe ('BurgerBuilder components',()=>{   

	describe ('<BurgerBuilder />',()=>{
	   let wrapper;
			beforeEach(() => {
				wrapper = shallow(<BurgerBuilder onInitIngredient={()=> {}} />);
			});


        it('Should render Burger  with props on the DOM',()=>{
       		wrapper.setProps({ings:{salad:1}});
			expect(wrapper.find(Burger)).toHaveLength(2);
 		});


        it('Should render BurgerControls with props on the DOM',()=>{
       		wrapper.setProps({ings:{salad:0}});
       		//console.log(wrapper.debug());
			expect(wrapper.find(BurgerControls)).toHaveLength(2); 
 		});
  

       it('Should render BurgerControls with props  not on the DOM',()=>{
       		wrapper.setProps({ings:null});
			expect(wrapper.find(BurgerControls)).toHaveLength(0);
 		});
	})

	


	// it('Should not render on the DOM',()=>{
	// 	console.log(component.debug);
	// 	const wrapper   = findByTestAttr(component,'BurgerControlComp');
	// 	expect(wrapper.length).toBe(0);
 //    });


	

});


