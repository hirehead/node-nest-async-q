/// <reference path="typings/tsd.d.ts" />
var q = require('q');

module.exports.step = (app?: Nest.INest) => {
    app.q = < any > q;
    return app;
}
