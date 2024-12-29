import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { layers } from '@/lib/data/layers';

export default function LayersDropdown({
  selectedLayers,
  setSelectedLayers
}: {
  selectedLayers: string[];
  setSelectedLayers: (layers: string[]) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='fixed bottom-auto left-4 top-4 flex items-center justify-center gap-2 rounded-2xl bg-[#2e2e2e]/50 px-4 py-3 text-[0.875rem] font-medium text-primary shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl focus:outline-0 active:bg-neutral-400/70 md:bottom-4 md:top-auto'>
          <i className='fa fa-layer-group text-2xl' />
          Layers
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' sideOffset={10}>
        {layers.map((layer, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={selectedLayers.includes(layer.key)}
            onCheckedChange={(checked) => {
              setSelectedLayers(
                checked
                  ? [...selectedLayers, layer.key]
                  : selectedLayers.filter((l) => l !== layer.key)
              );
            }}
          >
            <div className='flex items-center justify-start gap-2'>
              <i className={`${layer.icon} text-lg text-primary`} />
              <label className='text-sm font-medium text-primary'>
                {layer.name}
              </label>
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
