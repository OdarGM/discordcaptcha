let sql = require("sqlite");
sql.open("./src/db.sqlite");

class GetQueryEntries {
    /**
    * @returns {promise} queries - sqlite promise
    */
    static run() {
        return sql.all("SELECT * FROM queries").catch(e => console.log("An error occured: " + e));
    }
};

module.exports = GetQueryEntries;