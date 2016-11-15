var loadtest = require('loadtest');
var options = {
    url: 'http://google.com',
    maxRequests: 100,
};

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(context);
    context.log(req);
    loadtest.loadTest(options, function(error, result)
    {
        if (error)
        {
            return console.error('Got an error: %s', error);
        }
        context.log(result);
        res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
        context.done(null, res);
    });
};