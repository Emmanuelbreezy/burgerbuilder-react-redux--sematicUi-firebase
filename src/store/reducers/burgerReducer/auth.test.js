import AuthReducer from './auth';
import * as actionType from '../.././actions/burgerAction/actionTypes2';

describe ('auth reducer',()=>{   

        it('Should return the initial state',()=>{
			expect(AuthReducer(undefined,{})).toEqual({
					loaded:false,
			        status:null,
			        token:null,
			        userId: null,
			        error:null,
			        message:null,
			        authRedirectPath:'/'
			});
 		});



 		it('Should return the toEqual initial state',()=>{
			expect(AuthReducer({
					loaded:false,
			        status:null,
			        token:null,
			        userId: null,
			        error:null,
			        message:null,
			        authRedirectPath:'/'
			},{
				type:actionType.AUTH_SUCCESS,
				idToken:'some-token',
				userId:'some-user-id'

			})).toEqual({
					loaded:false,
			        status:200,
			        token:'some-token',
			        userId: 'some-user-id',
			        error:null,
			        message:null,
			        authRedirectPath:'/'

			});
 		});

	


	// it('Should not render on the DOM',()=>{
	// 	console.log(component.debug);
	// 	const wrapper   = findByTestAttr(component,'BurgerControlComp');
	// 	expect(wrapper.length).toBe(0);
 //    });


	

});


