import { db } from '../utils/database.js';

export class ConnectionsRepository {
    public async getAllConnections(): Promise<number> {
        const result = await db.get('SELECT (device_type, screen_width, screen_height, connection_time) FROM connections');
        return result?.count || 0;
    }

    public async getAllPagesConnections(): Promise<number> {
        const result = await db.get('SELECT (pageId, COUNT(pageId)) AS number_of_connections FROM page_connections');
        return result?.count || 0;
    }

    public async getPageConnections(pageId: number): Promise<number> {
        const result = await db.get('SELECT (pageId, COUNT(pageId)) AS number_of_connections FROM page_connections WHERE pageId = ?', pageId);
        return result?.count || 0;
    }

    public async postConnection(device_type: string, screen_width: number, screen_height: number, connection_time: Date): Promise<number> {
        const result = await db.run('INSERT INTO connections (device_type, screen_width, screen_height, connection_time) VALUES (?, ?, ?, ?)', device_type, screen_width, screen_height, connection_time);
        return result.lastID;
    }

    public async postPageConnection(pageId: number, connectionTime: Date): Promise<number> {
        const result = await db.run('INSERT INTO page_connections (page_id, connection_time) VALUES (?, ?)', pageId, connectionTime);
        return result.lastID;
    }
}
