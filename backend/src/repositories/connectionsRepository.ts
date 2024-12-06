import { db } from '../utils/database.js';

export class ConnectionsRepository {
    public async getAllConnections(): Promise<number> {
        const result = await db.get('SELECT COUNT(*) FROM connections');
        return result?.count || 0;
    }

    public async getAllPagesConnections(): Promise<number> {
        const result = await db.get('SELECT COUNT(DISTINCT page_id) FROM connections');
        return result?.count || 0;
    }

    public async getPageConnections(pageId: number): Promise<number> {
        const result = await db.get('SELECT COUNT(*) FROM connections WHERE page_id = ?', pageId);
        return result?.count || 0;
    }

    public async postConnection(connection: number): Promise<number> {
        const result = await db.run('INSERT INTO connections (connection) VALUES (?)', connection);
        return result.lastID;
    }

    public async postPageConnection(pageId: number): Promise<number> {
        const result = await db.run('INSERT INTO connections (page_id) VALUES (?)', pageId);
        return result.lastID;
    }

}
