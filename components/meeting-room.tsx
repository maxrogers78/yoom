'use client';

import { cn } from '@/lib/utils';
import {
  Call,
  CallControls,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
} from '@stream-io/video-react-sdk';
import { useState } from 'react';

type Layout = 'speaker-left' | 'speaker-right' | 'grid';

export default function MeetingRoom() {
  const [layout, setLayout] = useState<Layout>('speaker-left');
  const [showParticipants, setShowParticipants] = useState<boolean>(false);

  const CallLayout = () => {
    switch (layout) {
      case 'speaker-left':
        return <SpeakerLayout participantsBarPosition='right' />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition='left' />;
      case 'grid':
        return <PaginatedGridLayout />;
      default:
        return <SpeakerLayout participantsBarPosition='right' />;
    }
  };

  return (
    <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
      <div className='flex-center relative size-full'>
        <div className='flex size-full max-w-[1000px] items-center'>
          <CallLayout />
        </div>

        <div
          className={cn(
            'ml-2 hidden h-[calc(100vh-86px)]',
            showParticipants && 'show-block',
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>

      <div className='flex-center fixed bottom-0 w-full gap-5'>
        <CallControls />
      </div>
    </section>
  );
}
