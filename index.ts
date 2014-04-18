/// <reference path="_ref.d.ts" />
var q = require('q');

module.exports.step = (app: Nest.INest, done: () => any) => {
    app.modules.push({
    	name: "IAsync",
    	key: "NestAsyncQ",
    	instance : q,
    });
}