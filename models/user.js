const db = require('../util/database');

module.exports = class User {
	//groupId is null when signing up
	constructor(userId, email, password, groupId) {
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.groupId = groupId;
	}

	save() {
		//returns a promise
		return db.execute(
			'INSERT INTO users (userId, email, password, groupId) VALUES (?, ?, ?, ?)',
			[this.userId, this.email, this.password, this.groupId]
		);
	}

	static findByEmail(email) {
		// return db.execute('SELECT * FROM users');
		return db.execute('SELECT * FROM users WHERE users.email = ?', [email])
	}
};
