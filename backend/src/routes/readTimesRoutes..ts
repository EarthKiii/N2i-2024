import express from 'express';
import { ReadTimesController } from '../controllers/readTimesController.js';

const router = express.Router();
const readTimesController = new ReadTimesController();

router.get('/', async (req, res) => {
    await readTimesController.getAllReadTimes(req, res);
});

router.get('/{popupId}', async (req, res) => {
    await readTimesController.getReadTime(req, res);
});

router.post('/', async (req, res) => {
    await readTimesController.postReadTime(req, res);
});

export default router;
