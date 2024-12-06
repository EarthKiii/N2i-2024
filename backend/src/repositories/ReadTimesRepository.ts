import { db } from '../utils/database.js';

export class ReadTimesRepository {
    public async getAllReadTimes(): Promise<{ popup_id: string, average_read_time: number }> {
        const result = await (await db).get('SELECT popup_id, AVG(read_time) AS average_read_time FROM read_times');
        return {
            popup_id: result?.popup_id || "",
            average_read_time: result?.average_read_time || 0
        }
    }

    public async getReadTime(popupId: string): Promise<{ popup_id: string, average_read_time: number }> {
        const result = await (await db).get('SELECT popup_id, AVG(read_time) AS average_read_time FROM read_times WHERE popup_id = ?', [popupId]);
        return {
            popup_id: result?.popup_id || "",
            average_read_time: result?.average_read_time || 0
        }
    }

    public async postReadTime(popupId: string, readTime: number) {
        const result = await (await db).run('INSERT INTO read_times (popup_id, read_time) VALUES (?, ?)', [popupId, readTime]);
        return result.lastID;
    }
}
