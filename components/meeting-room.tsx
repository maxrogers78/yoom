'use client';
import { useState } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LayoutList, Users } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import EndCallButton from './end-call-button';
import Loader from './loader';

type Layout = 'speaker-left' | 'speaker-right' | 'grid';

export default function MeetingRoom() {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');

  const [layout, setLayout] = useState<Layout>('speaker-left');
  const [showParticipants, setShowParticipants] = useState<boolean>(false);

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

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

      <div className='flex-center absolute bottom-0 w-full flex-wrap gap-5'>
        <CallControls />

        <DropdownMenu>
          <div className='flex items-center'>
            <DropdownMenuTrigger className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
              <LayoutList size={20} className='text-white' />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className='border-dark-1 bg-dark-1 text-white'>
            <DropdownMenuLabel>Call layout</DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-dark-2' />
            {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item) => (
              <DropdownMenuItem
                key={item}
                onClick={() => setLayout(item.toLowerCase() as Layout)}
                className='cursor-pointer'
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <CallStatsButton />

        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
            <Users size={20} className='text-white' />
          </div>
        </button>

        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
}
