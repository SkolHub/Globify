import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function MapDropdown({
  layers,
  setLayers
}: {
  layers: string[];
  setLayers: (layers: string[]) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='fixed left-4 top-4 flex items-center justify-center gap-2 rounded-2xl bg-[#2e2e2e]/50 px-4 py-3 text-[0.875rem] font-medium text-primary shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl focus:outline-0 active:bg-neutral-400/70'>
          <i className='fa fa-map text-2xl'></i>
          Hărți
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' sideOffset={10}>
        <DropdownMenuCheckboxItem
          checked={layers.includes('clima')}
          onCheckedChange={() => {
            setLayers(['clima']);
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-earth-americas text-lg text-primary'></i>
            <label className='text-sm font-medium text-primary'>Default</label>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={layers.includes('vegetatie')}
          onCheckedChange={() => {
            setLayers(['vegetatie']);
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-moon text-lg text-primary'></i>
            <label className='text-sm font-medium text-primary'>Luna</label>
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={layers.includes('hidrografie')}
          onCheckedChange={() => {
            setLayers(['hidrografie']);
          }}
        >
          <div className='flex items-center justify-start gap-2'>
            <i className='fa fa-circle-half-stroke text-lg text-primary'></i>
            <label className='text-sm font-medium text-primary'>Night</label>
          </div>
        </DropdownMenuCheckboxItem>
        {/*<DropdownMenuCheckboxItem
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
            <i className='fa fa-mountain text-lg text-primary'></i>
            <label className='text-sm font-medium text-primary'>Relief</label>
          </div>
        </DropdownMenuCheckboxItem>*/}
        {/*<DropdownMenuCheckboxItem
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
            <i className='fa fa-earth text-lg text-primary'></i>
            <label className='text-sm font-medium text-primary'>Solid</label>
          </div>
        </DropdownMenuCheckboxItem>*/}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
