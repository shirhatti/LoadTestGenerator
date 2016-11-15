module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(context)
    context.log(req)
    res = {
        // status: 200, /* Defaults to 200 */
        body: "Hello " + (req.query.name || req.body.name)
    };
    context.done(null, res);
};