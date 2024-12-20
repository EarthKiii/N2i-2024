import { db } from '../utils/database.js';

export class ReadTimesRepository {
    public async getAllReadTimes(): Promise<{ popupId: string, averageReadTime: number }[]> {
        const result = await (await db).all('SELECT popup_id, AVG(read_time) AS average_read_time FROM read_times');
        return result.map((row: { popup_id: string, average_read_time: number }) => ({
            popupId: row.popup_id,
            averageReadTime: row.average_read_time
        }));
    }

    public async getReadTime(popupId: string): Promise<{ popupId: string, averageReadTime: number }> {
        const result = await (await db).get('SELECT popup_id, AVG(read_time) AS average_read_time FROM read_times WHERE popup_id = ?', [popupId]);
        return {
            popupId: result?.popup_id || "",
            averageReadTime: result?.average_read_time || 0
        }
    }

    public async postReadTime(popupId: string, readTime: number) {
        const result = await (await db).run('INSERT INTO read_times (popup_id, read_time) VALUES (?, ?)', [popupId, readTime]);
        return result.lastID;
    }
}
