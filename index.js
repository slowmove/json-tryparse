var parse = require('./src/parse'),
	stringify = require('./src/stringify');

JSON.tryParse = parse;
JSON.tryStringify = stringify;