import express from 'express';
import { ConnectionsController } from '../controllers/connectionsController.js';

const router = express.Router();
const connectionsController = new ConnectionsController();

router.get('/connections', async (req, res) => {
    await connectionsController.getAllConnections(req, res);
});

router.get('/connections/pages', async (req, res) => {
    await connectionsController.getAllPagesConnections(req, res);
});

router.get('/connections/pages/:pageId', async (req, res) => {
    await connectionsController.getPageConnections(req, res);
});

router.post('/connections', async (req, res) => {
    await connectionsController.postConnection(req, res);
});

router.post('/connections/pages', async (req, res) => {
    await connectionsController.postPageConnection(req, res);
});

export default router;
