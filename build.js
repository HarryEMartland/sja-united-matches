"use strict";
import ejs from 'ejs'
import fs from 'fs/promises'
import fetch from 'node-fetch';
import moment from 'moment-timezone'

const OLD_TRAFFORD = 556;
const TWO_HOURS = 7200;
const TEMPLATE = './template.ejs';
const OUTPUT_FILE = './build/index.html';
const MAPS_LOCATION = 'Old Trafford, Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, UK'

const URL = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2021&team=33&next=20';
const headers = {
	'x-rapidapi-key': process.env.API_KEY,
	'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
}
const TIMEZONE = {timeZone: 'Europe/London'};
const TIME_SETTINGS = {...TIMEZONE, hour: '2-digit', minute: '2-digit'}

function buildGCalLink(teams, fixture) {
	return `https://www.google.com/calendar/render?action=TEMPLATE&\
			text=SJA United vs ${teams.away.name}&\
			dates=${moment((fixture.timestamp - TWO_HOURS) * 1000).tz('Europe/London').format('YYYYMMDDTHHmmss')}%2F${moment((fixture.timestamp + TWO_HOURS) * 1000).tz('Europe/London').format('YYYYMMDDTHHmmss')}\
			&location=${MAPS_LOCATION}`;
}

function buildDate(fixture) {
	return new Date(fixture.timestamp * 1000).toLocaleDateString("en-GB", TIMEZONE);
}

const build = async () => {

	const response = await fetch(URL, {headers}).then(r => r.json())

	const fixtures = response.response
		.filter(({fixture}) => fixture?.venue?.id === OLD_TRAFFORD)
		.map(({fixture, teams}) => {
			let date = buildDate(fixture);
			return ({
				date,
				kickOff: new Date(fixture.timestamp * 1000).toLocaleTimeString("en-GB", TIME_SETTINGS),
				onSite: new Date((fixture.timestamp - TWO_HOURS) * 1000).toLocaleTimeString("en-GB", TIME_SETTINGS),
				vs: teams.away.name,
				gCalLink: buildGCalLink(teams, fixture),
				bookLink: `mailto:sue.burke@sja.org.uk?subject=${date}%20Game&body=Hi Sue, please can you book me on the ${date} game.%0D%0A%0D%0AThanks%0D%0A%3CFull%20Name%3E`,
			});
		});
	const page = await ejs.renderFile(TEMPLATE, {fixtures}, {async: true})
	await fs.writeFile(OUTPUT_FILE, page)
};
build()