import { APIGatewayProxyHandler } from 'aws-lambda';
import serverless from 'serverless-http';
import app from './app';

const serverlessApp = serverless(app);
export const handler: APIGatewayProxyHandler = (event, context) => {
  return serverlessApp(event, context);
};
