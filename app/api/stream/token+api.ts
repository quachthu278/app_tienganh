import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

export async function POST(request: Request) {
  if (!apiKey || !apiSecret) {
    return Response.json(
      { error: 'Missing Stream API keys' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return Response.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    const client = new StreamClient(apiKey, apiSecret);
    
    // Generate token valid for one hour
    const token = client.generateUserToken({ user_id: userId, validity_in_seconds: 3600 });

    return Response.json({ token });
  } catch (error: any) {
    console.error('Error generating token:', error);
    return Response.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
