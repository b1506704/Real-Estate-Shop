import express from 'express';

import { login, register, getUser, getUsers, logout, addBank, buyHouse, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.post('/register', register);
router.get('/', getUsers);
router.get('/:userName', getUser);
router.post('/:userInfo', login);
router.post('/logout/:userInfo', logout);
router.post('/addBank/:userName', addBank);
router.post('/buyHouse/:userName', buyHouse);
router.delete('/:userName', deleteUser);
router.post('/updateUser/:userName', updateUser);

export default router;