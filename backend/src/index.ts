import express, {Express, Request, Response} from 'express';
const { PORT = 3001 } = process.env;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('OK')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})