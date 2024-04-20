import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function LayersDropdown({
  layers,
  setLayers
}: {
  layers: string[];
  setLayers: (layers: string[]) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='fixed bottom-4 left-4 flex items-center justify-center gap-2 rounded-2xl bg-white/50 px-4 py-3 text-[0.875rem] font-medium text-neutral-600 shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl focus:outline-0 active:bg-neutral-400/70'>
          <i className='fa fa-layer-group text-2xl'></i>
          Straturi
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' sideOffset={10}>
        <DropdownMenuCheckboxItem
          checked={layers.includes('clima')}
          onCheckedChange={(checked) => {
            setLayers(
              checked
                ? [...layers, 'clima']
                : layers.filter((layer) => layer !== 'clima')
            );
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-sun-cloud text-lg text-neutral-600'></i>
            <label className='text-sm font-medium text-neutral-600'>
              Clima
            </label>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={layers.includes('vegetatie')}
          onCheckedChange={(checked) => {
            setLayers(
              checked
                ? [...layers, 'vegetatie']
                : layers.filter((layer) => layer !== 'vegetatie')
            );
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-leaf text-lg text-neutral-600'></i>
            <label className='text-sm font-medium text-neutral-600'>
              Vegetatie
            </label>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={layers.includes('hidrografie')}
          onCheckedChange={(checked) => {
            setLayers(
              checked
                ? [...layers, 'hidrografie']
                : layers.filter((layer) => layer !== 'hidrografie')
            );
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-water text-lg text-neutral-600'></i>
            <label className='text-sm font-medium text-neutral-600'>
              Hidrografie
            </label>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={layers.includes('relief')}
          onCheckedChange={(checked) => {
            setLayers(
              checked
                ? [...layers, 'relief']
                : layers.filter((layer) => layer !== 'relief')
            );
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-mountain text-lg text-neutral-600'></i>
            <label className='text-sm font-medium text-neutral-600'>
              Relief
            </label>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={layers.includes('placi tectonice')}
          onCheckedChange={(checked) => {
            setLayers(
              checked
                ? [...layers, 'placi tectonice']
                : layers.filter((layer) => layer !== 'placi tectonice')
            );
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-earth text-lg text-neutral-600'></i>
            <label className='text-sm font-medium text-neutral-600'>
              Placi tectonice
            </label>
          </div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
