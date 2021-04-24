import express from 'express';

import Schedule from '../models/schedule.js';

const router = express.Router();

export const getSchedules = async (req, res) => { 
    try {
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteSchedule = async (req, res) => { 
    const { id } = req.params;
    try {
        const schedule = await Schedule.findOneAndDelete({id: id});
        res.status(200).json(schedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createSchedule = async (req, res) => {
    const { id, house, date, creatorName, creatorEmail } = req.body;
    const newSchedule = new Schedule({ id, house, date, creatorName, creatorEmail });

    try {
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const markSchedule = async (req, res) => { 
    const { id } = req.body;
    try {
        const schedule = await Schedule.findOne({id});
        const updatedSchedule = await Schedule.findOneAndUpdate(
            {id: schedule.id},
            {isMarked: true} , 
            {new: true}
        );
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const rejectSchedule = async (req, res) => { 
    const { id } = req.body;
    try {
        const schedule = await Schedule.findOne({id});
        const updatedSchedule = await Schedule.findOneAndUpdate(
            {id: schedule.id},
            {isMarked: false} , 
            {new: true}
        );
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// export const getSchedule = async (req, res) => { 
//     const { id } = req.body;

//     try {
//         const bank = await Schedule.findOne({userName: id});
//         res.status(200).json(bank);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
export default router;