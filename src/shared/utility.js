export const updateObject = (oldObjectState,updatedValueinState) =>{
	return{
		...oldObjectState,  // the old state is spread out
		...updatedValueinState // upated counter place in an object is spread out
	}
}



export const checkValid = (value,rules) => {
    	let isvalid = false;
    	let errorR = null;

    	if (!rules) {
    		return true;
    	}
    	if(rules.required){
    	   isvalid = value.trim() !== '';
    	}
    	// if (rules.isEmail) {
    	// 	isvalid = 
    	// 	errorR = 
    	// }
    	if (rules.isnumeric) {
    		const pattern = /^\d+$/;
    		isvalid = pattern.test(value) && isvalid;
    		errorR = !isvalid ? 'Must contain numeric number' : null; 
    	}
    	// if (rules.isupperCase) {
    	// 	isvalid = 
    	// 	//errorR =  
    	// }
    	if (rules.minLength) {
    		isvalid = value.length >= rules.minLength && isvalid;
    		errorR =  !isvalid ? 'Must contain letter greater six character' : null;
    	}
    	console.log(errorR);
    	return isvalid;
        }