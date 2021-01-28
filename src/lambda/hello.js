exports.handler = function(event, context, callback) {
  console.log(event, context) // Seen in netlify functions tab
  callback(null, {
    statusCode: 200,
    body: `Hello, World. Your referer was: ${event.headers.referer}`
  });
};
