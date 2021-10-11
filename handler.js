"use strict";
const ejs = require('ejs')


const template = `<html>
<body>
<%= test %>
</body>
</html>`

module.exports.hello = async (event) => {

	const data = {test: 'testValue'}

	return {
		statusCode: 200,
		body: ejs.render(template, data),
	};
};
