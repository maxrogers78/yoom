'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
const apiSecret = process.env.STREAM_SECRET_KEY as string;

export const tokenProvider = async (): Promise<string> => {
  const user = await currentUser();

  if (!user) throw new Error('User is not logged in');
  if (!apiKey) throw new Error('Stream API key is required');
  if (!apiSecret) throw new Error('Stream SECRET key is required');

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000 - 60);

  const token = client.createToken(user.id, exp, issued);
  return token;
};
