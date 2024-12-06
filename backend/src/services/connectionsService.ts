import { ConnectionsRepository } from '../repositories/connectionsRepository.js';

export class ConnectionsService {
    private readonly gameRepository: ConnectionsRepository;

    constructor() {
        this.gameRepository = new ConnectionsRepository();
    }

    public async getAllConnections(): Promise<number> {
        return this.gameRepository.getAllConnections();
    }

    public async getAllPagesConnections(): Promise<number> {
        return this.gameRepository.getAllPagesConnections();
    }

    public async getPageConnections(pageId: number): Promise<number> {
        return this.gameRepository.getPageConnections(pageId);
    }

    public async postConnection(connection: number): Promise<number> {
        return this.gameRepository.postConnection(connection);
    }

    public async postPageConnection(pageId: number): Promise<number> {
        return this.gameRepository.postPageConnection(pageId);
    }
}
