import { ReactNode } from 'react';
import { DictionaryContextProvider } from '@/dictionaries/use-dictionary';
import { getDictionary } from '@/dictionaries/dictionary';

export default async function ({
  children,
  params
}: {
  children: ReactNode;
  params: {
    lang: 'ro' | 'en';
  };
}) {
  return (
    <DictionaryContextProvider dictionary={await getDictionary(params.lang)}>
      {children}
    </DictionaryContextProvider>
  );
}
