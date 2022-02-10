const fastify = require('fastify');

// Create an instance of the Fastify web server with logging enabled 
const app = fastify({ logger: true });

app.get('/', function (request, reply) {
    reply.send({ status: 1 });
});

// Start the Fastify web server on port 3000, showing a 'ready' message when it has successfully launched
const server = app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`🚀 Server ready`);
    console.log(`Running on ${address}`);
});
