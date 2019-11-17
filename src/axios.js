import axios from 'axios';

const Instance = axios.create({
	baseURL:'https://react-my-burger-f5421.firebaseio.com'
	//baseURL:'http://jsonplaceholder.typicode.com'  
});

Instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// 
export default Instance;
