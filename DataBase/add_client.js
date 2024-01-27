const {getDb} = require("./dao");

const TABLE_NAME = "clients";

module.exports = {
    TABLE_NAME,
    addClient: async (parent_name, parent_number, parent_mail, student_name, student_number, student_class) => {
        const result = await getDb().run(
            `INSERT INTO ${TABLE_NAME} (parent_name, parent_number, parent_mail, student_name, student_number, student_class) VALUES (?, ?, ?, ?, ?, ?)`,
            parent_name, parent_number, parent_mail, student_name, student_number, student_class
        );
    },
    getUsers: async () => await getDb().get(`SELECT * FROM ${TABLE_NAME}`),
};


