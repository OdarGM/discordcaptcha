let sql = require("sqlite");
sql.open("./src/db.sqlite");

class GetLogs {
    /**
    * @returns {promise} logs - sqlite promise
    */
    static run() {
        return sql.all("SELECT * FROM logs").catch(e => console.log("An error occured: " + e));
    }
};

module.exports = GetLogs;