import app from './app';

const PORT: number | string = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('GraphQL Server is listening to port', PORT);
});
