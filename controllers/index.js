exports.getIndex = (req, res, next) => {
	const events = [
		{
			societyName: 'CCS',
			societyLogo: 'A logo here',
			eventName: 'Hackathon',
			eventPoster: 'A Poster here later',
			eventDescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			societyDiscord: 'abc-discord-link',
			societyWebsite: 'xyz.com',
			eventStartDate: Date.now(),
		},
		{
			societyName: 'Developer Student Club',
			societyLogo: 'A logo here',
			eventName: 'Recruitments',
			eventPoster: 'A Poster here later',
			eventDescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			societyDiscord: 'abc-discord-link',
			societyWebsite: 'xyz.com',
			eventStartDate: Date.now(),
		},
	];

	res.status(200).json({
		message: 'All events fetched',
		events: events,
	});
};
