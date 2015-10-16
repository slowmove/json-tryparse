process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

var parse = require('src/parse'),
	stringify = require('src/stringify');

JSON.tryParse = parse;
JSON.tryStringify = stringify;