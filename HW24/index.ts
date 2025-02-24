import express, { Application, Request, Response } from 'express';

const app: Application = express();
app.use(express.json());

const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hallo!');
});


app.post('/', (req: Request, res: Response) => {
  const { name, message } = req.body;
  res.send(`Name:, ${name}, message: "${message}"`);
});


app.listen(port, () => {
  console.log(`Server is listening:${port}`);
});