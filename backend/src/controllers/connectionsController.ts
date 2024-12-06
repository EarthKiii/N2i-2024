import { Request, Response } from 'express';
import { ConnectionsService } from '../services/connectionsService.js';
export class ConnectionsController {
    private readonly connectionsService: ConnectionsService;

    constructor() {
        this.connectionsService = new ConnectionsService();
    }

    /**
     * Récupère les statistiques des connexions.
     * @route GET /sherlock/connections/
     */
    public async getAllConnections(_req: Request, res: Response): Promise<void> {
        try {
            const connections = await this.connectionsService.getAllConnections();
            res.status(200).json(connections);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Crée une nouvelle connexion aux pages.
     * @route GET /sherlock/connections/pages
    */
    public async getAllPagesConnections(_req: Request, res: Response): Promise<void> {
        try {
            const connections = await this.connectionsService.getAllPagesConnections();
            res.status(200).json(connections);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Crée une nouvelle connexion de page spécifique.
     * @route GET /sherlock/connections/pages/{pageId}
    */
   public async getPageConnections(req: Request, res: Response): Promise<void> {
    try {
        const pageId = req.params.pageId;
        const connections = await this.connectionsService.getPageConnections(pageId);
        res.status(200).json(connections);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

    /**
     * Crée une nouvelle connexion au site.
     * @route POST /sherlock/connections/
     */
    public async postConnection(req: Request, res: Response): Promise<void> {
        try {
            const device_type = req.body.device_type;
            const screen_width = req.body.device_name;
            const screen_height = req.body.screen_height;
            const connection_time = req.body.connection_time;
            const connection = await this.connectionsService.postConnection(device_type, screen_width, screen_height, connection_time);
            res.status(201).json(connection);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Crée une nouvelle connexion de page.
     * @route POST /sherlock/connections/pages
     */
    public async postPageConnection(req: Request, res: Response): Promise<void> {
        try {
            const pageId = req.body.pageId;
            const connectionTime = req.body.connectionTime;
            const connection = await this.connectionsService.postPageConnection(pageId, connectionTime);
            res.status(201).json(connection);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

}
