const TestUnit = require("../TestUnit").TestUnit;
const TestGoals = require("../TestGoals");

class WhereUnit extends TestUnit {
	constructor() {
		super();
		this.name = "WhereUnit";
	}

	run() {
		return new Promise((resolve, reject) => 
			this.client.getUser(this.config["irc_user"]).where().then(() => resolve(this.fulFillGoal(TestGoals.Where)), reject)
		);
	}
}

module.exports = new WhereUnit();