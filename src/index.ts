import express from 'express';
import std from './libs/std';
import quotes from './quotes.json';

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    const quote = quotes[std.random(0, quotes.length)];
    res.send(JSON.stringify(quote));
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});