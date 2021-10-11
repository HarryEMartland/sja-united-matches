"use strict";
const ejs = require('ejs')

const response = {
	"get": "fixtures",
	"parameters": {
		"season": "2021",
		"next": "10",
		"team": "33"
	},
	"errors": [],
	"results": 10,
	"paging": {
		"current": 1,
		"total": 1
	},
	"response": [
		{
			"fixture": {
				"id": 710630,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-10-16T14:00:00+00:00",
				"timestamp": 1634392800,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 547,
					"name": "King Power Stadium",
					"city": "Leicester, Leicestershire"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 39,
				"name": "Premier League",
				"country": "England",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/39.png",
				"flag": "https:\/\/media.api-sports.io\/flags\/gb.svg",
				"season": 2021,
				"round": "Regular Season - 8"
			},
			"teams": {
				"home": {
					"id": 46,
					"name": "Leicester",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/46.png",
					"winner": null
				},
				"away": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 787604,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-10-20T19:00:00+00:00",
				"timestamp": 1634756400,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 556,
					"name": "Old Trafford",
					"city": "Manchester"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 2,
				"name": "UEFA Champions League",
				"country": "World",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/2.png",
				"flag": null,
				"season": 2021,
				"round": "Group Stage - 3"
			},
			"teams": {
				"home": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				},
				"away": {
					"id": 499,
					"name": "Atalanta",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/499.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 710643,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-10-24T15:30:00+00:00",
				"timestamp": 1635089400,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 556,
					"name": "Old Trafford",
					"city": "Manchester"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 39,
				"name": "Premier League",
				"country": "England",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/39.png",
				"flag": "https:\/\/media.api-sports.io\/flags\/gb.svg",
				"season": 2021,
				"round": "Regular Season - 9"
			},
			"teams": {
				"home": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				},
				"away": {
					"id": 40,
					"name": "Liverpool",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/40.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 710653,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-10-30T17:30:00+00:00",
				"timestamp": 1635615000,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 593,
					"name": "Tottenham Hotspur Stadium",
					"city": "London"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 39,
				"name": "Premier League",
				"country": "England",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/39.png",
				"flag": "https:\/\/media.api-sports.io\/flags\/gb.svg",
				"season": 2021,
				"round": "Regular Season - 10"
			},
			"teams": {
				"home": {
					"id": 47,
					"name": "Tottenham",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/47.png",
					"winner": null
				},
				"away": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 787612,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-11-02T20:00:00+00:00",
				"timestamp": 1635883200,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": null,
					"name": null,
					"city": null
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 2,
				"name": "UEFA Champions League",
				"country": "World",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/2.png",
				"flag": null,
				"season": 2021,
				"round": "Group Stage - 4"
			},
			"teams": {
				"home": {
					"id": 499,
					"name": "Atalanta",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/499.png",
					"winner": null
				},
				"away": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 710663,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-11-06T12:30:00+00:00",
				"timestamp": 1636201800,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 556,
					"name": "Old Trafford",
					"city": "Manchester"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 39,
				"name": "Premier League",
				"country": "England",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/39.png",
				"flag": "https:\/\/media.api-sports.io\/flags\/gb.svg",
				"season": 2021,
				"round": "Regular Season - 11"
			},
			"teams": {
				"home": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				},
				"away": {
					"id": 50,
					"name": "Manchester City",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/50.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 710674,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-11-20T15:00:00+00:00",
				"timestamp": 1637420400,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 596,
					"name": "Vicarage Road",
					"city": "Watford"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 39,
				"name": "Premier League",
				"country": "England",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/39.png",
				"flag": "https:\/\/media.api-sports.io\/flags\/gb.svg",
				"season": 2021,
				"round": "Regular Season - 12"
			},
			"teams": {
				"home": {
					"id": 38,
					"name": "Watford",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/38.png",
					"winner": null
				},
				"away": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 787625,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-11-23T17:45:00+00:00",
				"timestamp": 1637689500,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": null,
					"name": null,
					"city": null
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 2,
				"name": "UEFA Champions League",
				"country": "World",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/2.png",
				"flag": null,
				"season": 2021,
				"round": "Group Stage - 5"
			},
			"teams": {
				"home": {
					"id": 533,
					"name": "Villarreal",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/533.png",
					"winner": null
				},
				"away": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 710680,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-11-28T16:30:00+00:00",
				"timestamp": 1638117000,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 519,
					"name": "Stamford Bridge",
					"city": "London"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 39,
				"name": "Premier League",
				"country": "England",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/39.png",
				"flag": "https:\/\/media.api-sports.io\/flags\/gb.svg",
				"season": 2021,
				"round": "Regular Season - 13"
			},
			"teams": {
				"home": {
					"id": 49,
					"name": "Chelsea",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/49.png",
					"winner": null
				},
				"away": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		},
		{
			"fixture": {
				"id": 710692,
				"referee": null,
				"timezone": "UTC",
				"date": "2021-11-30T20:00:00+00:00",
				"timestamp": 1638302400,
				"periods": {
					"first": null,
					"second": null
				},
				"venue": {
					"id": 556,
					"name": "Old Trafford",
					"city": "Manchester"
				},
				"status": {
					"long": "Not Started",
					"short": "NS",
					"elapsed": null
				}
			},
			"league": {
				"id": 39,
				"name": "Premier League",
				"country": "England",
				"logo": "https:\/\/media.api-sports.io\/football\/leagues\/39.png",
				"flag": "https:\/\/media.api-sports.io\/flags\/gb.svg",
				"season": 2021,
				"round": "Regular Season - 14"
			},
			"teams": {
				"home": {
					"id": 33,
					"name": "Manchester United",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/33.png",
					"winner": null
				},
				"away": {
					"id": 42,
					"name": "Arsenal",
					"logo": "https:\/\/media.api-sports.io\/football\/teams\/42.png",
					"winner": null
				}
			},
			"goals": {
				"home": null,
				"away": null
			},
			"score": {
				"halftime": {
					"home": null,
					"away": null
				},
				"fulltime": {
					"home": null,
					"away": null
				},
				"extratime": {
					"home": null,
					"away": null
				},
				"penalty": {
					"home": null,
					"away": null
				}
			}
		}
	]
};

const OLD_TRAFFORD = 556;
const TWO_HOURS = 7200;
const TEMPLATE = __dirname + '/template.ejs';

module.exports.hello = async (event) => {

	const fixtures = response.response
		.filter(({fixture}) => fixture?.venue?.id === OLD_TRAFFORD)
		.map(({fixture, teams}) => ({
			date: new Date(fixture.timestamp * 1000).toLocaleDateString("en-GB"),
			kickOff: new Date(fixture.timestamp * 1000).toLocaleTimeString("en-GB"),
			onSite: new Date((fixture.timestamp - TWO_HOURS) * 1000).toLocaleTimeString("en-GB"),
			vs: teams.away.name
		}));

	return {
		statusCode: 200,
		headers: {'Content-Type': 'text/html',},
		body: await ejs.renderFile(TEMPLATE, {fixtures}, {async: true}),
	};
};
