import axios from 'axios';

const userUrl = 'https://real-estate-shop.herokuapp.com/users';
const houseUrl = 'https://real-estate-shop.herokuapp.com/houses';
const categoryUrl = 'https://real-estate-shop.herokuapp.com/categories';
const bankUrl = 'https://real-estate-shop.herokuapp.com/banks';
const scheduleUrl = 'https://real-estate-shop.herokuapp.com/schedules';

// const userUrl = 'http://localhost:80/users';
// const houseUrl = 'http://localhost:80/houses';
// const categoryUrl = 'http://localhost:80/categories';
// const bankUrl = 'http://localhost:80/banks';
// const scheduleUrl = 'http://localhost:80/schedules';


// user routes
export const createUser = (newUser) => axios.post(`${userUrl}/register`, newUser);
export const getUser = (userName) => axios.get(`${userUrl}/${userName}`);
export const fetchUser = () => axios.get(userUrl);
export const deleteUser = (userName) => axios.delete(`${userUrl}/${userName}`);
export const updateUser = (userName, toUpdateUser) => axios.post(`${userUrl}/updateUser/${userName}`, toUpdateUser);
export const login = (userInfo) => axios.post(`${userUrl}/${userInfo}`, userInfo);
export const logout = (userInfo) => axios.post(`${userUrl}/logout/${userInfo}`, userInfo);

// house
export const fetchHouse = () => axios.get(houseUrl);
export const createHouse = (newHouse) => axios.post(houseUrl, newHouse);
export const deleteHouse = (id) => axios.delete(`${houseUrl}/${id}`);
export const updateHouse = (id, toUpdateHouse) => axios.post(`${houseUrl}/updateHouse/${id}`, toUpdateHouse);
// export const buyHouse = (userName, houseInfo) => axios.post(`${userUrl}/buyHouse/${userName}`, houseInfo);
// bank
export const addBank = (userName, bankInfo) => axios.post(`${userUrl}/addBank/${userName}`, bankInfo);
export const createBank = (newBank) => axios.post(bankUrl, newBank);
export const fetchBank = () => axios.get(bankUrl);
export const deleteBank = (id) => axios.delete(`${bankUrl}/${id}`);
export const updateBank = (id, toUpdateBank) => axios.post(`${bankUrl}/updateBank/${id}`, toUpdateBank);
// category
export const createCategory = (newCategory) => axios.post(categoryUrl, newCategory);
export const fetchCategory = () => axios.get(categoryUrl);
export const deleteCategory = (name) => axios.delete(`${categoryUrl}/${name}`);
export const updateCategory = (name, toUpdateCategory) => axios.post(`${categoryUrl}/updateCategory/${name}`, toUpdateCategory);
// schedule
export const fetchSchedule = () => axios.get(scheduleUrl);
export const addSchedule = (userName, scheduleInfo) => axios.post(`${scheduleUrl}/addSchedule/${userName}`, scheduleInfo);
export const rejectSchedule = (userName, scheduleInfo) => axios.post(`${scheduleUrl}/rejectSchedule/${userName}`, scheduleInfo);
export const acceptSchedule = (userName, scheduleInfo) => axios.post(`${scheduleUrl}/acceptSchedule/${userName}`, scheduleInfo);
    