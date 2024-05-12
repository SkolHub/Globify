import { cn } from '@/lib/utils';
import InformationCard from '@/components/information-card';
import { Region } from '@/lib/types';
import { useState } from 'react';

export default function SidePanel({
  data
}: {
  data: Region;
}) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div
      className={cn(
        'fixed right-0 top-4 mr-4 flex h-[calc(100%-2rem)] rounded-3xl bg-white/50 shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-transform duration-200',
        open ? 'translate-x-0' : 'translate-x-[200%]'
      )}
    >
      <div className='flex w-6 items-center justify-center'>
        <i
          onClick={() => setOpen(false)}
          className='fa-solid fa-chevron-right scale-x-[.5] cursor-pointer p-2 pl-6 text-[3rem] text-neutral-400 hover:text-neutral-900'
        ></i>
      </div>
      <div className='w-[550px] overflow-y-auto px-4 py-8'>
        <h1 className='pb-1 font-goldplay text-4xl font-bold text-neutral-600'>
          {data.title}
        </h1>
        <h2
          className={`font-goldplay text-3xl font-semibold ${data.zone.color}`}
        >
          {data.zone.text}
        </h2>
        <div className='mt-4 flex flex-col gap-4'>
          <h3 className='text-2xl font-bold text-neutral-600'>Poziționare</h3>
          <div className='grid grid-cols-2'>
            <InformationCard
              title={'Pozitia pe glob'}
              description={data.position.position}
              icon='location-dot'
              border
            />
            <InformationCard
              title={'Regiuni caracteristice'}
              description={data.position.characteristicRegions}
              icon='map'
            />
          </div>
        </div>
        <div className='mt-4 flex flex-col gap-4'>
          <h3 className='text-2xl font-bold text-neutral-600'>Clima</h3>
          <div className='grid grid-cols-2 gap-y-8'>
            <InformationCard
              title={'Tipul de climă'}
              description={data.climate.climate}
              icon='sun'
              border
            />
            <InformationCard
              title={'Temperatură'}
              description={data.climate.temperature.text}
              textClassName={data.climate.temperature.color}
              icon='temperature-three-quarters'
            />
            <InformationCard
              title={'Precipitații'}
              description={data.climate.precipitation.text}
              textClassName={data.climate.precipitation.color}
              icon='raindrops'
              border
            />
            <InformationCard
              title={'Amplitudini termice anuale'}
              description={data.climate.termicAmplitude.text}
              textClassName={data.climate.termicAmplitude.color}
              icon='temperature-arrow-up'
            />
            <InformationCard
              title={'Vânturi'}
              description={data.climate.wind}
              icon='wind'
            />
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-2xl font-bold text-neutral-600'>Vegetația</h3>
          <p className='pt-4 text-base font-semibold text-neutral-600'>
            {data.vegetation.text}
          </p>
          <div className='flex flex-wrap pt-4'>
            {data.vegetation.photos.map((photo, index) => (
              <div key={index} className='grow basis-0 p-2'>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className='w-full rounded-2xl'
                />
                {photo?.title && (
                  <label className='text-sm font-semibold text-neutral-500'>
                    {photo.title}
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-2xl font-bold text-neutral-600'>Fauna</h3>
          <p className='pt-4 text-base font-semibold text-neutral-600'>
            {data.fauna.text}
          </p>
          <div className='flex flex-wrap pt-4'>
            {data.fauna?.photos?.map((photo, index) => (
              <div key={index} className='shrink grow basis-1/2 p-2'>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className='w-full rounded-2xl'
                />
                {photo?.title && (
                  <label className='text-sm font-semibold text-neutral-500'>
                    {photo.title}
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-2xl font-bold text-neutral-600'>Solurile</h3>
          <p className='pt-4 text-base font-semibold text-neutral-600'>
            {data.soil.text}
          </p>
          <div className='flex flex-wrap pt-4'>
            {data.soil?.photos?.map((photo, index) => (
              <div key={index} className='shrink grow basis-1/2 p-2'>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className='w-full rounded-2xl'
                />
                {photo?.title && (
                  <label className='text-sm font-semibold text-neutral-500'>
                    {photo.title}
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
