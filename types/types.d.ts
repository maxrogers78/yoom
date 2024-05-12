//* Layout
declare interface SidebarLink {
  label: string;
  route: string;
  imgUrl: string;
}

//* Params
declare interface MeetingPageParams {
  params: {
    id: string;
  };
}

//* Props
declare interface HomeCardProps {
  imgUrl: string;
  title: string;
  description: string;
  handleClick?: () => void;
  className?: React.HTMLProps<HTMLElement>['className'];
}

declare interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;

  buttonText?: string;
  buttonIcon?: string;
  imgUrl?: string;
  handleClick?: () => void;

  children?: React.ReactNode;
  className?: React.HTMLProps<HTMLElement>['className'];
}

declare interface MeetingSetupProps {
  setIsSetupCompleted: (value: boolean) => void;
}
