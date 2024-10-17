import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'API Server Running',
  });
});

app.listen(5555, () => {
  console.log(`Server running on port 5555`);
});
