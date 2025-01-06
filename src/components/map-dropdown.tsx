import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { maps } from '@/lib/data/maps';
import { Dispatch, SetStateAction } from 'react';
import { useDictionary } from '@/dictionaries/use-dictionary';

export default function ({
  selectedMap,
  setSelectedMap
}: {
  selectedMap: string;
  setSelectedMap: Dispatch<SetStateAction<string>>;
}) {
  const dictionary = useDictionary();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='fixed right-4 top-4 flex items-center justify-center gap-2 rounded-2xl bg-[#2e2e2e]/50 px-4 py-3 text-[0.875rem] font-medium text-primary shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl focus:outline-0 active:bg-neutral-400/70 md:left-4 md:right-auto'>
          <i className='fa fa-map text-2xl' />
          {dictionary.mapsName}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' sideOffset={10}>
        {maps.map((map, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={map.key === selectedMap}
            onCheckedChange={() => {
              setSelectedMap(map.key);
            }}
          >
            <div className='flex items-center justify-start gap-2'>
              <i className={`${map.icon} text-lg text-primary`} />
              <label className='text-sm font-medium text-primary'>
                {dictionary.maps[map.key]}
              </label>
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
