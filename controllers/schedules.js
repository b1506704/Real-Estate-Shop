import express from 'express';

import Schedule from '../models/schedule.js';
import House from '../models/house.js';
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
    //delete marked schedule, set house.isBought = true
    try {
        const schedule = await Schedule.findOne({id: id});
        const house = await House.findOne({id: schedule.house.id});
        const updatedHouse = await House.findOneAndUpdate(
            {id: house.id},
            {
                isBought: true,
                houseOwner: schedule.creatorName
            },
            {new: true}
        );
        const deletedSchedule = await Schedule.findOneAndDelete({id: id});
        res.status(200).json(deletedSchedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const removeSchedule = async (req, res) => { 
    
    const { id } = req.params;
    //delete schedule from db regardless of constraint
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
    try {
        const schedule = await Schedule.findOne({id: req.params.id});
        const updatedSchedule = await Schedule.findOneAndUpdate(
            {id: schedule.id},
            {status: 'accept'} , 
            {new: true}
        );
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const rejectSchedule = async (req, res) => { 
    try {
        const schedule = await Schedule.findOne({id: req.params.id});
        const updatedSchedule = await Schedule.findOneAndUpdate(
            {id: schedule.id},
            {status: 'reject'} , 
            {new: true}
        );
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;