import { db } from '../utils/database.js';

export class ReadTimesRepository {
    public async getAllReadTimes(): Promise<number> {
        const result = await db.get('SELECT popup_id, AVG(read_time) AS average_read_time FROM read_times');
        return result?.count || 0;
    }

    public async getReadTime(popupId: string): Promise<number> {
        const result = await db.get('SELECT popup_id, AVG(read_time) AS average_read_time FROM read_times WHERE popup_id = ?', [popupId]);
        return result?.count || 0;
    }

    public async postReadTime(popupId: string, readTime: number): Promise<number> {
        const result = await db.run('INSERT INTO read_times (popup_id, read_time) VALUES (?, ?)', [popupId, readTime]);
        return result.lastID;
    }
}
