let sql = require("sqlite");
sql.open("./src/db.sqlite");

class PurgeVerifyLogs {
    static run() {
        sql.run("DELETE FROM logs").catch(e => console.log("[PurgeVerifyLogs] An error occured: " + e));
    }
};

module.exports = PurgeVerifyLogs;