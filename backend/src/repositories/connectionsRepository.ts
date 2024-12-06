import { db } from '../utils/database.js';

export class ConnectionsRepository {
    public async getAllConnections(): Promise<{ deviceType: string, screenWidth: number, screenHeight: number, connectionTime: Date }[] > {
        const connections = await (await db).all('SELECT * FROM connections');
        return connections.map(connection => ({
            deviceType: connection.device_type,
            screenWidth: connection.screen_width,
            screenHeight: connection.screen_height,
            connectionTime: connection.connection_time
        }));
    }

    public async getAllPagesConnections(): Promise<{ pageId: string, numberOfConnections: number }[]> {
        const result = await (await db).all('SELECT page_id, COUNT(page_id) AS number_of_connections FROM page_connections');
        return result.map(pageConnection => ({
            pageId: pageConnection.page_id,
            numberOfConnections: pageConnection.number_of_connections
        }));
    }

    public async getPageConnections(pageId: string): Promise<{ pageId: string, numberOfConnections: number }> {
        const result = await (await db).get('SELECT page_id, COUNT(page_id) AS number_of_connections FROM page_connections WHERE pageId = ?', pageId);
        return {
            pageId: result?.page_id || 0,
            numberOfConnections: result?.number_of_connections || 0
        }
    }

    public async postConnection(deviceType: string, screenWidth: number, screenHeight: number, connectionTime: Date) {
        const result = await (await db).run('INSERT INTO connections (device_type, screen_width, screen_height, connection_time) VALUES (?, ?, ?, ?)', deviceType, screenWidth, screenHeight, connectionTime);
        return result.lastID || 0;
    }

    public async postPageConnection(pageId: string, connectionTime: Date) {
        const result = await (await db).run('INSERT INTO page_connections (page_id, connection_time) VALUES (?, ?)', pageId, connectionTime);
        return result.lastID;
    }
}
