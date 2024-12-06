import { db } from '../utils/database.js';

export class ConnectionsRepository {
    public async getAllConnections(): Promise<{ device_type: string, screen_width: number, screen_height: number, connection_time: Date | null }> {
        const result = (await db).get('SELECT (device_type, screen_width, screen_height, connection_time) FROM connections');
        return {
            device_type: result?.device_type || "",
            screen_width: result?.screen_width || 0,
            screen_height: result?.screen_height || 0,
            connection_time: result?.connection_time || null
        }
    }

    public async getAllPagesConnections(): Promise<{ pageId: number, number_of_connections: number }> {
        const result = (await db).get('SELECT (pageId, COUNT(pageId)) AS number_of_connections FROM page_connections');
        return {
            pageId: result?.pageId || 0,
            number_of_connections: result?.number_of_connections || 0
        }
    }

    public async getPageConnections(pageId: number): Promise<{ pageId: number, number_of_connections: number }> {
        const result = (await db).get('SELECT (pageId, COUNT(pageId)) AS number_of_connections FROM page_connections WHERE pageId = ?', pageId);
        return {
            pageId: result?.pageId || 0,
            number_of_connections: result?.number_of_connections || 0
        }
    }

    public async postConnection(device_type: string, screen_width: number, screen_height: number, connection_time: Date) {
        const result = (await db).run('INSERT INTO connections (device_type, screen_width, screen_height, connection_time) VALUES (?, ?, ?, ?)', device_type, screen_width, screen_height, connection_time);
        return result.lastID;
    }

    public async postPageConnection(pageId: number, connectionTime: Date) {
        const result = (await db).run('INSERT INTO page_connections (page_id, connection_time) VALUES (?, ?)', pageId, connectionTime);
        return result.lastID;
    }
}
