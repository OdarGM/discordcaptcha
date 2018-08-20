let sql = require("sqlite");
sql.open("./src/db.sqlite");

class Unverify {
	/**
 	* @param {object} message - The message object
 	* @param {object} config - The config object
 	*/
	static run(message, config) {
		if(!message.member.roles.has(config.userrole)) return message.reply("you are not verified yet.");
		message.member.removeRole(config.userrole).catch(e => console.log(e)).then(() => message.reply("unverified!"));
	}
};

module.exports = Unverify;