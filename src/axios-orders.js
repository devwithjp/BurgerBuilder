import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://react-burger-builder-b762c.firebaseio.com/'
});

export default instance;
