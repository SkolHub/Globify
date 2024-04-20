'use client';

import { useState } from 'react';
import '@/lib/fontawesome/css/fa.css';
import LayersDropdown from '@/components/layers-dropdown';
import SidePanel from '@/components/side-panel';
import Navbar from '@/components/navbar';
import Map from '@/components/map';
import { Region } from '@/lib/types';

export default function Home() {
  const [open, setOpen] = useState(true);
  const [layers, setLayers] = useState<string[]>([]);

  const data: Region = {
    title: 'Păduri tropicale umede',
    zone: { text: 'Zona caldă', color: 'text-neutral-600' },
    position: {
      position: 'regional în S și SE Asiei',
      characteristicRegions:
        'Pen India, Pen. Indochina, Madagascar, NE Australiei etc.'
    },
    climate: {
      climate: 'musonică',
      temperature: { text: '20°-25°C', color: 'text-very-high' },
      precipitation: {
        text: 'sezoniere -abundente în sezonul ploios (când musonul bate dinspre Oc. Indian spre Asia), reduse -în sezonul secetos (când musonul bate invers) . Aici se află polul precipitațiilor de pe Glob -Cherapundji, provincia Assam din India- 12 000 mm/an;',
        color: 'text-neutral-600'
      },
      termicAmplitude: { text: 'foarte mici ~ 5°C', color: 'text-danger' },
      wind: 'musonii, ce prezintă o circulație sezonieră de-a lungul anului'
    },
    vegetation: {
      text: 'Asemănătoare cu pădurea ecuatorială, dar mai puțin deasă, iar în anotimpul secetos (iarna), arborii își pierd foliajul precum: teckul (arborele de fier), santal, arborele de camfor, bambus. Pe unele areale apare o vegetație extrem de deasă formată din arbuști și tufișuri cunoscută sub numele de junglă.',
      photos: [
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
    fauna: {
      text: 'Bogată formată din insecte, reptile, păsări, mamifere precum: maimuțe, elefanți, rinoceri, tigrii',
      photos: [
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
    soil: {
      text: 'Laterite',
      photos: [
        {
          src: '/liane.png',
          title: 'liane'
        }
      ]
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Map open={open} setOpen={setOpen} />
        <SidePanel open={open} setOpen={setOpen} data={data} />
        <LayersDropdown layers={layers} setLayers={setLayers} />
      </main>
    </>
  );
}
