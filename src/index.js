const app = require('./server.js');
const connectDb = require('./utils/db.js');

async function main() {
	await connectDb();
	app.listen(4000, () => console.log('Server running on port 4000'));
}

main();