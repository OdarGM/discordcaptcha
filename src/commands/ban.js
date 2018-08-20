class Ban {
	/**
	* @param {Object} message - The message object, needed to get mentioned users, check if member has ADMINISTRATOR permissions and convert the first mentioned user in a guildmember 
 	* @param {array} contrib - Users that are allowed to use that command
 	* @returns {promise<void>}
	**/
	static async run(message, contrib) {
		if(!contrib || message.mentions.users.size === 0) return message.reply("you either aren't allowed to use the command or you did not mention an user.");
		if(contrib.includes(message.author.tag)) {
			await message.mentions.members.first().ban().catch(console.log);
			await message.reply("banned " + message.mentions.users.first().tag).catch(console.log);
		}
	}
};


module.exports = Ban;