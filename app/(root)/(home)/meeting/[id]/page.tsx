'use client';
import Loader from '@/components/loader';
import MeetingRoom from '@/components/meeting-room';
import MeetingSetup from '@/components/meeting-setup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';

export default function MeetingPage({ params }: MeetingPageParams) {
  const { id } = params;
  const { user, isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupCompleted ? (
            <MeetingSetup setIsSetupCompleted={setIsSetupCompleted} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
}
