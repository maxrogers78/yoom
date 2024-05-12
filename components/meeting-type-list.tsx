'use client';
import { useState } from 'react';
import HomeCard from './home-card';
import { useRouter } from 'next/navigation';
import MeetingModal from './meeting-modal';

type MeetingState =
  | 'isScheduleMeeting'
  | 'isJoingingMeeting'
  | 'isInstantMeeting'
  | undefined;

export default function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<MeetingState>();

  const createMeeting = () => {
    console.log(3);
  };

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        imgUrl='/icons/add-meeting.svg'
        title='New Meeting'
        description='Start an instant meeting'
        handleClick={() => setMeetingState('isInstantMeeting')}
        className='bg-orange-1'
      />

      <HomeCard
        imgUrl='/icons/schedule.svg'
        title='Schedule Meeting'
        description='PLan you meeting'
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className='bg-blue-1'
      />

      <HomeCard
        imgUrl='/icons/recordings.svg'
        title='View Recordings'
        description='Check your past meetings'
        handleClick={() => router.push('/recordings')}
        className='bg-purple-1'
      />

      <HomeCard
        imgUrl='/icons/join-meeting.svg'
        title='Join Meeting'
        description='via invitation link'
        handleClick={() => setMeetingState('isJoingingMeeting')}
        className='bg-yellow-1'
      />

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Start an Instant Meeting'
        className='text-center'
        buttonText='Start Meeting'
        handleClick={createMeeting}
      />
    </section>
  );
}
