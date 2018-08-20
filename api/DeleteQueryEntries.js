let sql = require("sqlite");
sql.open("./src/db.sqlite");

class DeleteQueryEntries {
    static run() {
        sql.run("DELETE FROM queries").catch(e => console.log("[DeleteQueryEntries] An error occured: " + e));
    }
};

module.exports = DeleteQueryEntries;