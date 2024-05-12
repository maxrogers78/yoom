'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';

export default function MeetingModal({
  isOpen,
  onClose,
  title,
  buttonText,
  buttonIcon,
  handleClick,
  imgUrl,
  className,
  children,
}: MeetingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='flex w-[520px] max-w-[95vw] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
        <div className='flex flex-col gap-6'>
          {imgUrl && (
            <div className='flex justify-center'>
              <Image src={imgUrl} alt={title} width={72} height={72} />
            </div>
          )}

          <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
            {title}
          </h1>

          {children}

          <Button
            className='flex-center gap-2 bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0'
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image src={buttonIcon} alt={title} width={13} height={13} />
            )}
            {buttonText || 'Schedule Meeting'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
