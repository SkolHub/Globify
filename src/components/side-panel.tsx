import { cn } from '@/lib/utils';

export default function SidePanel({ open }: { open: boolean }) {
  return (
    <div
      className={cn(
        'fixed right-0 top-4 mr-4 h-[calc(100%-2rem)] w-1/3 rounded-3xl bg-white/50 shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-transform duration-200',
        open ? 'translate-x-0' : 'translate-x-[110%]'
      )}
    ></div>
  );
}
