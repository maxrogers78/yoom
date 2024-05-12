import MeetingTypeList from '@/components/meeting-type-list';
import { formatToDate, formatToTime } from '@/utils/formatters';

export default function HomePage() {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='bg-hero h-[300px] w-full rounded-[20px] bg-cover'>
        <div className='flex h-full flex-col justify-between px-5 py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
            Upcoming Meeting at: 12:30 PM
          </h2>

          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {formatToTime(new Date())}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {formatToDate(new Date())}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
}
