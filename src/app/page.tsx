'use client';

import '@/lib/fontawesome/css/fa.css';
import Map from '@/components/map';
import LayersDropdown from '@/components/layers-dropdown';
import SidePanel from '@/components/side-panel';
import { useState } from 'react';
import { SidebarData } from '@/lib/types';
import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('@/components/map'), { ssr: false });

export default function Home() {
  const [open, setOpen] = useState(true);
  const [layers, setLayers] = useState<string[]>([]);

  const data: SidebarData = {
    title: 'Păduri tropicale umede',
    subtitle: 'Zona temperata',
    categories: [
      {
        title: 'Pozitionare',
        'content-type': 'items',
        items: [
          {
            title: 'Pozitia pe glob',
            icon: 'location-dot',
            text: '50°-60° latitudine nordică',
            'text-color': 'text-primary'
          },
          {
            title: 'Regiuni caracteristice',
            icon: 'map',
            text: 'Regiunile ecuatoriale și tropicale',
            'text-color': 'text-primary'
          }
        ]
      },
      {
        title: 'Clima',
        'content-type': 'items',
        items: [
          {
            title: 'Tipul de climă',
            icon: 'sun',
            text: 'musonică',
            'text-color': 'text-primary'
          },
          {
            title: 'Temperatura',
            icon: 'thermometer',
            text: '20°-25°C',
            'text-color': 'text-very-high'
          },
          {
            title: 'Precipitații',
            icon: 'raindrops',
            text: 'sezoniere -abundente în sezonul ploios (când musonul bate dinspre Oc. Indian spre Asia), reduse -în sezonul secetos (când musonul bate invers) . Aici se află polul precipitațiilor de pe Glob -Cherapundji, provincia Assam din India- 12 000 mm/an;',
            'text-color': 'text-primary'
          },
          {
            title: 'Amplitudine termică',
            icon: 'temperature',
            text: 'foarte mici ~ 5°C',
            'text-color': 'text-danger'
          },
          {
            title: 'Vânt',
            icon: 'wind',
            text: 'musonii, ce prezintă o circulație sezonieră de-a lungul anului',
            'text-color': 'text-primary'
          }
        ]
      },
      {
        title: 'Vegetația',
        'content-type': 'text',
        text: 'Asemănătoare cu pădurea ecuatorială, dar mai puțin deasă, iar în anotimpul secetos (iarna), arborii își pierd foliajul precum: teckul (arborele de fier), santal, arborele de camfor, bambus. Pe unele areale apare o vegetație extrem de deasă formată din arbuști și tufișuri cunoscută sub numele de junglă.',
        images: [
          {
            src: '/liane.png',
            title: 'Liane'
          },
          {
            src: '/liane.png',
            title: 'Liane'
          },
          {
            src: '/liane.png',
            title: 'Liane'
          },
          {
            src: '/liane.png',
            title: 'Liane'
          }
        ]
      },
      {
        title: 'Fauna',
        'content-type': 'text',
        text: 'Bogată formată din insecte, reptile, păsări, mamifere precum: maimuțe, elefanți, rinoceri, tigrii',
        images: [
          {
            src: '/liane.png',
            title: 'Pădure tropicală umedă (musonică) asfjlbas asfasf'
          },
          {
            src: '/liane.png',
            title: 'Pădure tropicală umedă (musonică) asfjlbas asfasf'
          }
        ]
      },
      {
        title: 'Sol',
        'content-type': 'text',
        text: 'Laterite',
        images: [
          {
            src: '/liane.png',
            title: 'liane'
          }
        ]
      }
    ]
  };
  return (
    <>
      {/*<Navbar />*/}
      <main>
        <LazyMap />
        <SidePanel open={open} data={data} setOpen={setOpen} />
        <LayersDropdown layers={layers} setLayers={setLayers} />
      </main>
    </>
  );
}
