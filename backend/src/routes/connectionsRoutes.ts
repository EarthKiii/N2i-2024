import express from 'express';
import { ConnectionsController } from '../controllers/connectionsController.js';

const router = express.Router();
const connectionsController = new ConnectionsController();

router.get('/', async (req, res) => {
    await connectionsController.getAllConnections(req, res);
});

router.get('/pages', async (req, res) => {
    await connectionsController.getAllPagesConnections(req, res);
});

router.get('/pages/{pageId}', async (req, res) => {
    await connectionsController.getPageConnections(req, res);
});

router.post('/', async (req, res) => {
    await connectionsController.postConnection(req, res);
});

router.post('/pages', async (req, res) => {
    await connectionsController.postPageConnection(req, res);
});

export default router;
