'use client';
import { useRouter } from 'next/navigation';
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

export default function EndCallButton() {
  const router = useRouter();
  const { toast } = useToast();

  const call = useCall();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push('/');
    toast({ title: 'Call ended successfuly' });
  };

  return (
    <Button onClick={endCall} variant='destructive'>
      End call for everyone
    </Button>
  );
}
