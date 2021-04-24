import express from 'express';
import { getSchedules, createSchedule, deleteSchedule, markSchedule,rejectSchedule } from '../controllers/schedules.js';

const router = express.Router();

router.get('/', getSchedules);
router.post('/', createSchedule);
router.delete('/:id', deleteSchedule);
router.post('/markSchedule', markSchedule);
router.post('/rejectSchedule', rejectSchedule);

export default router;