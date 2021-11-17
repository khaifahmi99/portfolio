import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { SNS } from 'aws-sdk';

const sns = new SNS();

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { body: rawBody } = event;
  const body = JSON.parse(rawBody);

  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing body',
      }),
    };
  }

  const { firstName, lastName, email, message } = body;
  const messageBody = `From: ${firstName} ${lastName} (${email})\nMessage: ${message}`;

  try {
    await sns
      .publish({
        Message: messageBody,
        Subject: 'Someone has reached out!',
        TopicArn: process.env.SNS_TOPIC_ARN,
      })
      .promise();

    return {
      statusCode: 200,
      body: 'Message Sent',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Something went wrong',
    };
  }
};
