const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

let db;

const initDb = async () => {
    // open the database
    if (!db) {
        db = await open({
            filename: 'database.db', // имя и путь к БД
            driver: sqlite3.Database
        })
    }

    await db.exec(`
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            parent_name TEXT NOT NULL,
            parent_number TEXT NOT NULL,
			parent_mail TEXT NOT NULL,
			student_name TEXT NOT NULL,
			student_number TEXT NOT NULL,
			student_class TEXT NOT NULL
        )`);

}
const getDb = () => db;

module.exports = {
    initDb,
    getDb
}
