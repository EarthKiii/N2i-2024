import { ConnectionsRepository } from '../repositories/connectionsRepository.js';

export class ConnectionsService {
    private readonly gameRepository: ConnectionsRepository;

    constructor() {
        this.gameRepository = new ConnectionsRepository();
    }

    public async getAllConnections(): Promise< { deviceType: string, screenWidth: number, screenHeight: number, connectionTime: Date } > {
        return this.gameRepository.getAllConnections();
    }

    public async getAllPagesConnections(): Promise< { pageId: string, numberOfConnections: number } > {
        return this.gameRepository.getAllPagesConnections();
    }

    public async getPageConnections(pageId: string): Promise< { pageId: string, numberOfConnections: number } > {
        return this.gameRepository.getPageConnections(pageId);
    }

    public async postConnection(deviceType: string, screenWidth: number, screenHeight: number, connectionTime: Date) {
        return this.gameRepository.postConnection(deviceType, screenWidth, screenHeight, connectionTime);
    }

    public async postPageConnection(pageId: string, connectionTime: Date) {
        return this.gameRepository.postPageConnection(pageId, connectionTime);
    }
}
