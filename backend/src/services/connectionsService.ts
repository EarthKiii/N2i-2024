import { ConnectionsRepository } from '../repositories/connectionsRepository.js';

export class ConnectionsService {
    private readonly gameRepository: ConnectionsRepository;

    constructor() {
        this.gameRepository = new ConnectionsRepository();
    }

    public async getAllConnections(): Promise< { deviceType: string, screenWidth: number, screenHeight: number, connectionTime: Date }[] > {
        const connections = await this.gameRepository.getAllConnections();
        return connections.map(connection => ({
            deviceType: connection.deviceType,
            screenWidth: connection.screenWidth,
            screenHeight: connection.screenHeight,
            connectionTime: connection.connectionTime
        }));
    }

    public async getAllPagesConnections(): Promise< { pageId: string, numberOfConnections: number }[] > {
        const pagesConnections = await this.gameRepository.getAllPagesConnections();
        return pagesConnections.map(pageConnection => ({
            pageId: pageConnection.pageId,
            numberOfConnections: pageConnection.numberOfConnections
        }));
    }

    public async getPageConnections(pageId: string): Promise< { pageId: string, numberOfConnections: number } > {
        return this.gameRepository.getPageConnections(pageId);
    }

    public async postConnection(deviceType: string, screenWidth: number, screenHeight: number) {
        return this.gameRepository.postConnection(deviceType, screenWidth, screenHeight);
    }

    public async postPageConnection(pageId: string) {
        return this.gameRepository.postPageConnection(pageId);
    }
}
