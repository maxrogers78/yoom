'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDEBAR_LINKS } from '@/constants';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {SIDEBAR_LINKS.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(link.route);

          return (
            <Link
              href={link.route}
              key={link.route}
              className={cn(
                'flex items-center justify-start gap-4 rounded-lg p-4',
                isActive && 'bg-blue-1',
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className='text-lg font-semibold max-lg:hidden'>
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
