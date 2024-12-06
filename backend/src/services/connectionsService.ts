import { ConnectionsRepository } from '../repositories/connectionsRepository.js';

export class ConnectionsService {
    private readonly gameRepository: ConnectionsRepository;

    constructor() {
        this.gameRepository = new ConnectionsRepository();
    }

    public async getAllConnections(): Promise< { device_type: string, screen_width: number, screen_height: number, connection_time: Date } > {
        return this.gameRepository.getAllConnections();
    }

    public async getAllPagesConnections(): Promise< { pageId: string, number_of_connections: number } > {
        return this.gameRepository.getAllPagesConnections();
    }

    public async getPageConnections(pageId: string): Promise< { pageId: string, number_of_connections: number } > {
        return this.gameRepository.getPageConnections(pageId);
    }

    public async postConnection(device_type: string, screen_width: number, screen_height: number, connection_time: Date) {
        return this.gameRepository.postConnection(device_type, screen_width, screen_height, connection_time);
    }

    public async postPageConnection(pageId: string, connectionTime: Date) {
        return this.gameRepository.postPageConnection(pageId, connectionTime);
    }
}
