const { readdirSync } = require("fs"),
commands = readdirSync("./src/commands").map(val => {
	return {
		[val.substr(0, val.indexOf(".js"))]: require(`./commands/${val}`),
		category: 0x1
	}
}).concat(readdirSync("./api/").filter(val => val !== "Handler.js").map(val => {
	return {
		[val.substr(0, val.indexOf(".js"))]: require(`../api/${val}`),
		category: 0x2
	}
}));

module.exports = async (message, config, latestVersion) => {
	let command = message.content.split(" ")[0].substr(config.prefix.length),
	category = null;
	if (command == "Handler" || !commands.map(val => Object.keys(val)).map(val2 => val2[0]).includes(command)) return;
	
	let module = commands.find(val => Object.keys(val)[0] === command)[command];
	module.run(message, Object.entries(config.commands).find(val => val[1].command === command)[1].contributors);
};