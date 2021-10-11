"use strict";
import ejs from 'ejs'
import fs from 'fs/promises'
import fetch from 'node-fetch';

const OLD_TRAFFORD = 556;
const TWO_HOURS = 7200;
const TEMPLATE = './template.ejs';
const OUTPUT_FILE = './build/index.html';

const URL = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2021&team=33&next=20';
const headers = {
	'x-rapidapi-key': process.env.API_KEY,
	'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
}
const TIMEZONE = {timeZone: 'Europe/London'};
const TIME_SETTINGS = {...TIMEZONE, hour: '2-digit', minute: '2-digit'}
const build = async () => {

	const response = await fetch(URL, {headers}).then(r => r.json())

	const fixtures = response.response
		.filter(({fixture}) => fixture?.venue?.id === OLD_TRAFFORD)
		.map(({fixture, teams}) => ({
			date: new Date(fixture.timestamp * 1000).toLocaleDateString("en-GB", TIMEZONE),
			kickOff: new Date(fixture.timestamp * 1000).toLocaleTimeString("en-GB", TIME_SETTINGS),
			onSite: new Date((fixture.timestamp - TWO_HOURS) * 1000).toLocaleTimeString("en-GB", TIME_SETTINGS),
			vs: teams.away.name
		}));

	const page = await ejs.renderFile(TEMPLATE, {fixtures}, {async: true})
	await fs.mkdir('./build', {recursive: true})
	await fs.writeFile(OUTPUT_FILE, page)
};
build()