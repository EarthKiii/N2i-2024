import { db } from '../utils/database.js';

export class ConnectionsRepository {
    public async getAllConnections(): Promise<{ deviceType: string, screenWidth: number, screenHeight: number, connectionTime: Date }> {
        const result = await (await db).get('SELECT * FROM connections');
        return {
            deviceType: result?.deviceType || "",
            screenWidth: result?.screenWidth || 0,
            screenHeight: result?.screenHeight || 0,
            connectionTime: result?.connectionTime
        }
    }

    public async getAllPagesConnections(): Promise<{ pageId: string, numberOfConnections: number }> {
        const result = await (await db).get('SELECT page_id, COUNT(page_id) AS number_of_connections FROM page_connections');
        return {
            pageId: result?.page_id,
            numberOfConnections: result?.numberOfConnections
        }
    }

    public async getPageConnections(pageId: string): Promise<{ pageId: string, numberOfConnections: number }> {
        const result = await (await db).get('SELECT (pageId, COUNT(pageId)) AS number_of_connections FROM page_connections WHERE pageId = ?', pageId);
        return {
            pageId: result?.pageId || 0,
            numberOfConnections: result?.numberOfConnections || 0
        }
    }

    public async postConnection(device_type: string, screen_width: number, screen_height: number, connection_time: Date) {
        const result = await (await db).run('INSERT INTO connections (device_type, screen_width, screen_height, connection_time) VALUES (?, ?, ?, ?)', device_type, screen_width, screen_height, connection_time);
        return result.lastID || 0;
    }

    public async postPageConnection(pageId: string, connectionTime: Date) {
        const result = await (await db).run('INSERT INTO page_connections (page_id, connection_time) VALUES (?, ?)', pageId, connectionTime);
        return result.lastID;
    }
}
